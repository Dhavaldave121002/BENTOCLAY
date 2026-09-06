import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const APPLICATIONS = [
  { id: 'paints', label: 'Paints & Coatings', icon: '🎨', defaultMesh: '325', defaultVisc: 'brookfield', base: 'Premium 325' },
  { id: 'drilling', label: 'Drilling Fluids (Oil & Water)', icon: '🛢️', defaultMesh: '200', defaultVisc: 'api', base: 'API-13A / Salt Gel' },
  { id: 'foundry', label: 'Foundry Core Wash & Flux', icon: '🔥', defaultMesh: '200', defaultVisc: 'swelling', base: 'Flux Fine-200' },
  { id: 'absorbent', label: 'Industrial Absorbent & Pet Care', icon: '🐾', defaultMesh: 'granules_1_5', defaultVisc: 'absorb', base: 'Natural Granules' },
  { id: 'agri', label: 'Agricultural & Pesticide Carrier', icon: '🌱', defaultMesh: 'granules_1_3', defaultVisc: 'absorb', base: 'Natural Powder / Granules' },
  { id: 'construction', label: 'Construction Chemicals & Mortars', icon: '🏗️', defaultMesh: '325', defaultVisc: 'brookfield', base: 'Premium 325' }
];

const FORM_OPTIONS = [
  { id: '325', type: 'powder', label: '325 Mesh (44 μm)', sub: '98.5% passing · Superfine micronised powder' },
  { id: '200', type: 'powder', label: '200 Mesh (75 μm)', sub: '95% passing · Standard industrial & drilling powder' },
  { id: '100', type: 'powder', label: '100 Mesh (150 μm)', sub: 'Rapid dispersion & high wet mesh throughput' },
  { id: 'granules_1_3', type: 'granules', label: '1–3 mm Ball Granules', sub: 'Porous spherical granules for carriers' },
  { id: 'granules_2_4', type: 'granules', label: '2–4 mm Granules', sub: 'High porosity & rapid liquid uptake' },
  { id: 'granules_1_5', type: 'granules', label: '1–5 mm Crushed Granules', sub: 'Full range cat litter & spill absorbent' }
];

const VISCOSITY_OPTIONS = [
  { id: 'api', label: 'API-13A Standard (30–35 cps)', sub: '600 rpm Fann dial · Saline mud rheology' },
  { id: 'high_gel', label: 'High Gel Strength (36–42 cps)', sub: 'Enhanced thixotropy for deep-water / brine' },
  { id: 'brookfield', label: 'Brookfield Thixotropy (1200–1600 cP)', sub: 'Shear-thinning anti-sag for coatings & sealants' },
  { id: 'swelling', label: 'High Swelling Index (95+ ml)', sub: 'Controlled suspension for metal casting fluxes' },
  { id: 'absorb', label: 'High Liquid Absorption (180–220%)', sub: 'Porous lattice fluid retention & odor control' }
];

const MOISTURE_OPTIONS = [
  { id: 'standard', label: 'Standard Moisture', val: 'Max 10–12%', sub: 'Natural atmospheric dried' },
  { id: 'calcined', label: 'Heat-Activated / Low Moisture', val: 'Max 6–8%', sub: 'Thermally dried for moisture-sensitive formulations' }
];

const PACKAGING_OPTIONS = [
  { id: '25kg', label: '25 kg HDPE Bag', weightKg: 25, sub: 'Woven HDPE with inner polyethylene moisture liner (Standard)' },
  { id: '50kg', label: '50 kg HDPE Bag', weightKg: 50, sub: 'Heavy-duty woven bag with PE liner' },
  { id: '1000kg', label: '1000 kg Jumbo Big Bag', weightKg: 1000, sub: '1 MT Bulk FIBC sack with 4 corner lifting loops' }
];

const QUANTITY_OPTIONS = [
  { id: 'sample', label: 'Lab Evaluation Sample (25 kg)', mt: 0.025, note: 'Dispatched via express air/courier for lab testing' },
  { id: 'trial', label: 'Trial Batch (2 Metric Tons)', mt: 2, note: 'Ideal for pilot plant testing' },
  { id: 'fcl20', label: '1 x 20ft FCL (~20 Metric Tons)', mt: 20, note: 'Standard full container load for maritime export' },
  { id: 'fcl40', label: 'Annual / Multi-FCL Contract (50+ MT)', mt: 60, note: 'Scheduled monthly deliveries with fixed price contract' }
];

