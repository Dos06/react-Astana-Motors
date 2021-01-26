import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.min.css'
import './css/style.css'

function Option(props) {
  return (
      <option value={props.value}>{props.text}</option>
  );
};

const mainFrame =
    <div className="w-100 mt-5">
      <main>
        <div className="container mx-auto row intro py-5 justify-content-around">
          <div className="intro__car col-lg-6">
            <img className="img-fluid" src="./img/img_car.png"/>
          </div>
          <div className="intro__text col-lg-6">
            <h1 className="font-weight-bold">Our Testimonials</h1>
            <p className="mt-4 ml-5"><i className="fas fa-quote-right mr-3"/>Went beyond helping me with changes and
              service. Katie was
              excellent with explaining how things worked and showing me
              everything all truck had to offer. Would diffidently use again
              and recommend to anyone shopping for new car.</p>
            <p><span>Charles M. Worsham</span> Toyota C-HR Eclipse</p>
          </div>
        </div>

        <div className="row search justify-content-center flex-column flex-lg-row align-items-center py-4">
          <i className="fas fa-car fa-3x"/>
          <div className="search__text ml-3">
            <h4 className="font-weight-bold mt-1">Car Search</h4>
            <p className="font-weigth-bold">Find your next car</p>
          </div>
          <form action="#" className="form-inline">
            <select className="form-control ml-3 mr-lg-0 mr-3">
              <option selected disabled className="select-option-remove">CHOOSE</option>
              <Option value="new" text="NEW"/>
              <Option value="certified" text="CERTIFIED"/>
              <Option value="used" text="USED"/>
              <Option value="sold" text="SOLD OUT"/>
            </select>
            <select className="form-control ml-3 mr-lg-0 mr-3">
              <option selected disabled className="select-option-remove">Year</option>
              <Option text="2014"/>
              <Option text="2015"/>
              <Option text="2016"/>
              <Option text="2017"/>
              <Option text="2018"/>
            </select>
            <select className="form-control ml-3 mr-lg-0 mr-3">
              <option selected disabled className="select-option-remove">Select a Make</option>
              <Option text="Dossan"/>
              <Option text="Jeex"/>
              <Option text="KOA"/>
              <Option text="Levro"/>
              <Option text="Noex"/>
              <Option text="Porsberg"/>
              <Option text="BMW"/>
              <Option text="Seretta"/>
              <Option text="Winger"/>
            </select>
            <select className="form-control ml-3 mr-lg-0 mr-3">
              <option selected disabled className="select-option-remove">Select a Model</option>
              <Option value="new" text="NEW"/>
              <Option value="certified" text="CERTIFIED"/>
              <Option value="used" text="USED"/>
              <Option value="sold" text="SOLD OUT"/>
            </select>
            <select className="form-control ml-3 mr-lg-0 mr-3">
              <option selected disabled className="select-option-remove">Price</option>
              <Option value="new" text="NEW"/>
              <Option value="certified" text="CERTIFIED"/>
              <Option value="used" text="USED"/>
              <Option value="sold" text="SOLD OUT"/>
            </select>
            <button className="btn btn-danger ml-3"><i className="fas fa-search">Search</i></button>
          </form>
        </div>
      </main>


      <div className="container text-center py-4">
        <div className="col-sm-6 offset-sm-3">
          <h3 className="py-3"><b>Want to quickly sell your car online? Upload the photos!</b></h3>
          <button type="button" className="btn-add-item btn btn-danger" data-toggle="modal" data-target="#addItemModal">
            <b>ADD YOUR ITEM</b></button>


          <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-labelledby="addItemModalLabel"
               aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addItemModalLabel">UPLOAD YOUR CAR PHOTOS</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal"><b>CANCEL</b></button>
                  <button type="button" className="btn btn-danger"><b>ADD</b></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 mt-4">
        <div className="row my-2 col-sm-6 offset-sm-3 text-center">
          <h3 className="mx-auto"><b>Types of Vehicle</b></h3>
        </div>
        <ul className="types_vehicles p-0 m-0 d-flex w-100 justify-content-around">
          <li id="card8">
            <a href="#" className="w-100 row justify-content-center mt-2">
              <h5>Minivan</h5>
              <button className="btn btn-sm btn-danger ml-2">2 offers</button>
            </a>
          </li>
          <li id="card2">
            <a href="#" className="w-100 row justify-content-center mt-2">
              <h5>Hatchback</h5>
              <button className="btn btn-sm btn-danger ml-2">2 offers</button>
            </a>
          </li>
          <li id="card1">
            <a href="#" className="w-100 row justify-content-center mt-2">
              <h5>Sedan</h5>
              <button className="btn btn-sm btn-danger ml-2">2 offers</button>
            </a>
          </li>
          <li id="card4">
            <a href="#" className="w-100 row justify-content-center mt-2">
              <h5>SUV</h5>
              <button className="btn btn-sm btn-danger ml-2">2 offers</button>
            </a>
          </li>
          <li id="card5">
            <a href="#" className="w-100 row justify-content-center mt-2">
              <h5>Pickup</h5>
              <button className="btn btn-sm btn-danger ml-2">2 offers</button>
            </a>
          </li>
        </ul>
      </div>

    </div>

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    mainFrame
  );
}

export default App;
