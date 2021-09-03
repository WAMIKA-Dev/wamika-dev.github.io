function bgAnimation(object) {
    let gradientify = new Gradientify(
      object,
      [
        "linear-gradient(60deg, #58E605, #FEEC00)", // Array of CSS gradients
        "linear-gradient(10deg, #03F993, #58E605)",
        "radial-gradient(#ABFFE7, #58E605)",
        "linear-gradient(60deg, #58E605, #03F993)",
        "radial-gradient(7deg, #FEEC00, #58E605)"
      ],
      3500 // Fading interval in miliseconds
    );
    return gradientify;
}

bgAnimation('#background');

//58E605