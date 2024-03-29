// components/OrderStatus.js
import styles from "./OrderStatus.module.css";

const OrderStatus = () => {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperStep}>
        <div className={styles.stepperStepIcon}>📄</div>
        <p>Đơn Hàng Đã Đặt</p>
      </div>
      <div className={styles.stepperStep}>
        <div className={styles.stepperStepIcon}>
          <div classname={styles.stepperStepIiconFinish}>💵</div>
        </div>
        <p>Đã Xác Nhận Thông Tin Thanh Toán</p>
      </div>
      <div className={styles.stepperStep}>
        <div className={styles.stepperStepIcon}>🚚</div>
        <p>Đã Giao Cho DVVC</p>
      </div>
      <div className={styles.stepperStep}>
        <div className={styles.stepperStepIcon}>📦</div>
        <p>Chờ Giao Hàng</p>
      </div>
      <div className={styles.stepperStep}>
        <div className={styles.stepperStepIcon}>⭐️</div>
        <p>Chờ Giao Hàng</p>
        {/* <span>⭐️</span>
        <br />
        Đánh Giá */}
      </div>
      <div className={styles.stepperLine}>
        <div
          className={styles.stepperLineBackground}
          // style="background: rgb(224, 224, 224);"
        ></div>
        <div
          className={styles.stepperLineForeground}
          // style="width: calc(75% - 105px); background: rgb(45, 194, 88);"
        ></div>
      </div>
    </div>
  );
};

export default OrderStatus;
