/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Grid, Button } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './ForgetPwd.scss';
import '@icedesign/base/dist/ICEDesignBase.css';
import Header from '../../Header/Header';
const { Row, Col } = Grid;
class ForgetPwd extends Component {
  static displayName = 'ForgetPwd';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        passwd: '',
        rePasswd: '',
      },
    };
  }

  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入新密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    console.log('stateValues:', stateValues);
    if (values && values !== stateValues.passwd) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      console.log('values', values);
    });
  };

  render() {
    return (
      <div className="change-password-form">
      <Header></Header>
        <IceContainer>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}></h2>

              <Row wrap style={styles.formItem}>
                <Col xxs="7" s="4" l="3" style={styles.formLabel}>
                  新密码：
                </Col>
                <Col xxs="16" s="10" l="7">
                  <IceFormBinder
                    name="passwd"
                    required
                    validator={this.checkPasswd}
                  >
                    <Input
                      htmlType="password"
                      size="large"
                      placeholder="请重新输入新密码"
                    />
                  </IceFormBinder>
                  <IceFormError name="passwd" />
                </Col>
              </Row>

              <Row wrap style={styles.formItem}>
                <Col xxs="7" s="4" l="3" style={styles.formLabel}>
                  确认密码：
                </Col>
                <Col xxs="16" s="10" l="7">
                  <IceFormBinder
                    name="rePasswd"
                    required
                    validator={(rule, values, callback) =>
                      this.checkPasswd2(
                        rule,
                        values,
                        callback,
                        this.state.value
                      )
                    }
                  >
                    <Input
                      htmlType="password"
                      size="large"
                      placeholder="两次输入密码保持一致"
                    />
                  </IceFormBinder>
                  <IceFormError name="rePasswd" />
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>

          <Row wrap style={{ marginTop: 20 }}>
            <Col xxs={{ offset: 6 }} s={{ offset: 3 }}>
              <Button
                size="large"
                type="primary"
                onClick={this.validateAllFormField}
              >
                提 交
              </Button>
            </Col>
            <Col>
            <Button
                size="large"
                type="primary"
              >
                <a href="/" style={{color:'black'}}>
                返回
                
                </a>
              </Button>
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}
export default ForgetPwd;
const styles = {
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    marginBottom: 25,
  },
  formLabel: {
    height: '32px',
    lineHeight: '32px',
    textAlign: 'right',
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
