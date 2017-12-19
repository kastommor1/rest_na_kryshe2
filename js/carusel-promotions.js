(function() {
  var carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;

  carouselContent = $(".carousel__content1");

  carouselIndex = 0;

  carouselLength = carouselContent.children().length;

  isAnimating = false;

  itemWidth = 100 / carouselLength;

  firstItem = $(carouselContent.children()[0]);

  lastItem = $(carouselContent.children()[carouselLength - 1]);

  firstClone = null;

  lastClone = null;

  carouselContent.css("width", carouselLength * 100 + "%");

  carouselContent.transition({
    x: (carouselIndex * -itemWidth) + "%"
  }, 0);

  $.each(carouselContent.children(), function() {
    return $(this).css("width", itemWidth + "%");
  });



  $(".nav--right1").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    carouselIndex++;
    return carouselContent.transition({
      x: (carouselIndex * -itemWidth) + "%"
    }, 1000, "easeInOutExpo", function() {
      isAnimating = false;
      if (firstClone) {
        carouselIndex = 0;
        carouselContent.transition({
          x: (carouselIndex * -itemWidth) + "%"
        }, 0);
        firstClone.remove();
        firstClone = null;
        carouselLength = carouselContent.children().length;
        itemWidth = 100 / carouselLength;
        carouselContent.css("width", carouselLength * 100 + "%");
        $.each(carouselContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return;
      }
      if (carouselIndex === carouselLength - 1) {
        carouselLength++;
        itemWidth = 100 / carouselLength;
        firstClone = firstItem.clone();
        firstClone.addClass("clone");
        firstClone.appendTo(carouselContent);
        carouselContent.css("width", carouselLength * 100 + "%");
        $.each(carouselContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return carouselContent.transition({
          x: (carouselIndex * -itemWidth) + "%"
        }, 0);
      }
    });
  });

}).call(this);