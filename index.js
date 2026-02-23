let state = true

function Signup(){
    if (state){
        state = false;
        document.getElementById('right-1').style.display = 'none';
        document.getElementById('right-2').style.display = 'block';
        document.getElementById('left-1').style.display = 'none';
        document.getElementById('left-2').style.display = 'block';
        document.getElementById('left-section').classList = 'white-to-red';
        document.getElementById('right-section').classList = 'red-to-white';
    }else{
        state = true;
        document.getElementById('right-1').style.display = 'block';
        document.getElementById('right-2').style.display = 'none';
        document.getElementById('left-1').style.display = 'block';
        document.getElementById('left-2').style.display = 'none';
        document.getElementById('left-section').classList = 'red-to-white';
        document.getElementById('right-section').classList = 'white-to-red';
    }
}
