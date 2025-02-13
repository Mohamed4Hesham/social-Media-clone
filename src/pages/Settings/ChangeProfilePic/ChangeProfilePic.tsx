

const ChangeProfilePic = () => {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center font-bold '>
      <form  className="flex flex-col" >
        <input type="file" name="profilePic" />
        <button type="submit" >Upload</button>

      </form>
    </div>
  )
}

export default ChangeProfilePic
