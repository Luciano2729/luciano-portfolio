import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { handleTerminalCommand } from '../data/terminalCommands';
import { sound } from '../utils/sound';

export default function TerminalDrawer({
  isOpen,
  onClose,
  setSoundEnabled,
  triggerConfetti,
}) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'MONOCHROME ARCHITECT OS // v2.4.0 (x86_64-linux)' },
    { type: 'output', text: 'Tapez "help" pour afficher les commandes autorisées.' },
    { type: 'hint', text: 'Suggestions rapides: "skills", "projects", "hire", "confetti"' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!inputVal.trim()) return;

      sound.playClick();
      const currentInput = inputVal;

      setCommandHistory((prev) => [...prev, currentInput]);
      setHistoryIndex(-1);

      if (currentInput.trim().toLowerCase() === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      }

      const results = handleTerminalCommand(currentInput, {
        setSoundEnabled,
        triggerConfetti,
        closeTerminal: onClose,
      });

      setHistory((prev) => [
        ...prev,
        { type: 'input', text: currentInput },
        ...results,
      ]);

      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleQuickCmd = (cmd) => {
    setInputVal(cmd);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out font-mono text-xs ${isMaximized
          ? 'inset-4 sm:inset-8 bg-black/95 border border-white'
          : 'bottom-0 left-0 right-0 h-96 sm:h-[480px] bg-black/95 border-t border-white/20'
        } flex flex-col shadow-2xl backdrop-blur-md`}
    >
      {/* Terminal Title Bar */}
      <div className="h-10 bg-neutral-900 border-b border-white/15 px-4 flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <TerminalIcon className="w-4 h-4 text-white" />
          <span className="font-semibold text-white tracking-wider text-[11px]">
            RANDRIANASOLO@CLI_HUD:~
          </span>
          <span className="text-[10px] text-neutral-500 hidden sm:inline">
            [SESSION_ACTIVE]
          </span>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="hidden md:flex items-center space-x-1.5 text-[10px]">
          {['help', 'skills', 'projects', 'hire', 'confetti'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleQuickCmd(cmd)}
              className="px-2 py-0.5 bg-neutral-800 hover:bg-white hover:text-black border border-white/10 text-neutral-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Window controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            title={isMaximized ? 'Réduire' : 'Agrandir'}
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 text-neutral-400 hover:text-white transition-colors"
            title="Fermer [Esc]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 text-neutral-200">
        {history.map((line, idx) => {
          if (line.type === 'input') {
            return (
              <div key={idx} className="flex items-center space-x-2 text-white font-semibold">
                <span className="text-neutral-500">guest@randrianasolo:~$</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'heading') {
            return (
              <div key={idx} className="text-white font-bold pt-2 border-t border-white/10">
                {line.text}
              </div>
            );
          }
          if (line.type === 'help-item') {
            return (
              <div key={idx} className="grid grid-cols-12 gap-2 text-neutral-300">
                <span className="col-span-4 sm:col-span-3 text-white font-bold">{line.cmd}</span>
                <span className="col-span-8 sm:col-span-9 text-neutral-400">{line.desc}</span>
              </div>
            );
          }
          if (line.type === 'section') {
            return (
              <div key={idx} className="text-white font-semibold pt-1">
                {line.text}
              </div>
            );
          }
          if (line.type === 'skill-row') {
            return (
              <div key={idx} className="text-neutral-400 font-mono">
                {line.text}
              </div>
            );
          }
          if (line.type === 'error') {
            return (
              <div key={idx} className="text-neutral-400 border-l-2 border-white pl-2">
                [ERREUR] {line.text}
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={idx} className="text-white bg-white/10 p-1.5 border border-white/20">
                {line.text}
              </div>
            );
          }
          if (line.type === 'hint') {
            return (
              <div key={idx} className="text-neutral-400 text-[11px] italic">
                {line.text}
              </div>
            );
          }
          return (
            <div key={idx} className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
              {line.text}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <div className="p-3 bg-black border-t border-white/15 flex items-center space-x-2">
        <span className="text-neutral-400 shrink-0 select-none">guest@randrianasolo:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tapez une commande (ex: help, skills, hire)..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder-neutral-600 font-mono text-xs"
        />
        <button
          onClick={() => {
            if (!inputVal.trim()) return;
            handleKeyDown({ key: 'Enter' });
          }}
          className="p-1.5 bg-white text-black hover:bg-neutral-200"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
