
function iniciar(){


      alert("responde a las siguientes 8 preguntas")

          var fiebre
      fiebre = prompt("¿Cuanta fiebre tienes?")
      if(fiebre >= 37.8){
          var fiebre1 = 1
         }else{
         var fiebre1 = 0
         }

      var goteo_nasal 
      goteo_nasal = prompt("¿Tienes secreción y goteo nasal?")
      if("Si" | "si" | "SI"){
          var goteo_nasal1 = 1
         }else{
         var goteo_nasal1 = 0
         }

      var tos
      tos = prompt("¿Tienes tos?")
      if("Si" | "si" | "SI"){
          var tos1 = 1
         }else{
         var tos1 = 0
         }

      var fatiga
      fatiga = prompt("¿Tienes fatiga sin haber hecho alguna actividad hace 1 hora?")
      if("Si" | "si" | "SI"){
          var fatiga1 = 1
         }else{
         var fatiga1 = 0
         }

      var dolor
      dolor = prompt("¿Tienes dolor de garganta y de cabeza?")
      if("Si" | "si" | "SI"){
          var dolor1 = 1
         }else{
         var dolor1 = 0
         }

      var malestar
      malestar = prompt("¿Tienes escalofrios y malestar general?")
      if("Si" | "si" | "SI"){
          var malestar1 = 1
         }else{
         var malestar1 = 0
         }

      var respirar
      respirar = prompt("¿Tienes dificultad para respirar?")
      if("Si" | "si" | "SI"){
          var respirar1 = 1
         }else{
         var respirar1 = 0
         }

      var viaje
      respirar = prompt("¿Ha viajado recientemente a algún pais con más de 300 contagiados de coronavirus?")
      if("Si" | "si" | "SI"){
          var viaje1 = 1
         }else{
         var viaje1 = 0
         }


      var coronavirus = fiebre1 + goteo_nasal1 + tos1 + fatiga1 + dolor1 + malestar1 + respirar1 + viaje1

      if(coronavirus >= 6){
             document.write(user + " Es posible que tengas coronavirus. Por favor ten cuidado y acude a tu unidad de salud mas cercana")   
         }else{
             document.write(user + " Es probable que no tengas coronavirus. De cualquier manera continua con la cuarentena.")
         }  
}