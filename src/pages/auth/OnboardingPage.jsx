import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Shield, CreditCard, CheckCircle, ChevronRight, Upload } from 'lucide-react';

export default function OnboardingPage() {
    const { user, updateOnboardingStep } = useAuth();
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        phone: '',
        position: 'Linha',
        teamName: '',
        goalkeeperName: '',
        teamLogo: null
    });

    const steps = [
        { number: 1, title: 'Perfil do Atleta', icon: User },
        { number: 2, title: 'Dados do Time', icon: Shield },
        { number: 3, title: 'Pagamento', icon: CreditCard },
    ];

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleFinish();
        }
    };

    const handleFinish = () => {
        // Simulate processing payment and completing onboarding
        updateOnboardingStep(4);
        navigate('/portal');
    };

    return (
        <div className="onboarding-page">
            <Navbar />
            <div className="onboarding-container">
                <div className="wizard-card">

                    {/* Progress Steps */}
                    <div className="steps-indicator">
                        {steps.map((step) => (
                            <div key={step.number} className={`step-item ${currentStep >= step.number ? 'active' : ''}`}>
                                <div className="step-circle">
                                    {currentStep > step.number ? <CheckCircle size={20} /> : step.icon && <step.icon size={20} />}
                                </div>
                                <span className="step-title">{step.title}</span>
                                {step.number < 3 && <div className="step-line"></div>}
                            </div>
                        ))}
                    </div>

                    <div className="wizard-content">
                        <AnimatePresence mode='wait'>

                            {/* Step 1: Athlete Profile */}
                            {currentStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <h2>Vamos começar pelo seu perfil</h2>
                                    <p className="step-subtitle">Confirme seus dados pessoais para a ficha de inscrição.</p>

                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Seu nome completo"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>WhatsApp</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="(15) 99999-9999"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Posição</label>
                                        <div className="position-options">
                                            {['Linha', 'Goleiro'].map(pos => (
                                                <button
                                                    key={pos}
                                                    className={`pos-btn ${formData.position === pos ? 'selected' : ''}`}
                                                    onClick={() => setFormData({ ...formData, position: pos })}
                                                >
                                                    {pos}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Team Data */}
                            {currentStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <h2>Agora sobre seu time</h2>
                                    <p className="step-subtitle">Como sua equipe será identificada no campeonato?</p>

                                    <div className="form-group">
                                        <label>Nome do Time</label>
                                        <input
                                            type="text"
                                            value={formData.teamName}
                                            onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                                            placeholder="Ex: Real Matismo"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Quem será o Goleiro?</label>
                                        <input
                                            type="text"
                                            value={formData.goalkeeperName}
                                            onChange={(e) => setFormData({ ...formData, goalkeeperName: e.target.value })}
                                            placeholder="Nome do goleiro"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Escudo do Time (Opcional)</label>
                                        <div className="upload-box">
                                            <Upload size={24} />
                                            <span>Clique para enviar ou arraste aqui</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Payment */}
                            {currentStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="step-content"
                                >
                                    <h2>Finalizar Inscrição</h2>
                                    <p className="step-subtitle">Realize o pagamento da taxa para garantir sua vaga.</p>

                                    <div className="payment-summary">
                                        <div className="summary-row">
                                            <span>Taxa de Inscrição</span>
                                            <strong>R$ 1.250,00</strong>
                                        </div>
                                        <div className="summary-row total">
                                            <span>Total</span>
                                            <strong>R$ 1.250,00</strong>
                                        </div>
                                    </div>

                                    <div className="qr-box">
                                        <div className="qr-code-placeholder">
                                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=X1ZeroQuinzePayment" alt="QR Code Pix" />
                                        </div>
                                        <p>Escaneie o QR Code para pagar via Pix</p>
                                        <button className="copy-btn">Copiar código Pix</button>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                    <div className="wizard-footer">
                        <button className="btn-next" onClick={handleNext}>
                            {currentStep === 3 ? 'Confirmar e Acessar Portal' : 'Continuar'} <ChevronRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
            <Footer />

            <style>{`
        .onboarding-page {
          min-height: 100vh;
          background-color: var(--color-darker);
          display: flex;
          flex-direction: column;
        }

        .onboarding-container {
            flex: 1;
            padding: 120px 1.5rem 4rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        .wizard-card {
            width: 100%;
            max-width: 600px;
            background: var(--color-card);
            border-radius: 1rem;
            border: 1px solid rgba(255,255,255,0.05);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        /* Steps Indicator */
        .steps-indicator {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding: 0 1rem;
        }

        .step-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            position: relative;
            flex: 1;
            color: var(--text-muted);
        }

        .step-item.active {
            color: white;
        }

        .step-item.active .step-circle {
            background: var(--color-primary);
            color: var(--color-darker);
            border-color: var(--color-primary);
        }

        .step-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-darker);
            transition: 0.3s;
            z-index: 2;
        }

        .step-title {
            font-size: 0.75rem;
            font-weight: 600;
        }

        .step-line {
            position: absolute;
            top: 20px;
            left: 50%;
            width: 100%;
            height: 2px;
            background: rgba(255,255,255,0.1);
            z-index: 1;
        }

        .step-item:last-child .step-line {
            display: none;
        }
        
        .step-item.active .step-line {
            background: var(--color-primary);
        }

        /* Content */
        .step-content h2 {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 0.5rem;
        }

        .step-subtitle {
            color: var(--text-muted);
            margin-bottom: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            color: white;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .form-group input {
            width: 100%;
            padding: 1rem;
            background: rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 0.5rem;
            color: white;
        }

        .position-options {
            display: flex;
            gap: 1rem;
        }

        .pos-btn {
            flex: 1;
            padding: 1rem;
            background: rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
            color: var(--text-muted);
            border-radius: 0.5rem;
        }

        .pos-btn.selected {
            background: var(--color-primary);
            color: var(--color-darker);
            font-weight: 700;
        }

        .upload-box {
            border: 2px dashed rgba(255,255,255,0.1);
            border-radius: 0.5rem;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            color: var(--text-muted);
            cursor: pointer;
            transition: 0.3s;
        }

        .upload-box:hover {
            border-color: var(--color-primary);
            color: white;
        }

        /* Payment */
        .payment-summary {
            background: rgba(0,0,0,0.2);
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin-bottom: 2rem;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            color: var(--text-muted);
            margin-bottom: 0.5rem;
        }

        .summary-row.total {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: white;
            font-size: 1.25rem;
        }

        .qr-box {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .qr-code-placeholder {
            background: white;
            padding: 1rem;
            border-radius: 0.5rem;
        }

        .copy-btn {
            background: transparent;
            color: var(--color-primary);
            border: 1px solid var(--color-primary);
            padding: 0.5rem 1rem;
            border-radius: 99px;
            font-size: 0.875rem;
            font-weight: 600;
        }

        .wizard-footer {
            margin-top: auto;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 1.5rem;
            display: flex;
            justify-content: flex-end;
        }

        .btn-next {
            background: var(--color-primary);
            color: var(--color-darker);
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: 0.3s;
        }

        .btn-next:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
      `}</style>
        </div>
    );
}
