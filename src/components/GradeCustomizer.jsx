import { useState } from 'react';

const GRADE_CUSTOMIZATION_CONFIGS = {
  'salt-gel': {
    codePrefix: 'SG',
    defaultMesh: '200_std',
    meshOptions: [
      { id: '200_std', label: '200 Mesh (75 μm)', sub: 'Max 4% residue >75 μm (API standard drilling)' },
      { id: '200_fine', label: '200 Mesh Super-Gel', sub: 'Max 2% residue >75 μm (Rapid hydration)' },
      { id: '325_micro', label: '325 Mesh (44 μm)', sub: 'Micronized for high-pressure deep well completion' }
    ],
    defaultVisc: '35cps',
    viscOptions: [
      { id: '35cps', label: '35 cps Min @ 600 rpm', sub: 'Standard high-viscosity salt gel' },
      { id: '40cps', label: '40–42 cps Super Viscosity', sub: 'For saturated brine & high saline offshore wells' },
      { id: 'high_yield', label: 'High Yield Gel (100+ bbl/ton)', sub: 'High cutting suspension capacity' }
    ],
    defaultMoisture: '8pct',
    moistureOptions: [
      { id: '8pct', label: 'Standard Moisture (Max 8%)', sub: 'Controlled dry pulverizing' },
      { id: '5pct', label: 'Low Moisture (Max 5%)', sub: 'Thermally treated for long storage' }
    ],
    recommendedUses: ['Offshore Brine Drilling', 'Geothermal Wells', 'High Pressure Mud', 'Deep Salt Formations']
  },
  'api-13a': {
    codePrefix: 'API13A',
    defaultMesh: '200_api',
    meshOptions: [
      { id: '200_api', label: '200 Mesh (API Spec 13A)', sub: 'Max 8% residue >75 μm per API Section 12' },
      { id: '200_tight', label: '200 Mesh Tight Cut', sub: 'Max 5% residue >75 μm for reduced screen blinding' },
      { id: '325_api', label: '325 Mesh Micronized', sub: 'Sub-44 micron for specialized slurry systems' }
    ],
    defaultVisc: '30cps',
    viscOptions: [
      { id: '30cps', label: '30 cps Min @ 600 rpm', sub: 'Strict API Spec 13A Section 12 compliance' },
      { id: '35cps', label: '35 cps Premium Drilling', sub: 'Enhanced thixotropy in sea water fluids' }
    ],
    defaultMoisture: '16pct',
    moistureOptions: [
      { id: '16pct', label: 'Standard API Limit (Max 16%)', sub: 'Certified API Spec 13A baseline' },
      { id: '10pct', label: 'Reduced Moisture (Max 10%)', sub: 'Improved flowability & anti-clumping' }
    ],
    recommendedUses: ['API Certified Mud Systems', 'Seawater Drilling', 'Casing Cement Additive', 'Water Well Drilling']
  },
  'natural-powder': {
    codePrefix: 'NP',
    defaultMesh: '200',
    meshOptions: [
      { id: '200', label: '200 Mesh (75 μm)', sub: '95% passing · Standard agricultural carrier' },
      { id: '100', label: '100 Mesh (150 μm)', sub: 'Rapid flow for dry powder fertilizer blends' },
      { id: '325', label: '325 Mesh (44 μm)', sub: 'Superfine for Wettable Powder (WP) crop protection' }
    ],
    defaultVisc: 'high_absorb',
    viscOptions: [
      { id: 'high_absorb', label: 'High Liquid Absorption (120–150%)', sub: 'Active liquid pesticide carrier loading' },
      { id: 'ultra_absorb', label: 'Ultra Absorption (180–220%)', sub: 'Maximum chemical impregnation capacity' },
      { id: 'suspension', label: 'Suspension Concentrate Grade', sub: 'Suspension stabilizing in aqueous agro-liquids' }
    ],
    defaultMoisture: '10pct',
    moistureOptions: [
      { id: '10pct', label: 'Standard (Max 10%)', sub: 'Natural mineral moisture' },
      { id: '6pct', label: 'Dry Activated (Max 6%)', sub: 'For moisture-sensitive active ingredients' }
    ],
    recommendedUses: ['Pesticide Wettable Powders', 'Fertilizer Coating & Anti-Caking', 'Foundry Binding', 'Animal Feed Additive']
  },
  'flux-fine-200': {
    codePrefix: 'FF200',
    defaultMesh: '200',
    meshOptions: [
      { id: '200', label: '200 Mesh (75 μm)', sub: '95% passing · Standard foundry core wash powder' },
      { id: '150', label: '150 Mesh (105 μm)', sub: 'Faster slurry drainage in continuous casting' },
      { id: '250', label: '250 Mesh (60 μm)', sub: 'Ultra-smooth surface finish for precision casting' }
    ],
    defaultVisc: 'suspension_flux',
    viscOptions: [
      { id: 'suspension_flux', label: 'Controlled Swelling & Suspension', sub: 'Prevents refractory wash sedimentation' },
      { id: 'high_thixotropy', label: 'High Thixotropic Recovery', sub: 'Zero sag / dripping on vertical sand cores' },
      { id: 'swelling_95', label: 'High Swelling Index (95+ ml)', sub: 'Superior bonding for metal casting flux' }
    ],
    defaultMoisture: '8pct',
    moistureOptions: [
      { id: '8pct', label: 'Standard (Max 8%)', sub: 'Optimum binder moisture balance' },
      { id: '5pct', label: 'Calcined Low-Gas (Max 5%)', sub: 'Reduces blowholes and casting gas defects' }
    ],
    recommendedUses: ['Foundry Core Wash', 'Refractory Mold Coating', 'Steel Ingot Flux', 'Precision Casting']
  },
  'premium-325': {
    codePrefix: 'P325',
    defaultMesh: '325',
    meshOptions: [
      { id: '325', label: '325 Mesh (44 μm)', sub: '98.5% passing (wet) · Superfine micronised powder' },
      { id: '400', label: '400 Mesh (37 μm)', sub: 'Ultra-fine classification for high-gloss coatings' },
      { id: '200', label: '200 Mesh (75 μm)', sub: 'Economy industrial suspension grade' }
    ],
    defaultVisc: 'brookfield',
    viscOptions: [
      { id: 'brookfield', label: 'Brookfield Thixotropy (1200–1600 cP)', sub: 'Anti-sag, anti-splatter for emulsion paint' },
      { id: 'high_recovery', label: 'Rapid Shear Recovery (1600–2000 cP)', sub: 'High-build industrial coatings & mastics' },
      { id: 'syneresis', label: 'Syneresis & Anti-Settling Control', sub: 'Keeps heavy titanium dioxide suspended' }
    ],
    defaultMoisture: '6_8pct',
    moistureOptions: [
      { id: '6_8pct', label: 'Standard Low Moisture (6–8%)', sub: 'Published PDS specification' },
      { id: '4pct', label: 'Thermally Activated (Max 4%)', sub: 'For 1K & 2K polyurethane sealants & adhesives' }
    ],
    recommendedUses: ['Architectural Paints', 'Industrial Sealants', 'Tape Joint Compounds', 'Printing Inks']
  },
  'natural-granules': {
    codePrefix: 'NG',
    defaultMesh: '1_5mm',
    meshOptions: [
      { id: '1_5mm', label: '1–5 mm Crushed Granules', sub: 'Full particle spectrum · Maximum absorption volume' },
      { id: '1_3mm', label: '1–3 mm Spherical Ball Granules', sub: 'Uniform round granules for slow-release carriers' },
      { id: '2_4mm', label: '2–4 mm Granules', sub: 'Dust-free granules for chemical & spill control' }
    ],
    defaultVisc: 'absorb_180',
    viscOptions: [
      { id: 'absorb_180', label: 'High Absorption Capacity (180–220%)', sub: 'Rapid liquid entrapment & odor encapsulation' },
      { id: 'calcined_lvm', label: 'Calcined LVM (Low Volatile Matter)', sub: 'High particle crushing strength & zero mudding' },
      { id: 'rvm_natural', label: 'RVM (Regular Volatile Matter)', sub: 'Maximum porosity and natural softness' }
    ],
    defaultMoisture: '6pct',
    moistureOptions: [
      { id: '6pct', label: 'Standard Dry Granules (5–8%)', sub: 'Published PDS moisture range' },
      { id: '3pct', label: 'Kiln Calcined Ultra-Dry (Max 3%)', sub: 'Hardened granules for extreme spill cleanup' }
    ],
    recommendedUses: ['Premium Pet Care / Cat Litter', 'Industrial Oil & Spill Absorbents', 'Pesticide Granular Carrier', 'Soil Conditioner']
  }
};

