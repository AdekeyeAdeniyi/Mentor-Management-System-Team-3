import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import avatar from "./../../../../assets/images/avatar.svg";
import "./index.css";
import VALIDATION_PATTERNS from "../../../../assets/validation-patterns";
import FormikValidationMessageComponent from "../../../../components/error-messages/formik-validation-message-component";
import linkedInSVG from "../../../../assets/images/social/Linkedin.svg";
import githubSVG from "../../../../assets/images/social/Github.svg";
import twitterSVG from "../../../../assets/images/social/Twitter.svg";
import instagramSVG from "../../../../assets/images/social/Instagram.svg";

interface FormValues {
  firstName: string;
  lastName: string;
  about: string;
  website: string;
  country: string;
  city: string;
  github: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

const ProfileForm: React.FC = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    about: "",
    website: "",
    country: "",
    city: "",
    github: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required please"),
    lastName: Yup.string().required("Last name is required please"),
    about: Yup.string().required("Please your bio is required"),
    website: Yup.string().matches(
      VALIDATION_PATTERNS.WEBSITE_URL,
      "Please enter a valid website url"
    ),
    github: Yup.string().matches(
      VALIDATION_PATTERNS.GITHUB_PROFILE,
      "Please enter a valid github profile"
    ),
    linkedin: Yup.string().matches(
      VALIDATION_PATTERNS.LINKEDIN_PROFILE,
      "Please enter a valid linkedin profile"
    ),
    instagram: Yup.string().matches(
      VALIDATION_PATTERNS.INSTAGRAM_PROFILE,
      "Please enter a valid instagram profile"
    ),
    twitter: Yup.string().matches(
      VALIDATION_PATTERNS.TWITTER,
      "Please enter a valid twitter profile"
    ),
  });

  const handleSubmit = (values: FormValues) => {
    console.log(values);
    // save changes logic here
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="w-full profile-form  h-screen">
            <div className="row w-full mb-6">
              <div className="flex items-start justify-start w-full flex-row mt-[2%]">
                <img
                  src={avatar}
                  className="w-20 h-30 mb-1"
                  alt="user profile avatar"
                />
                <div>
                  <h3 className="text-black text-2xl ms-11 font-bold">
                    Set Profile Picture
                  </h3>
                  <button className="bg-green-three ms-11 text-white rounded-[10px] p-[5px]  pe-[30px] ps-[30px]  font-medium mt-1">
                    Update Picture
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col relative">
                <div className="mb-5">
                  <div className="flex flex-row  relative  w-full">
                    <label className="text-label" htmlFor="firstName">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="text-input ms-1 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="text-input ms-6 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                  </div>
                  <FormikValidationMessageComponent name="firstName" />
                  <FormikValidationMessageComponent name="lastName" />
                </div>

                <div className="mb-5">
                  <div className="flex flex-row  relative  w-full">
                    <label className="text-label" htmlFor="about">
                      About
                    </label>
                    <Field
                      type="text"
                      id="about"
                      as="textarea"
                      name="about"
                      placeholder="Your Bio"
                      className="text-input ms-1 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                  </div>
                  <FormikValidationMessageComponent name="about" />
                </div>

                <div className="mb-5">
                  <div className="flex flex-row  relative  w-full">
                    <label className="text-label" htmlFor="website">
                      Website
                    </label>
                    <Field
                      type="text"
                      id="website"
                      name="website"
                      placeholder="www.example.com"
                      className="text-input ms-1 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                  </div>
                  <FormikValidationMessageComponent name="website" />
                </div>

                <div className="mb-5">
                  <div className="flex flex-row  relative  w-full">
                    <label className="text-label" htmlFor="country">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      placeholder="Select Country"
                      className="text-input ms-1 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                    <label style={{paddingLeft:"44px"}} className="text-label" htmlFor="country">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      placeholder="Select City"
                      className="text-input ms-1 border-2 border-lightGray-two rounded-[5px] text-[15px] "
                    />
                  </div>
                  <FormikValidationMessageComponent name="country" />
                  <FormikValidationMessageComponent name="city" />
                </div>

                <div className="mb-0 flex flex-row">
                  <div className="flex flex-row input-icons relative w-full">
                    <label className="text-label" htmlFor="firstName">
                      Social
                    </label>
                    <div className="flex flex-col input-icons ps-5 relative w-full">
                      <div className="flex flex-row input-icons relative w-full">
                        <div className="flex flex-row input-icons ms-1 w-full">
                          <img src={githubSVG} alt="profile logo" className="icon" />
                          <Field
                            disabled
                            type="text"
                            value="GitHub"
                            className="text-input input-icon-label ms-1 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                          <Field
                            type="text"
                            id="github"
                            name="github"
                            placeholder="@githubuser"
                            className="text-input input-icon-field ms-0 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                        </div>
                        <div className="flex flex-row input-icons ms-6 w-full">
                          <img src={instagramSVG} alt="profile logo" className="icon" />
                          <Field
                            disabled
                            type="text"
                            value="Instagram"
                            className="text-input input-icon-label ms-1 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                          <Field
                            type="text"
                            id="instagram"
                            name="instagram"
                            placeholder="@instagramuser"
                            className="text-input input-icon-field ms-0 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                        </div>
                      </div>
                      <div className="flex flex-row input-icons relative w-full">
                        <div className="flex flex-row input-icons ms-1 w-full">
                          <img src={linkedInSVG} alt="profile logo" className="icon" />
                          <Field
                            disabled
                            type="text"
                            value="LinkedIn"
                            className="text-input input-icon-label ms-1 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                          <Field
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            placeholder="@linkedinuser"
                            className="text-input input-icon-field ms-0 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                        </div>
                        <div className="flex flex-row input-icons ms-6 w-full">
                          <img src={twitterSVG} alt="profile logo" className="icon" />
                          <Field
                            disabled
                            type="text"
                            value="Twitter"
                            className="text-input input-icon-label ms-1 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                          <Field
                            type="text"
                            id="twitter"
                            name="twitter"
                            placeholder="@twitteruser"
                            className="text-input input-icon-field ms-0 border-2 border-lightGray-two rounded-[5px] ps-14 text-[15px] "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <FormikValidationMessageComponent name="github" />
                <FormikValidationMessageComponent name="instagram" />
                <FormikValidationMessageComponent name="linkedin" />
                <FormikValidationMessageComponent name="twitter" />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                style={{ marginLeft: "auto" }}
                className="bg-green-three text-white rounded-[10px] p-[10px] pe-[40px] ps-[40px] font-medium mt-1"
              >
                Save Changes
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;