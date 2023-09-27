exports.getWeatherForecast = async (req, res, next) => {
  const cityLat = Number(req.body.cityLat);
  const cityLon = Number(req.body.cityLon);

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&cnt=40&appid=60544534c8c894409b9c994199eb33c1&units=metric`;

  try {
    const response = await fetch(url);
    const result = await response.text();
    let resp = JSON.parse(result);
    res.status(200).json({
      status: "success",
      data: resp,
    });
  } catch (error) {
    console.error(error);
  }

  next();
};

exports.getFlorianopolis4Weather = async (req, res, next) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-27.59&lon=-48.54&cnt=4&appid=60544534c8c894409b9c994199eb33c1&units=metric`;

  try {
    const response = await fetch(url);
    const result = await response.text();
    let resp = JSON.parse(result);
    res.status(200).json(
      resp.list,
    );
  } catch (error) {
    console.error(error);
  }

  next();
};
