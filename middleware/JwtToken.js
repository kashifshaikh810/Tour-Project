// create token and saving in cookie

const sendToken = (user, statusCode, res, token) => {
  //   const token = user.getJWTToken();

  const COCKIE_EXPIRE = 5;

  // options for cockie
  const options = {
    expires: new Date(Date.now() + COCKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export default sendToken;
