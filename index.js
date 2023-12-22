function tombol( par){
  let toggel1 = document.getElementById('toggel1')
  let toggel2 = document.getElementById('toggel2')
  let toggel3 = document.getElementById('toggel3')
  let lampu1 = document.getElementById('lampu1')
  let lampu2 = document.getElementById('lampu2')
  let lampu3 = document.getElementById('lampu3')
  if (toggel1.checked){
    lampu1.src = 'aset/imeg/on.gif'
  }else{
      lampu1.src = 'aset/imeg/off.gif'
  }
  if (toggel2.checked){
    lampu2.src = 'aset/imeg/on.gif'
  }else{
      lampu2.src = 'aset/imeg/off.gif'
  }
  if (toggel3.checked){
    lampu3.src = 'aset/imeg/on.gif'
  }else{
      lampu3.src = 'aset/imeg/off.gif'
  }
  }



