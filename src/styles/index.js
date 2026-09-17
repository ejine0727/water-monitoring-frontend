const styles = {

  // GLOBAL & MAIN CONTAINER
  mainContainer: {
    backgroundColor: '#040b15',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  },

  // HEADER & NAVIGATION
  header: {
    padding: '18px 50px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0e2042',
    boxSizing: 'border-box'
  },

  title: {
    fontSize: '24px',
    fontWeight: '800',
    margin: 0,
    color: '#ffffff',
    lineHeight: 1.15
  },

  adminTag: {
    color: '#2870f2',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: '0 0 3px 0'
  },

  logoutBtn: {
    border: 'none',
    color: '#ffffff',
    padding: '10px 22px',
    borderRadius: '10px',
    background: '#2864e6',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    minWidth: '100px'
  },

  tabBar: {
    display: 'flex',
    gap: '12px',
    padding: '10px 50px 18px',
    background: '#0e2042',
    boxSizing: 'border-box',
    borderBottom: '2px solid #080f1d'
  },

  tab: {
    padding: '9px 22px',
    minWidth: '110px',
    borderRadius: '9px',
    background: '#3c4258',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '13px',
    boxSizing: 'border-box'
  },

  tabActive: {
    background: '#1d4ed8',
    color: '#fff'
  },

  // DASHBOARD CONTENT LAYOUT
  content: {
    maxWidth: '1250px',
    margin: '0 auto',
    padding: '30px 50px',
    boxSizing: 'border-box'
  },

  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 320px',
    gap: '24px',
    alignItems: 'start'
  },

  card: {
    background: '#0d1f3c',
    borderRadius: '16px',
    border: '1px solid #1e3a5f',
    padding: '22px',
    boxSizing: 'border-box'
  },

  sectionHead: {
    color: '#8fa3c0',
    fontSize: '10px',
    fontWeight: '700',
    margin: '0 0 14px',
    letterSpacing: '1.2px',
    textTransform: 'uppercase'
  },

  statsBox: {
    textAlign: 'center'
  },

  separator: {
    height: '1px',
    background: '#1e3a5f',
    margin: '15px 0'
  },

  // TANK STYLES
  tankRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '18px',
    alignItems: 'start',
    marginTop: '10px'
  },

  // SCHEDULE STYLES
  schedHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px'
  },

  plusBtn: {
    background: '#1d4ed8',
    color: '#fff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '10px',
    fontSize: '11px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  clearBtn: {
    background: 'transparent',
    border: '1px solid #ef4444',
    color: '#ef4444',
    padding: '6px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: 'bold'
  },

  // MODAL
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
  },

  modalContent: {
    background: '#0d1f3c',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '28px',
    border: '1px solid #1e3a5f',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
    overflow: 'hidden'
  },

  modalHeader: {
    background: '#1d4ed8',
    padding: '20px 30px'
  },

  modalBody: {
    padding: '30px'
  },

  modalInput: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    background: '#060e1a',
    border: '1px solid #1e3a5f',
    color: '#fff',
    marginBottom: '25px',
    fontSize: '14px',
    boxSizing: 'border-box',
    outline: 'none'
  },

  timePickerRow: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px'
  },

 timeBox: {
  flex: 1,
  minWidth: 0,
  background: '#060e1a',
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid #1e3a5f',
  boxSizing: 'border-box'
},

  timeLabel: {
    fontSize: '10px',
    color: '#64748b',
    marginBottom: '8px',
    display: 'block',
    letterSpacing: '1px'
  },

  // Kept for compatibility with any existing code
  timeInput: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '100%',
    outline: 'none',
    colorScheme: 'dark'
  },

  // COMBINED TIME INPUT + DROPDOWN
  timeInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },

  timeTextInput: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    minWidth: 0,
    outline: 'none',
    padding: 0,
    boxSizing: 'border-box'
  },

  timeDropdownToggle: {
    background: 'transparent',
    border: 'none',
    color: '#64748b',
    fontSize: '9px',
    cursor: 'pointer',
    padding: '4px',
    marginLeft: '5px'
  },

  timeDropdownButton: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    outline: 'none'
  },

  dropdownArrow: {
    fontSize: '9px',
    color: '#64748b',
    marginLeft: '8px'
  },

  timeDropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    left: 0,
    width: '100%',
    maxHeight: '220px',
    overflowY: 'auto',
    background: '#0d1f3c',
    border: '1px solid #1e3a5f',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    zIndex: 1100,
    padding: '5px',
    boxSizing: 'border-box'
  },

  timeDropdownOption: {
    width: '100%',
    background: 'transparent',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '13px',
    textAlign: 'left',
    padding: '9px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  },

  timeDropdownOptionActive: {
    background: '#1e3a5f',
    color: '#fff'
  },

  checkMark: {
    color: '#3b82f6',
    fontWeight: 'bold',
    marginLeft: '8px'
  },

  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '30px',
    padding: '0 30px 30px'
  },

  btnCancel: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  btnSave: {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  // LOGIN PAGE STYLES
  loginWrap: {
    height: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#040b15',
    position: 'fixed',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif"
  },

  loginCard: {
    width: '100%',
    maxWidth: '400px',
    padding: '50px 40px',
    textAlign: 'center',
    background: '#0d1f3c',
    borderRadius: '28px',
    border: '1px solid #1e3a5f',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column'
  },

  loginLogo: {
    fontSize: '60px',
    marginBottom: '20px'
  },

  loginTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#fff',
    margin: '0 0 10px 0',
    letterSpacing: '-0.5px'
  },

  loginSub: {
    fontSize: '11px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontWeight: 'bold',
    marginBottom: '40px'
  },

  formGroup: {
    textAlign: 'left',
    marginBottom: '20px'
  },

  label: {
    display: 'block',
    fontSize: '10px',
    color: '#3b82f6',
    fontWeight: 'bold',
    marginBottom: '8px',
    letterSpacing: '1px'
  },

  input: {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid #1e3a5f',
    background: '#060e1a',
    color: '#fff',
    boxSizing: 'border-box',
    fontSize: '14px',
    outline: 'none',
    transition: '0.3s'
  },

  loginBtn: {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    background: '#2563eb',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '15px',
    marginTop: '10px',
    boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)',
    transition: '0.3s'
  }

};

export default styles;