import bcrypt from 'bcrypt';

const hashpwd = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedpwd = await bcrypt.hash(password, salt);
    return hashedpwd;
}

const authHelper = { hashpwd }

export default authHelper;