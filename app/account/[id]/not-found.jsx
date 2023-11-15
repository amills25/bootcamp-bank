// THIS IS A COMPONENT TO GIVE YOU A 404 RESPONSE
// SEE HOW IT IS USED ON /account/[id]/page.tsx
// IF YOU WANT A GLOBAL ONE OF THESE YOU CAN MAKE IT GENERAL AND MOVE IT TO /app

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 text-center">
      <h1 className="text-4xl">Whoops...</h1>
      <h2>It looks like account page could not be found!</h2>
    </div>
  );
}

export default NotFound;