export default function ProductConfigurator({ preSelectedGrade = null, onInquirySent = null }) {
  const [searchParams] = useSearchParams();
  const urlGrade = searchParams.get('grade') || preSelectedGrade;

  // Find initial application based on preselected grade
  const initialApp = useMemo(() => {
    if (!urlGrade) return APPLICATIONS[0];
    const lower = urlGrade.toLowerCase();
    if (lower.includes('salt') || lower.includes('api') || lower.includes('drill')) return APPLICATIONS[1];
    if (lower.includes('foundry') || lower.includes('flux')) return APPLICATIONS[2];
    if (lower.includes('granule') || lower.includes('cat')) return APPLICATIONS[3];
    return APPLICATIONS[0];
  }, [urlGrade]);

  const [selectedApp, setSelectedApp] = useState(initialApp.id);
  const [selectedForm, setSelectedForm] = useState(initialApp.defaultMesh);
  const [selectedVisc, setSelectedVisc] = useState(initialApp.defaultVisc);
  const [selectedMoisture, setSelectedMoisture] = useState('standard');
  const [selectedPackaging, setSelectedPackaging] = useState('25kg');
  const [palletized, setPalletized] = useState(true);
  const [selectedQty, setSelectedQty] = useState('fcl20');

  // Contact details state
  const [contact, setContact] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Derived calculation
  const currentApp = APPLICATIONS.find(a => a.id === selectedApp) || APPLICATIONS[0];
  const currentForm = FORM_OPTIONS.find(f => f.id === selectedForm) || FORM_OPTIONS[0];
  const currentVisc = VISCOSITY_OPTIONS.find(v => v.id === selectedVisc) || VISCOSITY_OPTIONS[0];
  const currentMoisture = MOISTURE_OPTIONS.find(m => m.id === selectedMoisture) || MOISTURE_OPTIONS[0];
  const currentPackaging = PACKAGING_OPTIONS.find(p => p.id === selectedPackaging) || PACKAGING_OPTIONS[0];
  const currentQty = QUANTITY_OPTIONS.find(q => q.id === selectedQty) || QUANTITY_OPTIONS[2];

  // Packaging calculation
  const totalBags = Math.round((currentQty.mt * 1000) / currentPackaging.weightKg);
  const bagsPerPallet = currentPackaging.weightKg === 25 ? 40 : currentPackaging.weightKg === 50 ? 20 : 1;
  const totalPallets = Math.ceil(totalBags / bagsPerPallet);

  // Generated Spec Code
  const specCode = `BC-${selectedApp.toUpperCase().slice(0, 4)}-${selectedForm.toUpperCase()}-${selectedPackaging.toUpperCase()}`;

  // Handle application change
  const handleAppChange = (appId) => {
    setSelectedApp(appId);
    const app = APPLICATIONS.find(a => a.id === appId);
    if (app) {
      setSelectedForm(app.defaultMesh);
      setSelectedVisc(app.defaultVisc);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  // Construct structured technical summary text
  const getStructuredSpecText = () => {
    return (
      `*CUSTOM ATTAPULGITE SPECIFICATION INQUIRY*\n` +
      `-----------------------------------------\n` +
      `*Formula Code:* ${specCode}\n` +
      `*Target Industry:* ${currentApp.label}\n` +
      `*Base Mineral Grade:* ${currentApp.base}\n` +
      `*Physical Form & Mesh:* ${currentForm.label} (${currentForm.sub})\n` +
      `*Viscosity / Rheology:* ${currentVisc.label}\n` +
      `*Free Moisture Limit:* ${currentMoisture.val} (${currentMoisture.label})\n` +
      `*Packaging:* ${currentPackaging.label} (${palletized ? 'Palletized & Shrink-wrapped' : 'Unpalletized / Loose'})\n` +
      `*Required Quantity:* ${currentQty.label}\n` +
      `*Packaging Breakdown:* ${totalBags} bags (${totalPallets} pallets)\n` +
      `-----------------------------------------\n` +
      `*Client Details:*\n` +
      `• Name: ${contact.name || 'Not specified'}\n` +
      `• Company: ${contact.company || 'Not specified'}\n` +
      `• Email: ${contact.email || 'Not specified'}\n` +
      `• Phone: ${contact.phone || 'Not specified'}\n` +
      `• Destination / Discharge Port: ${contact.destination || 'Not specified'}\n` +
      (contact.notes ? `• Special Requirements: ${contact.notes}\n` : '') +
      `-----------------------------------------\n` +
      `Sent via Bentoclay Claytech Online Configurator`
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      if (onInquirySent) onInquirySent(specCode);

      // Trigger mailto fallback
      const subject = encodeURIComponent(`Custom Attapulgite Spec Inquiry: ${specCode} - ${contact.company || contact.name}`);
      const body = encodeURIComponent(getStructuredSpecText());
      window.location.href = `mailto:bentoclayclaytech@gmail.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(getStructuredSpecText());
    window.open(`https://wa.me/917435818628?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="customizer-wrapper">
      <div className="customizer-grid">
        {/* Left Side: Interactive Configuration Steps */}
        <div className="customizer-controls">
          {/* Step 1: Industry Application */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 01</span>
              <h3>Select Application Domain</h3>
            </div>
            <p className="config-desc">
              Choose your manufacturing process. We automatically align the base rheology and crystalline habit.
            </p>
            <div className="config-chips-grid">
              {APPLICATIONS.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  className={`config-chip ${selectedApp === app.id ? 'selected' : ''}`}
                  onClick={() => handleAppChange(app.id)}
                >
                  <span className="chip-icon">{app.icon}</span>
                  <span className="chip-text">{app.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Form & Particle Size */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 02</span>
              <h3>Physical Form & Particle Size (Mesh)</h3>
            </div>
            <p className="config-desc">
              Controlled by drying, high-speed impact pulverizing, air classification, or spherical granulating.
            </p>
            <div className="config-options-list">
              {FORM_OPTIONS.map((f) => (
                <label
                  key={f.id}
                  className={`config-radio-card ${selectedForm === f.id ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="form"
                    value={f.id}
                    checked={selectedForm === f.id}
                    onChange={() => setSelectedForm(f.id)}
                  />
                  <div className="radio-card-content">
                    <div className="radio-card-title">
                      <strong>{f.label}</strong>
                      <span className="form-type-tag">{f.type.toUpperCase()}</span>
                    </div>
                    <small>{f.sub}</small>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 3: Target Viscosity & Performance Target */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 03</span>
              <h3>Target Viscosity & Rheology Parameter</h3>
            </div>
            <p className="config-desc">
              Specify the performance metric your formulation depends on:
            </p>
            <div className="config-options-list">
              {VISCOSITY_OPTIONS.map((v) => (
                <label
                  key={v.id}
                  className={`config-radio-card ${selectedVisc === v.id ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="viscosity"
                    value={v.id}
                    checked={selectedVisc === v.id}
                    onChange={() => setSelectedVisc(v.id)}
                  />
                  <div className="radio-card-content">
                    <strong>{v.label}</strong>
                    <small>{v.sub}</small>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 4: Moisture Control */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 04</span>
              <h3>Moisture Specifications</h3>
            </div>
            <div className="config-split-options">
              {MOISTURE_OPTIONS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`config-box-btn ${selectedMoisture === m.id ? 'selected' : ''}`}
                  onClick={() => setSelectedMoisture(m.id)}
                >
                  <span className="box-val">{m.val}</span>
                  <strong className="box-label">{m.label}</strong>
                  <small className="box-sub">{m.sub}</small>
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Packaging & Palletization */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 05</span>
              <h3>Packaging & Palletization</h3>
            </div>
            <div className="config-split-options three-cols">
              {PACKAGING_OPTIONS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`config-box-btn ${selectedPackaging === p.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPackaging(p.id)}
                >
                  <span className="box-val">{p.weightKg} kg</span>
                  <strong className="box-label">{p.label}</strong>
                  <small className="box-sub">{p.sub}</small>
                </button>
              ))}
            </div>

            <div className="pallet-toggle-row">
              <label className="checkbox-custom-label">
                <input
                  type="checkbox"
                  checked={palletized}
                  onChange={(e) => setPalletized(e.target.checked)}
                />
                <span>Include ISPM-15 heat-treated export wooden pallets with shrink-wrap</span>
              </label>
            </div>
          </div>

          {/* Step 6: Required Volume & Destination */}
          <div className="config-card">
            <div className="config-card-head">
              <span className="step-badge">STEP 06</span>
              <h3>Required Volume / Trial Scale</h3>
            </div>
            <div className="config-options-list">
              {QUANTITY_OPTIONS.map((q) => (
                <label
                  key={q.id}
                  className={`config-radio-card ${selectedQty === q.id ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="quantity"
                    value={q.id}
                    checked={selectedQty === q.id}
                    onChange={() => setSelectedQty(q.id)}
                  />
                  <div className="radio-card-content">
                    <strong>{q.label}</strong>
                    <small>{q.note}</small>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Live Spec Card & Custom Inquiry Form */}
        <aside className="customizer-sidebar">
          <div className="live-spec-sheet">
            <div className="spec-sheet-header">
              <span className="spec-eyebrow">CUSTOM SPECIFICATION SHEET</span>
              <h4 className="spec-code-title">{specCode}</h4>
              <span className="spec-status-pill">✓ 100% Formulation Compatible</span>
            </div>

            <div className="spec-meta-grid">
              <div className="meta-item">
                <small>TARGET APPLICATION</small>
                <strong>{currentApp.label}</strong>
              </div>
              <div className="meta-item">
                <small>BASELINE GRADE</small>
                <strong>{currentApp.base}</strong>
              </div>
              <div className="meta-item">
                <small>PARTICLE SIZE</small>
                <strong>{currentForm.label}</strong>
              </div>
              <div className="meta-item">
                <small>RHEOLOGY TARGET</small>
                <strong>{currentVisc.label}</strong>
              </div>
              <div className="meta-item">
                <small>FREE MOISTURE</small>
                <strong>{currentMoisture.val}</strong>
              </div>
              <div className="meta-item">
                <small>PACKAGING</small>
                <strong>{currentPackaging.label}</strong>
              </div>
            </div>

            {/* Packaging Math breakdown */}
            <div className="packaging-calculator-box">
              <div className="calc-item">
                <span className="calc-num">{totalBags}</span>
                <span className="calc-desc">Total Bags</span>
              </div>
              <div className="calc-item">
                <span className="calc-num">{totalPallets}</span>
                <span className="calc-desc">Pallets</span>
              </div>
              <div className="calc-item">
                <span className="calc-num">{currentQty.mt} MT</span>
                <span className="calc-desc">Net Weight</span>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <form className="custom-inquiry-form" onSubmit={handleFormSubmit}>
              <h5>Submit Custom Technical Inquiry</h5>

              {submitted ? (
                <div className="custom-success-banner" role="alert">
                  <div className="success-icon">✓</div>
                  <strong>Custom Specification Submitted!</strong>
                  <p>Our Bhavnagar technical team has received recipe <b>{specCode}</b> and will reply within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="custom-input-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={contact.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="custom-input-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name *"
                      value={contact.company}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="custom-input-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email *"
                      value={contact.email}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={contact.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="custom-input-group">
                    <input
                      type="text"
                      name="destination"
                      placeholder="Delivery City or Discharge Port (e.g. Mundra, Jebel Ali)"
                      value={contact.destination}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="custom-input-group">
                    <textarea
                      name="notes"
                      rows="2"
                      placeholder="Specific target viscosity, slurry requirements, or chemical additives..."
                      value={contact.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Request Custom Spec Quotation ↗'}
                  </button>

                  <div className="inquiry-or-divider">
                    <span>OR INSTANT TECHNICAL CHAT</span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-whatsapp-direct btn-full"
                    onClick={handleWhatsAppDispatch}
                  >
                    <svg
                      className="wa-svg-icon"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.95 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.62 8.56 7.62 9.76C7.62 10.96 8.5 12.12 8.62 12.28C8.75 12.44 10.33 14.89 12.76 15.94C14.79 16.81 15.2 16.64 15.63 16.6C16.07 16.56 17.04 16.03 17.24 15.47C17.45 14.9 17.45 14.42 17.38 14.32C17.32 14.21 17.16 14.15 16.92 14.03C16.67 13.91 15.48 13.32 15.26 13.24C15.04 13.16 14.88 13.12 14.71 13.36C14.55 13.6 14.08 14.15 13.93 14.32C13.79 14.48 13.65 14.5 13.4 14.38C13.16 14.26 12.38 14 11.46 13.18C10.74 12.54 10.25 11.75 10.11 11.51C9.97 11.27 10.09 11.14 10.21 11.02C10.32 10.91 10.46 10.73 10.59 10.58C10.71 10.43 10.76 10.33 10.84 10.17C10.92 10.01 10.88 9.87 10.82 9.75C10.76 9.63 10.29 8.47 10.09 8C9.9 7.54 9.7 7.61 9.55 7.6C9.41 7.6 9.25 7.44 9.11 7.44Z" />
                    </svg>
                    <span>Send Custom Spec via WhatsApp</span>
                  </button>
                </>
              )}
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
