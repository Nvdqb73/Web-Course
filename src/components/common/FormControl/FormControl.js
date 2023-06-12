import classNames from 'classnames/bind';

import styles from './FormControl.module.scss';
import FormInput from './FormInput';

const cx = classNames.bind(styles);

function FormControl({ ...props }) {
    const {
        labelStyle,
        placeholder,
        name,
        type,
        value,
        setCurrentLogin,
        labelTitle,
        labelComeback,
        setUserName_L,
        setPassword_L,
        setYourName,
        setUserName_R,
        setEmail_R,
        setPassword_R,
    } = props;

    return (
        <div className={cx('wrapper')}>
            <FormInput
                labelStyle={labelStyle}
                labelTitle={labelTitle}
                placeholder={placeholder}
                value={value}
                name={name}
                type={type}
                setCurrentLogin={setCurrentLogin}
                labelComeback={labelComeback}
                setUserName_L={setUserName_L}
                setPassword_L={setPassword_L}
                setYourName={setYourName}
                setUserName_R={setUserName_R}
                setEmail_R={setEmail_R}
                setPassword_R={setPassword_R}
            />
        </div>
    );
}

export default FormControl;
