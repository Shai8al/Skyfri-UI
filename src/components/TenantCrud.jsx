import axios from "axios";
import { useEffect, useState } from "react";
function TenantCrud() {
    const [tenantId, setId] = useState("");
    const [tenantName, setName] = useState("");
    const [tenantCountry, setCountry] = useState("");
    const [tenants, setTenants] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
    useEffect(() => {
        (async () => await Load())();
    }, []);
    
    async function Load() {
        
        const result = await axios.get("https://localhost:7284/api/Tenant");
        setTenants(result.data);
        console.log(result.data);
    }
    
    async function save(event) {
      event.preventDefault();
      if(!tenantName||!tenantCountry){
        if (!tenantName) {
          setError('Tenant Name cannot be null or empty');
          setSuccess(null);
          return;
        }
        if (!tenantCountry) {
          setError('Tenant Country cannot be null or empty');
          setSuccess(null);
          return;
        }
      }
        try {
        await axios.post("https://localhost:7284/api/Tenant", {
            
            tenantName: tenantName,
            tenantCountry: tenantCountry,
        
        });
        setSuccess("Tenant Registation Successfully");        
        setError(null);
            setId("");
            setName("");
            setCountry("");
        
        
        Load();
        } catch (err) {
        alert(err);
        }
    }

    async function editTenant(tenants) {
        setSuccess(null);
        setError(null);
        setName(tenants.tenantName);
        setCountry(tenants.tenantCountry);
    
    
        setId(tenants.tenantId);
    }
    

    async function DeleteTenant(tenantId) {
    await axios.delete("https://localhost:7284/api/Tenant/" + tenantId);
    setSuccess("Tenant deleted Successfully");
    setError(null);
    setId("");
    setName("");
    setCountry("");
    Load();
    }
    

    async function update(event) {
        event.preventDefault();
        if(!tenantName||!tenantCountry){
          if (!tenantName) {
            setError('Tenant Name cannot be null or empty');
            setSuccess(null);
            return;
          }
          if (!tenantCountry) {
            setError('Tenant Country cannot be null or empty');
            setSuccess(null);
            return;
          }
        }
        try {

    await axios.put("https://localhost:7284/api/Tenant/"+ tenants.find((u) => u.tenantId === tenantId).tenantId || tenantId,
            {
              tenantName: tenantName,
              tenantCountry: tenantCountry,

            }
        );
        setSuccess("Registation Updated");
        setError(null);
        setId("");
        setName("");
        setCountry("");
        
        Load();
        } catch (err) {
        alert(err);
        }
    }
    return (
        <div>
        <h1>Tenant Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && <div className="alert alert-success">{success}</div>}
            <input
              type="text"
              class="form-control"
              id="tenantId"
              hidden
              value={tenantId}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Tenant Name</label>
            <input
              type="text"
              class="form-control"
              id="tenantName"
              value={tenantName}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              id="tenantCountry"
              value={tenantCountry}
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Tenant Id</th>
            <th scope="col">Tenant Name</th>
            <th scope="col">Tenant Country</th>
         
 
            <th scope="col">Option</th>
          </tr>
        </thead>
        {tenants.map(function fn(tenant) {
          return (
            <tbody>
              <tr key={tenant.tenantId}>
                <th scope="row">{tenant.tenantId} </th>
                <td>{tenant.tenantName}</td>
                <td>{tenant.tenantCountry}</td>
                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editTenant(tenant)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteTenant(tenant.tenantId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
        
      </div>
    );
  }
  
  export default TenantCrud;
  