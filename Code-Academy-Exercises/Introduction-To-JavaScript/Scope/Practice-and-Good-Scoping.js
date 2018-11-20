const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === "The Arctic"){
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//This shows that if you redefine the variable (including let / var) it overrides the variable within the block but keeps the original value once you leave that block.
