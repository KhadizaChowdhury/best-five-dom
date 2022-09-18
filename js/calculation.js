document.getElementById('calculate').addEventListener('click', function(){
    const calculateField = getInputFieldValueById('calculate_field');

    const playerExpenses = getTextValueById('player_expenses');
    const newplayerExpenses = 0 + calculateField*playerArray.length;
    setTextValueById('player_expenses', newplayerExpenses);

    document.getElementById('calculate_total').addEventListener('click', function(){
        const managerField = getInputFieldValueById('manager_amount');
        const coachField = getInputFieldValueById('coach_amount');
        
        const totalExpenses = getTextValueById('total_expenses');
        const newtotalExpenses = managerField + newplayerExpenses + coachField;
        setTextValueById('total_expenses', newtotalExpenses);
    });
});