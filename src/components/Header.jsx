const courseStatus = ["Completed", "Upcoming", "Active", "All"];


function Header() {
  return (
    <div>
      <h1>My Courses</h1>
      <div className="course-status">
        {courseStatus.map((status) => (
          <div key={status}>{status}</div>
        ))}
      </div>
    </div>
  );
}

export default Header;
