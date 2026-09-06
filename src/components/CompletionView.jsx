import React from 'react';
import { CheckCircle2, RotateCcw, ArrowLeft } from 'lucide-react';

export default function CompletionView({ t, onRestart, onBack }) {
  return (
    <div className="completion-screen page-fade-enter">
      <div className="top-nav-bar">
        {onBack && (
          <button className="back-arrow-btn" onClick={onBack} aria-label="Go Back">
            <ArrowLeft size={20} color="#1C522D" />
          </button>
        )}
      </div>

      <div className="completion-content">
        <div className="check-badge-wrapper">
          <CheckCircle2 size={72} color="#538A46" />
        </div>

        <h1 className="completion-title">{t.setupComplete}</h1>
        <p className="completion-desc">{t.setupCompleteDesc}</p>
      </div>

      <div className="completion-footer">
        <button className="secondary-button restart-btn" onClick={onRestart}>
          <RotateCcw size={18} />
          <span>{t.restartFlow}</span>
        </button>
      </div>

      <style>{`
        .completion-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 32px 20px;
          height: 100%;
          background-color: var(--surface-warm);
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .completion-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: auto;
          margin-bottom: auto;
        }

        .check-badge-wrapper {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .completion-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 8px;
        }

        .completion-desc {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 280px;
          line-height: 1.4;
        }

        .completion-footer {
          width: 100%;
        }

        .restart-btn {
          background-color: var(--white);
          border: 1.5px solid var(--brand-green);
          color: var(--brand-deep-green);
        }
      `}</style>
    </div>
  );
}
