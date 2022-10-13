import styles from "./GeneralInformation.module.css";

export default function GeneralInformation({
  personalInformation,
  setPersonalInformation,
}) {
  function handleChangeName(e) {
    setPersonalInformation({
      ...personalInformation,
      name: e.target.value,
    });
  }

  function handleChangeTitle(e) {
    setPersonalInformation({
      ...personalInformation,
      title: e.target.value,
    });
  }

  function handleChangeEmail(e) {
    setPersonalInformation({
      ...personalInformation,
      email: e.target.value,
    });
  }

  function handleChangePhoneNumber(e) {
    setPersonalInformation({
      ...personalInformation,
      phoneNumber: e.target.value,
    });
  }

  function handleChangeAddress(e) {
    setPersonalInformation({
      ...personalInformation,
      address: e.target.value,
    });
  }

  function handleChangeAboutMe(e) {
    setPersonalInformation({
      ...personalInformation,
      aboutMe: e.target.value,
    });
  }

  function handleChangeImage(e) {
    setPersonalInformation({
      ...personalInformation,
      image: URL.createObjectURL(e.target.files[0]),
    });
  }

  const { name, title, email, phoneNumber, address, aboutMe } =
    personalInformation;
  return (
    <div className={styles.personalInformation}>
      <h2 className={styles.h2}>General Information</h2>
      <input
        className={styles.input}
        value={name}
        placeholder="Full name"
        type="text"
        onChange={(e) => handleChangeName(e)}
      />

      <input
        className={styles.input}
        value={title}
        placeholder="Title"
        type="text"
        onChange={(e) => handleChangeTitle(e)}
      />

      <input
        className={styles.input}
        value={email}
        placeholder="Email"
        type="email"
        onChange={(e) => handleChangeEmail(e)}
      />

      <input
        className={styles.input}
        value={phoneNumber}
        placeholder="Phone number"
        type="text"
        onChange={(e) => handleChangePhoneNumber(e)}
      />

      <input
        className={styles.input}
        value={address}
        placeholder="Address"
        type="text"
        onChange={(e) => handleChangeAddress(e)}
      />

      <input
        className={styles.input}
        value={aboutMe}
        placeholder="About me"
        type="text"
        onChange={(e) => handleChangeAboutMe(e)}
      />

      <label htmlFor="image-upload" className={styles.button}>
        Add image
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image"
        onChange={(e) => handleChangeImage(e)}
      />
    </div>
  );
}
