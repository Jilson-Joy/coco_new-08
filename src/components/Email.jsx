import React, { useRef, useState } from "react";
import "./Email.css";

function Email() {
  const initialState = {
    name: "Jaimy Joseph",
    title: "Managing Director & CEO",
    phone: "+91 9048244527",
    email: "jaimy.cocokerala.com",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const emailContentRef = useRef(null);

  const validateField = (name, value) => {
    let error;
    switch (name) {
      case "name":
        if (!value) {
          error = "Name is required";
        }
        break;
      case "title":
        if (!value) {
          error = "Title is required";
        }
        break;
      case "phone":
        if (!value) {
          error = "Phone number is required";
        } else if (!/^\+?[0-9\s\-]+$/.test(value)) {
          error = "Phone number is invalid";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email address is invalid";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  const handleCopy = () => {
    if (emailContentRef.current) {
      const range = document.createRange();
      range.selectNode(emailContentRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      alert("Copied to clipboard");
    }
  };

  return (
    <div className="container">
      <div
        ref={emailContentRef}
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          maxWidth: "600px",
          color: "#000",
          backgroundColor:'#ffffff'
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "10px" }}>
          <img
            src="https://i.postimg.cc/s2RHdL1J/COCO-KERALA-header.png"
            alt="Top Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "3px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <div style={{ fontSize: "14px", padding: "0 9px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
              {formData.name}
            </p>
            <p style={{ marginBottom: "3px", fontSize: "12px" }}>
              {formData.title}
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "3px",
                fontSize: "13px",
              }}
            >
              Phone: {formData.phone}
            </p>
            <p
              style={{
                marginBottom: "3px",
                fontSize: "12px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Email:
              <div>
                <a href={`mailto:${formData.email}`}>{formData.email}</a>
              </div>
            </p>
          </div>
          <div className="section2" style={{ fontSize: "10.5px" }}>
            <p style={{ marginBottom: "3px" }}><b>Corporate Office:</b></p>
            <p style={{ marginBottom: "3px" }}>2nd Floor,K C Tower</p>
            <p style={{ marginBottom: "3px" }}>Padivattom</p>
            <p style={{ marginBottom: "3px" }}>Ernakulam-682024</p>
            <p style={{ marginBottom: "3px" }}>Kerala,India</p>
            <p style={{ marginBottom: "3px" }}>Phone: +91 9048200074</p>
            <p style={{ marginBottom: "3px" }}>
              Email:
              <a href="mailto:info@cocokerala.com" style={{ color: "#0000EE" }}>
                info@cocokerala.com
              </a>
            </p>
            <p style={{ marginBottom: "3px" }}>
              Website:{" "}
              <a href="https://www.cocokerala.com" style={{ color: "#0000EE" }}>
                www.cocokerala.com
              </a>
            </p>
          </div>
          <div>
            <div className="section1">
              <div>
                <div
                  style={{ flex: "1", padding: "0 9px", fontSize: "10.5px" }}
                >
                  <p style={{ marginBottom: "3px" }}>Mumbai:+919048200085</p>
                  <p style={{ marginBottom: "3px" }}>Kolkatha:+919048299978</p>
                  <p style={{ marginBottom: "3px" }}>Delhi:+919048200086</p>
                  <p style={{ marginBottom: "3px" }}>Surat:+919048200025</p>
                  <p style={{ marginBottom: "3px" }}>Pune:+919048200084</p>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  textAlign: "right",
                  padding: "0 9px",
                  fontSize: "10.5px",
                }}
              >
                <p style={{ marginBottom: "3px" }}>Ahmedabad:+919048200072</p>
                <p style={{ marginBottom: "3px" }}>Hyderabad:+918714612103</p>
                <p style={{ marginBottom: "3px" }}>Lucknow:+918714669774</p>
                <p style={{ marginBottom: "3px" }}>Rajkot:+918714669771</p>
                <p style={{ marginBottom: "3px" }}>Nagpur:+919048200073</p>
              </div>
            </div>
            <div style={{ flex: "1", padding: "0 9px", fontSize: "11px" }}>
              <p style={{ marginBottom: "3px", whiteSpace: "nowrap" }}>
                Karnataka & Tamilnadu:+918714615177
              </p>
              <p style={{ marginBottom: "3px", whiteSpace: "nowrap" }}>
                MP & Chattisgarh:+918714627900
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left", marginTop: "3px" }}>
          <img
            src="https://i.postimg.cc/brxbcm5K/COCO-KERALA-68.png"
            alt="Bottom Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            padding: "10px",
            width: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                border: "1px solid #ccc",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
              }}
            />
            {errors.name && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
            )}
          </div>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{
                border: "1px solid #ccc",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
              }}
            />
            {errors.title && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.title}</p>
            )}
          </div>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                border: "1px solid #ccc",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
              }}
            />
            {errors.phone && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.phone}</p>
            )}
          </div>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: "1px solid #ccc",
                padding: "10px 20px",
                borderRadius: "5px",
                width: "100%",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: "10px 20px",
                fontWeight: 600,
                border: "none",
                borderRadius: "5px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                padding: "10px 20px",
                fontWeight: 600,
                border: "none",
                borderRadius: "5px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Email;
