// search.js
function searchDisease() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    
    const diseases = {
        'cataract': '/disease1/eye_disease/cataract.html',
        'skin disease': '/disease1/skin_disease/skin-disease_new.html',
        'autoimmune disease': '/disease1/autoimmune_disease/autoimmune-disease.html',
        'common disease': '/disease1/common_disease/common-disease.html',
        'rare disease': '/disease1/rare_disease/rare-disease.html',
        'infectious disease': '/disease1/infectious_disease/infectious-disease.html',
        'lung disease': '/disease1/lung_disease/lung-disease.html',
        'heart disease': '/disease1/heart_disease/heart-disease.html',
        'diabetes': '/disease1/diaebets_disease/diabetes.html',
        'cancer': '/disease1/cancer/cancer.html',
        'kidney disease': '/disease1/kidney_disease/kidney-disease.html',
        'bone & joint disease': '/disease1/bone_&_joint_disease/bone-joint-disease.html',
        'eye disease': '/disease1/eye_disease/eye-disease.html',
        'gastrointestinal disease': '/disease1/gasterointerstinal_disease/gastrointestinal-disease.html',
        'nerve disease': '/disease1/nerve_disease/nerve-disease.html',
        'mental illness': '/disease1/mental_illness/mental-illness.html',
        'hormone disorder': '/disease1/hormone_disorder_disease/hormone-disorder.html',
        'genetic disorder': '/disease1/genetic_disorder_disease/genetic-disorder.html',
        'liver disease': '/disease1/liver_disease/liver-disease.html'
    };

    // Check if the search input matches a disease name partially (substring match)
    const matchedDisease = Object.keys(diseases).find(disease => disease.includes(searchInput));

    if (matchedDisease) {
        window.location.href = diseases[matchedDisease];
    } else {
        alert('Disease not found.');
    }
}
