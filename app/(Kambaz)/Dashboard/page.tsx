import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full-Stack Software Developer
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS2345 Data Structures</h5>
              <p className="wd-dashboard-course-title">
                Algorithms & Complexity
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS3456 Database Systems</h5>
              <p className="wd-dashboard-course-title">
                SQL & NoSQL Fundamentals
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS4567 Operating Systems</h5>
              <p className="wd-dashboard-course-title">
                Processes & Concurrency
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS5678 Computer Networks</h5>
              <p className="wd-dashboard-course-title">
                Networking Fundamentals
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS6789 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Intro to ML Concepts</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/classcover.jpg"
              width={200}
              height={150}
              alt=""
            />
            <div>
              <h5>CS7890 Web Security</h5>
              <p className="wd-dashboard-course-title">
                Securing Modern Web Apps
              </p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}