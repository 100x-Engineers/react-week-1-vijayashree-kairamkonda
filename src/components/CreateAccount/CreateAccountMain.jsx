import { useContext } from "react";
import { days31, monthOptions, years } from "../../constants/Constants";
import { SelectInput } from "../shared/SelectInput";
import { TextInput } from "../shared/TextInput";
import { CreateAccountContext } from "../../context/createAccount/CreateAccountContext";

export const CreateAccountMain = () => {
  const { steps, userDetails, setUserDetails } =
    useContext(CreateAccountContext);

  return (
    <>
      {steps === "2" ? (
        <>
          <div className="font-bold text-base">Create your account</div>
          {/* Need to modify input */}
          <TextInput
            value={userDetails?.name}
            readOnly
            name="Name"
            placeholder="Name"
          />
          <TextInput
            readOnly
            name="Email"
            placeholder="Email"
            value={userDetails?.email}
          />
          <TextInput
            readOnly
            name="Date of birth"
            value={` ${userDetails?.birthDay} / ${userDetails?.birthMonth} / ${userDetails?.birthYear}`}
          />
        </>
      ) : steps === "3" ? (
        <>
          <div className="font-bold text-base">We sent you a code</div>
          <div className="text-neutral-500 font-normal">
            Enter it below to verify vijayashree@gmail.com
          </div>
          <div className=" flex flex-col">
            <fieldset className="w-full group rounded border border-solid border-neutral-500 px-3 py-3 focus-within:border-twitter-default">
              <legend className="text-xs text-neutral-500 group-focus-within:text-twitter-default">
                <div className="px-2">Verification code</div>
              </legend>
              <div className="flex justify-end items-center relative">
                <input
                  type="text"
                  placeholder="Verification code"
                  className="w-full pb-1 bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
                />
              </div>
            </fieldset>
            <div className="text-twitter-default font-normal flex justify-end">
              Didn&apos;t receive a code?
            </div>
          </div>
        </>
      ) : steps === "4" ? (
        <>
          <div className="flex flex-col space-y-2">
            <div className="font-bold text-base">
              You&apos;ll need a password
            </div>
            <div className="text-neutral-500 font-normal">
              Make sure it&apos;s 8 characters or more
            </div>
            <TextInput
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
              name="Password"
              placeholder="Password"
              value={userDetails?.password}
            />
          </div>
        </>
      ) : (
        <>
          <div className="font-bold text-base">Create your account</div>
          <div className="flex flex-col space-y-4">
            <TextInput
              name="Name"
              value={userDetails?.name}
              placeholder="Name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, name: e.target.value });
              }}
            />
            <TextInput
              name="Email"
              value={userDetails?.email}
              placeholder="Email"
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <span className="font-bold text-base">Date of birth</span>
            <span className="font-normal text-neutral-500">
              This will not be shown publicly.Confirm your own age, even if this
              account is for a business, a pet, or something else.
            </span>
          </div>

          <div className="flex space-x-2 py-2">
            <SelectInput
              value={userDetails?.birthMonth}
              name="Month"
              defaultVal={monthOptions?.[0]?.value}
              options={monthOptions}
              onChange={(e) => {
                setUserDetails({ ...userDetails, birthMonth: e.target.value });
              }}
            />

            <SelectInput
              value={userDetails?.birthDay}
              name="Day"
              defaultVal={days31?.[0]?.value}
              options={days31}
              onChange={(e) => {
                setUserDetails({ ...userDetails, birthDay: e.target.value });
              }}
            />

            <SelectInput
              value={userDetails?.birthYear}
              options={years}
              name="Year"
              defaultVal={years?.[0]?.value}
              onChange={(e) => {
                setUserDetails({ ...userDetails, birthYear: e.target.value });
              }}
            />
          </div>
        </>
      )}
    </>
  );
};
