$(document).ready(function(){
  
    var magic8Ball = {};
    magic8Ball.listofanswers = ["Bütün eski sevgililerini alfabetik sırayla say", "Karşı cinsin taklidini yap", "Sağındaki kişinin yüzünü kalemle çizmesine izin ver", "Solundaki kişi ile kıyafetlerini değiştir", "Grubun seçtiği bir şarkıyı söyle", "Bir tur boyunca solundaki kişinin elini tut. Solundaki kişi elini bırakırsa ikiniz de birer fondip yapmalısınız", "Whatsapp'ta son konuştuğun kişiye rastgele bir sticker gönder ve başka bir şey söyleme", "Sağındaki kişinin fotosunu oyun bitene kadar Instagram profil fotosu yap", "Gruptan biri gözünü bağlayacak ve grubun seçtiği sürpriz bir shot içeceksin", "Bardaki random biriyle tanış. 1 dakikan var", "Instagramını aç, takip ettiklerinin arasından rastgele birini seçip 10 postunu beğen.", "Eski sevgililerinden birine sesli mesaj gönder", "Vüdunun yapabildiği en esnek hareketi yap", "Gruptan biri dur diyene kadar kişi listeni scrolla. Durduğun kişiyi ya ara ya da sil", "Gruba 2 doğru şey 1 de yalan söyle. Grub hangisinin yalan olduğunu tahmin etsin", "Eline rastgele bir kitap al ve içinden bir kısmı seksi bir ses tonuyla oku", "Seçtiğin bir kişiye kendi ellerini kullanmadan kuruyemiş yedir. (Dil dile değebilir)"];
   
    magic8Ball.getAnswer = function(question)
    {
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
      var answer = this.listofanswers[randomAnswer];
      
      $("#8ball").effect( "shake", {times:2, distance:2000} );
      $("#answer").text( answer );
      $("#answer").fadeIn(1000);
      $("#8ball").attr("src", "https://cemsaydam.files.wordpress.com/2022/11/fondip.png");
  
      console.log(question);
      console.log(answer);
    };
    $("#answer").hide();
  
    var onClick = function()
    {
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
      var question = magic8Ball.getAnswer(question);
      /*magic8Ball.getAnswer(question);*/
    };
    
    $("#questionButton").click( onClick );
  });