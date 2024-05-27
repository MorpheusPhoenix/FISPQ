document.addEventListener('DOMContentLoaded', () => {
    const documents = [
    {
        title: "3m - Adesivo Para Juntas De Motores Diesel",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/3m%20-%20Adesivo%20Para%20Juntas%20De%20Motores%20Diesel.pdf"
    },
    {
        title: "Acs - Base Laca Nitrocelulose",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Acs%20-%20Base%20Laca%20Nitrocelulose.pdf"
    },
    {
        title: "Alcool Poti 70° Inpm",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Alcool%20Poti%2070%C2%B0%20Inpm.pdf"
    },
    {
        title: "Anjo Tintas - Thinner 2900",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Anjo%20Tintas%20-%20Thinner%202900.pdf"
    },
    {
        title: "Ascael - Detector De Fumaça Aerossol",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Ascael%20-%20Detector%20De%20Fuma%C3%A7a%20Aerossol.pdf"
    },
    {
        title: "Atlas Copco - Óleos Lubrificate - Roto-Synthetic Xtend Duty",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Atlas%20Copco%20-%20%C3%93leos%20Lubrificate%20-%20Roto-Synthetic%20Xtend%20Duty.pdf"
    },
    {
        title: "Baston - Espuma Poliuretano Chemicolor Aerossol",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Baston%20-%20Espuma%20Poliuretano%20Chemicolor%20Aerossol.pdf"
    },
    {
        title: "Br Petrobras - Lubrax Hydra 68",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Petrobras%20-%20Lubrax%20Hydra%2068.pdf"
    },
    {
        title: "Br Petrobras - Lubrax Hydra Xp",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Petrobras%20-%20Lubrax%20Hydra%20Xp.pdf"
    },
    {
        title: "Br Pt - Lubrax 20w40",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Pt%20-%20Lubrax%2020w40.pdf"
    },
    {
        title: "Br Pt - Lubrax Gear 680",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Pt%20-%20Lubrax%20Gear%20680.pdf"
    },
    {
        title: "Br Pt - Lubrax Hydra - 68",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Pt%20-%20Lubrax%20Hydra%20-%2068.pdf"
    },
    {
        title: "Br Pt - Óleo Diesel B S500 Adit. Petrobras Grid",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Br%20Pt%20-%20%C3%93leo%20Diesel%20B%20S500%20Adit.%20Petrobras%20Grid.pdf"
    },
    {
        title: "Chemicals Universal - Desengraxante Alcalino Hepta 1000",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Chemicals%20Universal%20-%20Desengraxante%20Alcalino%20Hepta%201000.pdf"
    },
    {
        title: "Chemicals Universal - Sabão Desengraxante",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Chemicals%20Universal%20-%20Sab%C3%A3o%20Desengraxante.pdf"
    },
    {
        title: "Edwards - Óleo Lubrificante Para Bomba Mecânica",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Edwards%20-%20%C3%93leo%20Lubrificante%20Para%20Bomba%20Mec%C3%A2nica.pdf"
    },
    {
        title: "Eucatex - Fundo Galvanizado",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Eucatex%20-%20Fundo%20Galvanizado.pdf"
    },
    {
        title: "Eucatex - Super Piso Acrílico Premium Branco",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Eucatex%20-%20Super%20Piso%20Acr%C3%ADlico%20Premium%20Branco.PDF"
    },
    {
        title: "Eucatex Via-Tech Tinta De Demarcação Viária Verde",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Eucatex%20Via-Tech%20Tinta%20De%20Demarca%C3%A7%C3%A3o%20Vi%C3%A1ria%20Verde.pdf"
    },
    {
        title: "Exxonmobil - Mobil Dte 26",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Exxonmobil%20-%20Mobil%20Dte%2026.pdf"
    },
    {
        title: "Exxonmobil - Mobil Super Moto 4t 20w-50",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Exxonmobil%20-%20Mobil%20Super%20Moto%204t%2020w-50.pdf"
    },
    {
        title: "Gitanes Street Car - Graxa Rolamento Mp2",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Gitanes%20Street%20Car%20-%20Graxa%20Rolamento%20Mp2.pdf"
    },
    {
        title: "Gt Oil Lh",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Gt%20Oil%20Lh.pdf"
    },
    {
        title: "Henkel - Super Bonder Original",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Henkel%20-%20Super%20Bonder%20Original.pdf"
    },
    {
        title: "Juntalider - Gesso Rápido",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Juntalider%20-%20Gesso%20R%C3%A1pido.pdf"
    },
    {
        title: "Lubrax - Lubrax Gear 220",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lubrax%20-%20Lubrax%20Gear%20220.pdf"
    },
    {
        title: "Lucheti - Hidra Aw 32",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lucheti%20-%20Hidra%20Aw%2032.pdf"
    },
    {
        title: "Lukscolor - Acrilico Premium Rende Plus",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lukscolor%20-%20%20Acrilico%20Premium%20Rende%20Plus.pdf"
    },
    {
        title: "Lukscolor - Fosco Supra Acrílico Premium Plus",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lukscolor%20-%20Fosco%20Supra%20Acr%C3%ADlico%20Premium%20Plus.pdf"
    },
    {
        title: "Lukscolor - Lukspiso Premium Plus",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lukscolor%20-%20Lukspiso%20Premium%20Plus.pdf"
    },
    {
        title: "Lukscolor - Tradição Acrílico Premium Plus - Azul Porcelana",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Lukscolor%20-%20Tradi%C3%A7%C3%A3o%20Acr%C3%ADlico%20Premium%20Plus%20-%20Azul%20Porcelana.pdf"
    },
    {
        title: "Massa Acrilica Eucatex",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Massa%20Acrilica%20Eucatex.pdf"
    },
    {
        title: "Maza - Aguarraz",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Maza%20-%20Aguarraz.pdf"
    },
    {
        title: "Maza - Demarcação Acrílica Dnit 3,16 Amarelo",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Maza%20-%20Demarca%C3%A7%C3%A3o%20Acr%C3%ADlica%20Dnit%203,16%20Amarelo.pdf"
    },
    {
        title: "Maza - Mazapoxi M298 Ii",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Maza%20-%20Mazapoxi%20M298%20Ii.pdf"
    },
    {
        title: "Moria - Vaselina Sólida",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Moria%20-%20Vaselina%20S%C3%B3lida.pdf"
    },
    {
        title: "Nutriex Indústria - Protetor Solar Fps 30 Repelente Nutriex Profissional",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Nutriex%20Ind%C3%BAstria%20-%20Protetor%20Solar%20Fps%2030%20Repelente%20Nutriex%20Profissional.pdf"
    },
    {
        title: "Orbi Química - Orbi Limpa Contatos",
        department: "Manutenção",
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Orbi%20Qu%C3%ADmica%20-%20Orbi%20Limpa%20Contatos.pdf"
    },
    { 
        title: "Orbifix - Trava Rolamento", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Orbifix%20-%20Trava%20Rolamento.pdf" 
    },
    { 
        title: "Paraflu - Paraflu Bio Fluido Concentrado Orgânico Para Radiadores", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Paraflu%20-%20Paraflu%20Bio%20Fluido%20Concentrado%20Org%C3%A2nico%20Para%20Radiadores.pdf" 
    },
    { 
        title: "Quimatic - Quimatic 1 Ecologico _ Óleo De Corte", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Quimatic%20-%20Quimatic%201%20Ecologico%20_%20%C3%93leo%20De%20Corte.pdf" 
    },
    { 
        title: "Quimatic Tapmatic - Fita Isolante Líquida Quimatic.", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Quimatic%20Tapmatic%20-%20Fita%20Isolante%20L%C3%ADquida%20Quimatic..pdf" 
    },
    { 
        title: "Radibras - Fluido De Radiadores - Solução Pronto Uso Coolant Plus", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Radibras%20-%20Fluido%20De%20Radiadores%20-%20Solu%C3%A7%C3%A3o%20Pronto%20Uso%20Coolant%20Plus.pdf" 
    },
    { 
        title: "Radna - Água Bi-Desmineralizada", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Radna%20-%20%C3%81gua%20Bi-Desmineralizada.pdf" 
    },
    { 
        title: "Reckitt Benckiser - Veja Multiuso", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Reckitt%20Benckiser%20-%20Veja%20Multiuso.pdf" 
    },
    { 
        title: "Renko - Álcool Gel - Antisséptico para as Mãos", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Renko%20-%20%C3%81lcool%20Gel%20-%20Antiss%C3%A9ptico%20para%20as%20M%C3%A3os.pdf" 
    },
    { 
        title: "Sherwin-Williams - Arte Urbana Azul Europeia", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Arte%20Urbana%20Azul%20Europeia.pdf" 
    },
    { 
        title: "Sherwin-Williams - Arte Urbana Branco Gelo", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Arte%20Urbana%20Branco%20Gelo.pdf" 
    },
    { 
        title: "Sherwin-Williams - Arte Urbana Cinza Londres", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Arte%20Urbana%20Cinza%20Londres.pdf" 
    },
    { 
        title: "Sherwin-Williams - Arte Urbana Magenta", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Arte%20Urbana%20Magenta.pdf" 
    },
    { 
        title: "Sherwin-Williams - Arte Urbana Verde Ervilha", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Arte%20Urbana%20Verde%20Ervilha.pdf" 
    },
    { 
        title: "Sherwin-Williams - Colorgin Novo Super Galvite", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Colorgin%20Novo%20Super%20Galvite.pdf" 
    },
    { 
        title: "Sherwin-Williams - Decor Spray Preto Fosco", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20Decor%20Spray%20Preto%20Fosco.pdf" 
    },
    { 
        title: "Sherwin-Williams - U Geral Premium Preto Semi Brilho", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sherwin-Williams%20-%20U%20Geral%20Premium%20Preto%20Semi%20Brilho.pdf" 
    },
    { 
        title: "Sika S.A - Sika Multiseal-S", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Sika%20S.A%20-%20Sika%20Multiseal-S.pdf" 
    },
    { 
        title: "Spray Amarelo", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Spray%20Amarelo.pdf" 
    },
    { 
        title: "Starrett - Micro-Óleo Anticorrosivo M1 (Aerossol)", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Starrett%20-%20Micro-%C3%93leo%20Anticorrosivo%20M1%20(Aerossol).pdf" 
    },
    { 
        title: "Tapmatic - Quimatic 1 Ecológico", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Tapmatic%20-%20Quimatic%201%20Ecol%C3%B3gico.pdf" 
    },
    { 
        title: "Ultralub - Limpa Contato Elétrico", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Ultralub%20-%20Limpa%20Contato%20El%C3%A9trico.pdf" 
    },
    { 
        title: "Vedacit - Compound Adesivo", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Vedacit%20-%20Compound%20Adesivo.pdf" 
    },
    { 
        title: "Vedacit - Vedapren", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Vedacit%20-%20Vedapren.pdf" 
    },
    { 
        title: "Vonder - Óleo P Compressores Aw150 1l Vonder", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Vonder%20-%20%C3%93leo%20P%20Compressores%20Aw150%201l%20Vonder.pdf" 
    },
    { 
        title: "Vonder - Óleo Pneumático 1l", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Vonder%20-%20%C3%93leo%20Pneum%C3%A1tico%201l.pdf" 
    },
    { 
        title: "Wd 40", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Wd%2040.pdf" 
    },
    { 
        title: "Weber - Rejuntamento Quartzolit", 
        department: "Manutenção", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Manuten%C3%A7%C3%A3o%20e%20Almoxarifado/Weber%20-%20Rejuntamento%20Quartzolit.pdf" 
    },
    { 
        title: "Anhembi - Multiuso", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Anhembi%20-%20Multiuso.pdf" 
    },
    { 
        title: "Anhembi - Água Sanitária", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Anhembi%20-%20%C3%81gua%20Sanit%C3%A1ria.pdf" 
    },
    { 
        title: "Archote - Agifacil Hidralcool 70° Inpm", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Archote%20-%20Agifacil%20Hidralcool%2070%C2%B0%20Inpm.pdf" 
    },
    { 
        title: "Archote - Altz Sabonete Líquido Perolizado", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Archote%20-%20Altz%20Sabonete%20L%C3%ADquido%20Perolizado.pdf" 
    },
    { 
        title: "Audax - All Clean Álcool Gel 70° Inpm", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Audax%20-%20All%20Clean%20%C3%81lcool%20Gel%2070%C2%B0%20Inpm.pdf" 
    },
    { 
        title: "Audax - Facilita Água Sanitária", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Audax%20-%20Facilita%20%C3%81gua%20Sanit%C3%A1ria.pdf" 
    },
    { 
        title: "Audax - Gold Desinfetante", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Audax%20-%20Gold%20Desinfetante.pdf" 
    },
    { 
        title: "Audaxco - All Clean Sabonete Liquido Klyne", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Audaxco%20-%20All%20Clean%20Sabonete%20Liquido%20Klyne.pdf" 
    },
    { 
        title: "Audaxco - Gold Detergente Clorado", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Audaxco%20-%20Gold%20Detergente%20Clorado.pdf" 
    },
    { 
        title: "Bom Bril - Limpol Limpa Vidros", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Bom%20Bril%20-%20Limpol%20Limpa%20Vidros.pdf" 
    },
    { 
        title: "Bombril - Detergente Limpol", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Bombril%20-%20Detergente%20Limpol.pdf" 
    },
    { 
        title: "Premisse - Sabonete Liquido Açaí E Camomila Premisse", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Premisse%20-%20Sabonete%20Liquido%20A%C3%A7a%C3%AD%20E%20Camomila%20Premisse.pdf" 
    },
    { 
        title: "Reckitt Benckiser - Bom Ar Air Wick Freshmatic", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Reckitt%20Benckiser%20-%20Bom%20Ar%20Air%20Wick%20Freshmatic.pdf" 
    },
    { 
        title: "Reckitt Benckiser - Poliflor Lustra Moveis Lavanda", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Reckitt%20Benckiser%20-%20Poliflor%20Lustra%20Moveis%20Lavanda.pdf" 
    },
    { 
        title: "Reckitt Benckiser - Veja Multiuso", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Reckitt%20Benckiser%20-%20Veja%20Multiuso.pdf" 
    },
    { 
        title: "Rickit Benckiser - Inseticida Aerossol (Sbp, Mortein, Detefon)", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Rickit%20Benckiser%20-%20Inseticida%20Aerossol%20(Sbp,%20Mortein,%20Detefon).PDF" 
    },
    { 
        title: "Sc Johnson - Pato Purific Germinex Advanced Lavanda", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Sc%20Johnson%20-%20Pato%20Purific%20Germinex%20Advanced%20Lavanda.pdf" 
    },
    { 
        title: "Unilever - Surf Lava Roupas", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Unilever%20-%20Surf%20Lava%20Roupas.pdf" 
    },
    { 
        title: "Ypê - Sabão Glicerinado Multi Ativo", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/Yp%C3%AA%20-%20Sab%C3%A3o%20Glicerinado%20Multi%20Ativo.pdf" 
    },
    { 
        title: "Álcool Poti 70° Inpm", 
        department: "Administrativo", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Administrativo/%C3%81lcool%20Poti%2070%C2%B0%20Inpm.pdf" 
    },
    { 
        title: "Air Liquide Brasil - Oxigênio Comprimido", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Air%20Liquide%20Brasil%20-%20Oxig%C3%AAnio%20Comprimido.PDF" 
    },
    { 
        title: "Albiquim - Cloreto Férrico", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Albiquim%20-%20Cloreto%20F%C3%A9rrico.pdf" 
    },
    { 
        title: "Alphacarbo - Carvão Ativado", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Alphacarbo%20-%20Carv%C3%A3o%20Ativado.pdf" 
    },
    { 
        title: "Amc Química - Aluminato De Sódio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Amc%20Qu%C3%ADmica%20-%20Aluminato%20De%20S%C3%B3dio.pdf" 
    },
    { 
        title: "Anidrol - Peroxido De Hidrogenio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Anidrol%20-%20Peroxido%20De%20Hidrogenio.pdf" 
    },
    { 
        title: "Bombril - Detergente 5l Limpol Neutro", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Bombril%20-%20Detergente%205l%20Limpol%20Neutro.pdf" 
    },
    { 
        title: "Br - Diesel B S500", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Br%20-%20Diesel%20B%20S500.pdf" 
    },
    { 
        title: "Br - Gasolina Comum C", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Br%20-%20Gasolina%20Comum%20C.pdf" 
    },
    { 
        title: "Chemicals Universal - Desengraxante Alcalino Hepta 100", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Chemicals%20Universal%20-%20Desengraxante%20Alcalino%20Hepta%20100.pdf" 
    },
    { 
        title: "Chemicals Universal - Desengraxante Alcalino Hepta 1000", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Chemicals%20Universal%20-%20Desengraxante%20Alcalino%20Hepta%201000.pdf" 
    },
    { 
        title: "Chemicals Universal - Sabao Desengraxante", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Chemicals%20Universal%20-%20Sabao%20Desengraxante.pdf" 
    },
    { 
        title: "Digimed - Padrão De Turbidez - 10 Ntu", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Digimed%20-%20Padr%C3%A3o%20De%20Turbidez%20-%2010%20Ntu.pdf" 
    },
    { 
        title: "Dinâmica - Sol. Padrão De Condutividade 12,88_Ms - Cm", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20De%20Condutividade%2012,88_Ms%20-%20Cm.pdf" 
    },
    { 
        title: "Dinâmica - Sol. Padrão De Condutividade 1413 Uscm", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20De%20Condutividade%201413%20Uscm.pdf" 
    },
    { 
        title: "Dinâmica - Sol. Padrão De Condutividade 5000 Us-Cm", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20De%20Condutividade%205000%20Us-Cm.pdf" 
    },
    { 
        title: "Dryller - Hidróxido De Cálcio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Dryller%20-%20Hidr%C3%B3xido%20De%20C%C3%A1lcio.pdf" 
    },
    { 
        title: "Gr Química - Cal Hidratada", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Gr%20Qu%C3%ADmica%20-%20Cal%20Hidratada.pdf" 
    },
    { 
        title: "Gr Química - Metabissulfito De Sódio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Gr%20Qu%C3%ADmica%20-%20Metabissulfito%20De%20S%C3%B3dio.pdf" 
    },
    { 
        title: "Gr Química - Polimero Aniônico", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Gr%20Qu%C3%ADmica%20-%20Polimero%20Ani%C3%B4nico.pdf" 
    },
    { 
        title: "Gr Química- Ácido Sulfúrico 50%", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Gr%20Qu%C3%ADmica-%20%C3%81cido%20Sulf%C3%BArico%2050%25.pdf" 
    },
    { 
        title: "Nheel Quimica Ltda - Floculan C30", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Nheel%20Quimica%20Ltda%20-%20Floculan%20C30.pdf" 
    },
    { 
        title: "Projesan-Policloreto De Aluminio (Pac)", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Projesan-Policloreto%20De%20Aluminio%20(Pac).pdf" 
    },
    { 
        title: "Quallical - Hidróxido De Cálcio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Quallical%20-%20Hidr%C3%B3xido%20De%20C%C3%A1lcio.pdf" 
    },
    { 
        title: "Safra - Alcóol 98,2 Inpm", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Safra%20-%20Alc%C3%B3ol%2098,2%20Inpm.pdf" 
    },
    { 
        title: "Suall - Sulfato Ferroso", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Suall%20-%20Sulfato%20Ferroso.pdf" 
    },
    { 
        title: "Sumatex - Soda Cáustica Líquida", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Sumatex%20-%20Soda%20C%C3%A1ustica%20L%C3%ADquida.pdf" 
    },
    { 
        title: "Top Color - Dióxido De Titânio Rutilo R110", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Top%20Color%20-%20Di%C3%B3xido%20De%20Tit%C3%A2nio%20Rutilo%20R110.pdf" 
    },
    { 
        title: "Tqa Vitta- Cloreto De Polialumínio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Tqa%20Vitta-%20Cloreto%20De%20Polialum%C3%ADnio.pdf" 
    },
    { 
        title: "Ultragaz - Glp", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Ultragaz%20-%20Glp.pdf" 
    },
    { 
        title: "Unipar - Hipoclorito De Sódio", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Unipar%20-%20Hipoclorito%20De%20S%C3%B3dio.pdf" 
    },
    { 
        title: "Unipar - Ácido Clorídrico", 
        department: "Operação", 
        link: "https://github.com/AttendAmbiental/FISPQ/blob/main/FISPQ's%20Opera%C3%A7%C3%A3o/Unipar%20-%20%C3%81cido%20Clor%C3%ADdrico.pdf" 
    }
].sort((a, b) => a.title.localeCompare(b.title)); // Ordenar os documentos pelo título

    const departments = [...new Set(documents.map(doc => doc.department))].sort();

    function displayDocuments(page, filteredDocs = documents) {
        const startIndex = (page - 1) * 10;
        const endIndex = Math.min(startIndex + 10, filteredDocs.length);
        const documentList = document.getElementById('documentList');
        documentList.innerHTML = '';

        // Scroll para o topo da lista de documentos
        documentList.scrollTop = 0;

        for (let i = startIndex; i < endIndex; i++) {
            const doc = filteredDocs[i];
            const docItem = document.createElement('div');
            docItem.className = 'document-item';

            const docTitle = document.createElement('h2');
            docTitle.innerText = doc.title;
            docItem.appendChild(docTitle);

            const docDetails = document.createElement('div'); // Criar um elemento pai para departamento e link
            docDetails.className = 'doc-details'; // Adicionar a classe para os estilos CSS
            docItem.appendChild(docDetails); // Adicionar o elemento pai ao item do documento

            const docDepartment = document.createElement('p');
            docDepartment.innerText = `Setor: ${doc.department}`;
            docDetails.appendChild(docDepartment); // Adicionar o parágrafo ao elemento pai

            if (doc.link) {
                const docLink = document.createElement('a');
                docLink.href = doc.link;
                docLink.className = 'file-link align-right';
                docLink.innerText = 'Abrir arquivo';
                docDetails.appendChild(docLink); // Adicionar o link ao elemento pai
            }

            documentList.appendChild(docItem);
        }

        const totalFilteredDocuments = filteredDocs.length;
        const totalPages = Math.ceil(totalFilteredDocuments / 10);
        updatePagination(totalPages, page, filteredDocs);
    }

    function updatePagination(totalPages, currentPage, filteredDocs) {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';

        const maxButtons = 3; // Número máximo de botões de paginação a serem exibidos
        const halfMaxButtons = Math.floor(maxButtons / 2);
        let startPage = currentPage - halfMaxButtons;
        let endPage = currentPage + halfMaxButtons;

        if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(totalPages, startPage + maxButtons - 1);
        } else if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxButtons + 1);
        }

        const prevButton = document.createElement('span');
        prevButton.innerText = '《';
        prevButton.style.color = '#fff'; // Cor do texto branco
        prevButton.style.marginRight = '10px'; // Ajuste de espaçamento
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                changePage(currentPage - 1, filteredDocs);
            }
        });
        pagination.appendChild(prevButton);

                for (let i = startPage; i <= endPage; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                changePage(i, filteredDocs);
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement('span');
        nextButton.innerText = '》';
        nextButton.style.color = '#fff'; // Cor do texto branco
        nextButton.style.marginLeft = '5px'; // Ajuste de espaçamento
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                changePage(currentPage + 1, filteredDocs);
            }
        });
        pagination.appendChild(nextButton);

        if (totalPages > maxButtons) {
            const morePagesIndicator = document.createElement('span');
            morePagesIndicator.innerText = '';
            pagination.insertBefore(morePagesIndicator, nextButton);
        }
    }

    function changePage(page, filteredDocs) {
        const scrollPosition = window.scrollY; // Captura a posição atual de rolagem
        displayDocuments(page, filteredDocs);
        window.scroll(0, scrollPosition); // Mantém a posição de rolagem
    }

    function searchDocuments() {
        const input = document.getElementById('searchInput').value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
        const filteredDocuments = documents.filter(doc => {
            const title = doc.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
            return title.includes(input) || similarity(input, title) > 
0.8; // Pesquisa aproximada
        });

        displayDocuments(1, filteredDocuments);

        // Remover o foco do campo de pesquisa após a pesquisa ser concluída
        document.getElementById('searchInput').blur();
    }

    function similarity(s1, s2) {
        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;
        const longerLength = longer.length;
        if (longerLength === 0) return 1.0;
        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        const costs = new Array();
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0)
                    costs[j] = j;
                else {
                    if (j > 0) {
                        let newValue = costs[j - 1];
                        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue + 1), costs[j] + 1);
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }

    function filterByDepartment(department) {
        const filteredDocuments = documents.filter(doc => doc.department === department);
        displayDocuments(1, filteredDocuments);
        closeModal();
    }

    function clearFilters() {
        document.getElementById('searchInput').value = ''; // Limpar campo de pesquisa
        displayDocuments(1); // Exibir todos os documentos novamente
        closeModal(); // Fechar a janela pop-up
    }

    function openModal() {
        const modalButtonGroup = document.querySelector('.modal-button-group');
        modalButtonGroup.innerHTML = ''; // Limpar botões existentes

        // Adicionar botões de departamento ordenados
        departments.forEach(department => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.dataset.department = department;
            button.innerText = department;
            modalButtonGroup.appendChild(button);
            button.addEventListener('click', () => {
                filterByDepartment(department);
            });
        });

        // Adicionar botão para limpar filtros
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-btn';
        clearButton.innerText = 'Limpar Filtros';
        clearButton.addEventListener('click', clearFilters);
        modalButtonGroup.appendChild(clearButton);

        document.getElementById('filterModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('filterModal').style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('filterModal');
        if (event.target == modal) {
            closeModal();
        }
    });

    document.getElementById('searchButton').addEventListener('click', searchDocuments);
    document.getElementById('filterButton').addEventListener('click', openModal);
    document.getElementById('closeModal').addEventListener('click', closeModal);

    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDocuments();
        }
    });

    displayDocuments(1);
});