const PACKAGING_OPTIONS = [
  { id: '25kg', label: '25 kg HDPE Bag', weightKg: 25, sub: 'Woven HDPE with inner PE liner' },
  { id: '50kg', label: '50 kg HDPE Bag', weightKg: 50, sub: 'Heavy-duty woven bag with liner' },
  { id: '1000kg', label: '1000 kg Jumbo Sack', weightKg: 1000, sub: '1 MT Bulk FIBC bag with loops' }
];

const QUANTITY_OPTIONS = [
  { id: 'sample', label: 'Lab Sample Evaluation (25 kg)', mt: 0.025, note: 'Air courier sample with COA' },
  { id: 'trial', label: 'Pilot Plant Trial (2 MT)', mt: 2, note: 'Ideal for formulation validation' },
  { id: 'fcl20', label: '1 x 20ft FCL (~20 MT)', mt: 20, note: 'Full container maritime export' },
  { id: 'annual', label: 'Annual Bulk Contract (50+ MT)', mt: 50, note: 'Scheduled monthly shipments' }
];

export default function GradeCustomizer({ product }) {
  const config = GRADE_CUSTOMIZATION_CONFIGS[product.id] || GRADE_CUSTOMIZATION_CONFIGS['premium-325'];

  const [mesh, setMesh] = useState(config.defaultMesh);
  const [visc, setVisc] = useState(config.defaultVisc);
  const [moisture, setMoisture] = useState(config.defaultMoisture);
  const [packaging, setPackaging] = useState('25kg');
  const [palletized, setPalletized] = useState(true);
  const [qty, setQty] = useState('fcl20');

  // Contact form state
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

  // Derived selections
  const currentMesh = config.meshOptions.find(m => m.id === mesh) || config.meshOptions[0];
  const currentVisc = config.viscOptions.find(v => v.id === visc) || config.viscOptions[0];
  const currentMoisture = config.moistureOptions.find(m => m.id === moisture) || config.moistureOptions[0];
  const currentPackaging = PACKAGING_OPTIONS.find(p => p.id === packaging) || PACKAGING_OPTIONS[0];
  const currentQty = QUANTITY_OPTIONS.find(q => q.id === qty) || QUANTITY_OPTIONS[2];

  // Automated packaging calculation
  const totalBags = Math.round((currentQty.mt * 1000) / currentPackaging.weightKg);
  const bagsPerPallet = currentPackaging.weightKg === 25 ? 40 : currentPackaging.weightKg === 50 ? 20 : 1;
  const totalPallets = Math.ceil(totalBags / bagsPerPallet);

  // Generated Recipe Spec Code
  const cleanMeshCode = mesh.toUpperCase().replace('_', '-');
  const cleanViscCode = visc.toUpperCase().replace('_', '-');
  const specCode = `BC-${config.codePrefix}-${cleanMeshCode}-${currentPackaging.weightKg}KG`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const getStructuredSpecText = () => {
    return (
      `*CUSTOM ${product.name.toUpperCase()} SPECIFICATION*\n` +
      `-----------------------------------------\n` +
      `*Base Product:* ${product.name} (${product.shortName})\n` +
      `*Formula Code:* ${specCode}\n` +
      `*Particle Size / Mesh:* ${currentMesh.label} (${currentMesh.sub})\n` +
      `*Target Viscosity / Rheology:* ${currentVisc.label}\n` +
      `*Moisture Specification:* ${currentMoisture.label}\n` +
      `*Packaging:* ${currentPackaging.label} (${palletized ? 'Palletized & Shrink-wrapped' : 'Loose Bags'})\n` +
      `*Volume Needed:* ${currentQty.label} (${totalBags} bags / ${totalPallets} pallets)\n` +
      `-----------------------------------------\n` +
      `*Inquirer Details:*\n` +
      `• Name: ${contact.name || 'Not provided'}\n` +
      `• Company: ${contact.company || 'Not provided'}\n` +
      `• Email: ${contact.email || 'Not provided'}\n` +
      `• Phone: ${contact.phone || 'Not provided'}\n` +
      `• Discharge Port / City: ${contact.destination || 'Not provided'}\n` +
      (contact.notes ? `• Specific Instructions: ${contact.notes}\n` : '') +
      `-----------------------------------------\n` +
      `Sent from Bentoclay Claytech ${product.shortName} Product Page`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = encodeURIComponent(`Custom ${product.shortName} Spec Quotation: ${specCode} - ${contact.company || contact.name}`);
      const body = encodeURIComponent(getStructuredSpecText());
      window.location.href = `mailto:bentoclayclaytech@gmail.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getStructuredSpecText());
    window.open(`https://wa.me/917435818628?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="grade-customizer-section" id="customizer-section">
      <div className="customizer-anchor-target"></div>
      <div className="grade-customizer-container">
        {/* Section Header */}
        <div className="customizer-header-bar">
          <div className="header-badge-row">
            <span className="spec-badge">GRADE CUSTOMIZER</span>
            <span className="live-pill">⚙ Interactive Spec Builder</span>
          </div>
          <h2>
            Customize <em>{product.name}</em>
          </h2>
          <p>
            Configure particle fineness, target rheology, moisture control, and packaging for <strong>{product.shortName}</strong>. Our Bhavnagar plant mills and controls batches to your exact formulation target.
          </p>
        </div>

        <div className="grade-customizer-layout">
          {/* Left Column: Interactive Parameters */}
          <div className="grade-customizer-controls">
            {/* 1. Particle Size / Mesh */}
            <div className="config-block">
              <div className="config-block-title">
                <span className="step-tag">01</span>
                <div>
                  <h4>Particle Distribution & Fineness (Mesh)</h4>
                  <small>Air-classified and pulverized in-house</small>
                </div>
              </div>
              <div className="config-options-stack">
                {config.meshOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`grade-radio-row ${mesh === opt.id ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`mesh-${product.id}`}
                      value={opt.id}
                      checked={mesh === opt.id}
                      onChange={() => setMesh(opt.id)}
                    />
                    <div className="radio-text-wrap">
                      <strong>{opt.label}</strong>
                      <span>{opt.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 2. Target Viscosity & Rheology */}
            <div className="config-block">
              <div className="config-block-title">
                <span className="step-tag">02</span>
                <div>
                  <h4>Target Viscosity & Rheological Performance</h4>
                  <small>Aligned with your manufacturing process</small>
                </div>
              </div>
              <div className="config-options-stack">
                {config.viscOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`grade-radio-row ${visc === opt.id ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`visc-${product.id}`}
                      value={opt.id}
                      checked={visc === opt.id}
                      onChange={() => setVisc(opt.id)}
                    />
                    <div className="radio-text-wrap">
                      <strong>{opt.label}</strong>
                      <span>{opt.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Moisture Specification */}
            <div className="config-block">
              <div className="config-block-title">
                <span className="step-tag">03</span>
                <div>
                  <h4>Free Moisture & Thermal Treatment</h4>
                  <small>Controlled rotary dried or kiln activated</small>
                </div>
              </div>
              <div className="config-grid-two">
                {config.moistureOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    className={`config-tile-btn ${moisture === opt.id ? 'active' : ''}`}
                    onClick={() => setMoisture(opt.id)}
                  >
                    <strong>{opt.label}</strong>
                    <span>{opt.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Packaging & Palletization */}
            <div className="config-block">
              <div className="config-block-title">
                <span className="step-tag">04</span>
                <div>
                  <h4>Export Packaging & Palletization</h4>
                  <small>Multi-modal export shipping from Mundra / Pipavav Port</small>
                </div>
              </div>
              <div className="config-grid-three">
                {PACKAGING_OPTIONS.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    className={`config-tile-btn ${packaging === pkg.id ? 'active' : ''}`}
                    onClick={() => setPackaging(pkg.id)}
                  >
                    <span className="tile-weight">{pkg.weightKg} kg</span>
                    <strong>{pkg.label}</strong>
                    <span>{pkg.sub}</span>
                  </button>
                ))}
              </div>

              <div className="pallet-checkbox-row">
                <label className="checkbox-wrap">
                  <input
                    type="checkbox"
                    checked={palletized}
                    onChange={(e) => setPalletized(e.target.checked)}
                  />
                  <span>Add ISPM-15 Heat-Treated Export Pallets & Waterproof Stretch Wrapping</span>
                </label>
              </div>
            </div>

            {/* 5. Required Volume */}
            <div className="config-block">
              <div className="config-block-title">
                <span className="step-tag">05</span>
                <div>
                  <h4>Required Trial / Batch Volume</h4>
                  <small>Dispatched from Bhavnagar manufacturing facility</small>
                </div>
              </div>
              <div className="config-options-stack">
                {QUANTITY_OPTIONS.map((q) => (
                  <label
                    key={q.id}
                    className={`grade-radio-row ${qty === q.id ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`qty-${product.id}`}
                      value={q.id}
                      checked={qty === q.id}
                      onChange={() => setQty(q.id)}
                    />
                    <div className="radio-text-wrap">
                      <strong>{q.label}</strong>
                      <span>{q.note}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Spec Sheet & Submission */}
          <aside className="grade-customizer-sidebar">
            <div className="grade-spec-sheet-box">
              {/* Sheet Header */}
              <div className="spec-box-header">
                <span className="sheet-tag">RECIPE SPECIFICATION CODE</span>
                <h3 className="sheet-code">{specCode}</h3>
                <div className="sheet-sub">
                  <span>Grade: {product.shortName}</span>
                  <span className="verified-dot">● In-House Formulated</span>
                </div>
              </div>

              {/* Summary Spec Grid */}
              <div className="spec-summary-grid">
                <div className="summary-cell">
                  <small>BASE MINERAL</small>
                  <strong>{product.shortName}</strong>
                </div>
                <div className="summary-cell">
                  <small>FORM / HABIT</small>
                  <strong>{product.form}</strong>
                </div>
                <div className="summary-cell">
                  <small>PARTICLE FINENESS</small>
                  <strong>{currentMesh.label}</strong>
                </div>
                <div className="summary-cell">
                  <small>TARGET RHEOLOGY</small>
                  <strong>{currentVisc.label}</strong>
                </div>
                <div className="summary-cell">
                  <small>MOISTURE LIMIT</small>
                  <strong>{currentMoisture.label}</strong>
                </div>
                <div className="summary-cell">
                  <small>PACKAGING</small>
                  <strong>{currentPackaging.label}</strong>
                </div>
              </div>

              {/* Packaging Breakdown Math */}
              <div className="spec-math-strip">
                <div className="math-col">
                  <span className="math-val">{totalBags}</span>
                  <span className="math-lbl">Total Bags</span>
                </div>
                <div className="math-col">
                  <span className="math-val">{totalPallets}</span>
                  <span className="math-lbl">Pallets</span>
                </div>
                <div className="math-col">
                  <span className="math-val">{currentQty.mt} MT</span>
                  <span className="math-lbl">Net Weight</span>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="spec-inquiry-container">
                {submitted ? (
                  <div className="custom-success-box" role="alert">
                    <div className="success-check">✓</div>
                    <h4>Inquiry Dispatched!</h4>
                    <p>
                      Your custom specification <b>{specCode}</b> has been received. Our Bhavnagar laboratory engineer will review viscosity and packaging requirements and reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="custom-quote-form">
                    <h5 className="form-heading">Request Custom Quotation for {product.shortName}</h5>

                    <div className="form-row-single">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name *"
                        value={contact.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-row-single">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Laboratory Name *"
                        value={contact.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-row-split">
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

                    <div className="form-row-single">
                      <input
                        type="text"
                        name="destination"
                        placeholder="Delivery Destination / Discharge Port (e.g. Mundra, Dubai)"
                        value={contact.destination}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-row-single">
                      <textarea
                        name="notes"
                        rows="2"
                        placeholder="Target slurry solids, required additive compatibility, or trial timeline..."
                        value={contact.notes}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-full-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Spec...' : 'Request Technical Quote ↗'}
                    </button>

                    <div className="instant-whatsapp-wrap">
                      <div className="divider-text">
                        <span>OR DIRECT WHATSAPP INQUIRY</span>
                      </div>
                      <button
                        type="button"
                        className="btn-whatsapp-instant"
                        onClick={handleWhatsApp}
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
                    </div>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
