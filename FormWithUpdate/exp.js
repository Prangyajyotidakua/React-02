import React, { useEffect, useState } from "react";
const ViewProfile = () => {

  const [Eduinfo, setEduInfo] = useState({});
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState({ id: "", title: "" });
  const [Degrees, setDegrees] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState({ id: "", title: "" });

  const jsonData = [
    {
      "id": 1,
      "branch": {
        "id": 2,
        "title": "MECH",
        "description": "dummy Descriotion",
        "created": "2023-05-18T10:05:57.137308Z",
        "updated": "2023-05-18T10:05:57.137308Z"
      },
      "degree": {
        "id": 2,
        "title": "ME",
        "description": "fghjkl;'",
        "created": "2023-05-18T10:06:10.291282Z",
        "updated": "2023-05-18T10:06:10.291282Z"
      },
      "from_year": "2023-05-01",
      "to_year": "2023-05-17",
      "percentage": "69.43",
      "specialization": "WebDevelopment",
      "university": "BPUT",
      "institute": "NIT",
      "country": "India",
      "state": "Odisha",
      "city": "Bhubaneswar",
      "created": "2023-05-18T09:35:22.895038Z",
      "updated": "2023-05-18T10:06:12.954899Z"
    },
    {
      "id": 2,
      "branch": {
        "id": 1,
        "title": "CSE",
        "description": "dummy description",
        "created": "2023-05-18T09:59:08.160510Z",
        "updated": "2023-05-18T09:59:08.160510Z"
      },
      "degree": {
        "id": 1,
        "title": "B.Tech",
        "description": "dummy desc",
        "created": "2023-05-18T09:59:37.046959Z",
        "updated": "2023-05-18T09:59:37.046959Z"
      },
      "from_year": "2023-05-01",
      "to_year": "2023-05-17",
      "percentage": "69.43",
      "specialization": "WebDevelopment",
      "university": "BPUT",
      "institute": "NIT",
      "country": "India",
      "state": "Odisha",
      "city": "Bhubaneswar",
      "created": "2023-05-18T10:02:21.332376Z",
      "updated": "2023-05-18T10:02:21.332376Z"
    }
  ]
  useEffect(() => {

    const branchData = {
      id: jsonData[0].branch.id,
      title: jsonData[0].branch.title
    };
    const degreeData = {
      id: jsonData[0].degree.id,
      title: jsonData[0].degree.title
    };
    const education = {
      qualification:degreeData,
      branch: branchData,
      from_year: jsonData[0].from_year,
      to_year: jsonData[0].to_year,
      percentage: jsonData[0].percentage,
      university: jsonData[0].university,
      institute: jsonData[0].institute,
      country: jsonData[0].country,
      state: jsonData[0].state,
      city: jsonData[0].city,
    };
    setEduInfo(education);
//branch
    const branchData2 = jsonData.map((data) => data.branch);
    setBranches(branchData2);
    setSelectedBranch(branchData2[0]);
    //degree
    const DegreeData2 = jsonData.map((data) => data.degree);
    setDegrees(DegreeData2);
    setSelectedDegree(DegreeData2[0]);
  }, []);

  //handle change on branch
  const handleBranchChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const selectedBranch = branches.find((branch) => branch.id === selectedId);
    setSelectedBranch(selectedBranch);
    console.log(selectedBranch)
    setEduInfo((prevInfo) => ({
      ...prevInfo,
      branch: selectedBranch,
    }));
   // console.log("hello",Eduinfo)
  };

  //handle change on branch
  const handleDegreeChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const selectedDegree = Degrees.find((degree) => degree.id === selectedId);
    setSelectedDegree(selectedDegree);
    console.log("degree",selectedDegree)
    setEduInfo((prevInfo) => ({
      ...prevInfo,
      qualification: selectedDegree,
    }));
    //console.log("degree",Eduinfo)
  };

  

  const handleChangeEInfo = (e) => {
    const { name, value } = e.target;

    setEduInfo((prevValue) => ({ ...prevValue, [name]: value }));
    console.log("after change",Eduinfo)
    
  };



  const handleSubmitEInfo = (e) => {
    e.preventDefault();
    console.log("after submit",Eduinfo)
    // updateEinfoByID();
  };



  return (

    <div className="space-y-5 profile-page">

      <div className="grid grid-cols-12 gap-6">


        <div className="lg:col-span-6 col-span-12">

          title="Education"
          <div>
            title="Education"
            labelClass="btn-outline-light"
            uncontrol
            centered

            <div className="xl:col-span-2 col-span-1">

              <div className="space-y-3">
                <div>
                  <label>Qualification</label>
                  <select
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="selectedDegree"
                    value={selectedDegree.id}
                    id="Degree"
                    onChange={handleDegreeChange}
                  >
                    <option value="">Select Degree</option>                
                    {Degrees.map((Degree) => (
                      <option key={Degree.id} value={Degree.id}>
                        {Degree.title}                       
                      </option>              
                    ))}

                  </select>
                </div>
                <div>
                  <label>Degree</label>
                  <select
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="selectedBranch"
                    value={selectedBranch.id}
                    id="branch"
                    onChange={handleBranchChange}
                  >
                    <option value="">Select branch</option>                
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.title}                       
                      </option>                      
                    ))}
                  </select>
                </div>
                <div>
                  <label>From Year</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="from_year"
                    id="index"
                    value={Eduinfo.from_year}
                    onChange={handleChangeEInfo}
                    placeholder="Enter LinkedIn"
                    type="date"
                  />
                </div>
                <div>
                  <label>To Year</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="to_year"
                    id="index"
                    value={Eduinfo.to_year}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="date"
                  />
                </div>
                <div>
                  <label>Percentage</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="percentage"
                    id="index"
                    value={Eduinfo.percentage}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <div>
                  <label>University</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="university"
                    id="index"
                    value={Eduinfo.university}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <div>
                  <label>Institute</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="institute"
                    id="index"
                    value={Eduinfo.institute}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <div>
                  <label>Country</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="country"
                    id="index"
                    value={Eduinfo.country}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <div>
                  <label>State</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="state"
                    id="index"
                    value={Eduinfo.state}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <div>
                  <label>City</label>
                  <input
                    className="text-base bg-slate-700 text-slate-100 p-3 flex w-full rounded-md text-black"
                    name="city"
                    id="index"
                    value={Eduinfo.city}
                    onChange={handleChangeEInfo}
                    placeholder="Enter Github"
                    type="text"
                  />
                </div>
                <button
                  text="Submit"
                  className="btn-dark"
                  iconPosition="right"
                  div
                  iconClass="text-md"
                  onClick={handleSubmitEInfo}
                >Submit</button>
              </div>
              <div className=" space-y-5"></div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
