import React, { PureComponent, Fragment } from "react";
import PropTypes from 'prop-types';
import { Modal } from "antd";
import "antd/lib/modal/style";
import css from 'styled-jsx/css'
import DoButton from '@/components/DoCMDBComponents/DoButton';
import {FormattedMessage} from "react-intl";
const isFunction = (data) => typeof data === 'function';

export default (WrappedComponent) => {

    return class ModalHoc extends PureComponent{
        static propTypes = {
            modalProps: PropTypes.object,
            footerType: PropTypes.bool
        };
        static defaultProps = {
            footerType: true
        }
        state = {
            visible: false,
            saving: false,
        };

        doOk = null;
        doShow = null;
        doCancel = null;

        componentDidCatch(e){
            console.error(e);
        }

        componentDidMount(){
            this.modalControl.show(this.doShow)
        }

        handleOk = () => isFunction(this.doOk) && this.doOk();

        handleCancel = () => this.modalControl.close(this.doCancel);

        /**
         * 弹框的控制器
         * @type {{show: (function(*=): *), close: (function(*=): *), showSaving: (function(*=): *), hideSaving: (function(*=): *), registerOk: ModalHoc.modalControl.registerOk, registerCancel: ModalHoc.modalControl.registerCancel}}
         */
        modalControl = {
            show: (cb) => this.setState({ visible: true }, () => isFunction(cb) && cb()),
            close: (cb) => this.setState({ visible: false, saving: false }, () => isFunction(cb) && cb()),
            showSaving: (cb) => this.setState({ saving: true }, () => isFunction(cb) && cb()),
            hideSaving: (cb) => this.setState({ saving: false }, () => isFunction(cb) && cb()),
            registerShow: (cb) => {
                if(isFunction(cb)){
                    this.doShow = cb;
                }
            },
            registerOk: (cb, isShowSaving = true) => {
                if(isFunction(cb)){
                    if(isShowSaving){
                        this.doOk = () => this.setState({ saving: true }, () => cb())
                    }else {
                        this.doOk = cb;
                    }
                }
            },
            registerCancel: (cb) => {
                if(isFunction(cb)){
                    this.doCancel = cb;
                }
            }
        };

        render() {
            const { modalProps, footerType, ...rest } = this.props;
            const { visible, saving } = this.state;
            const {styles, className} = getStyle();
            console.log(modalProps,'momo')
            return (
                <Modal
                    className={`${className} do-modal`}
                    width={680}
                    visible={visible}
                    // onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    confirmLoading={saving}
                    destroyOnClose={true}
                    prefixCls={'CM_DB-modal'}
                    footer={
                        footerType ? <Fragment>
                            <DoButton onClick={this.handleCancel} shape="round" prefixCls={'CM_DB-btn'}>
                                <FormattedMessage id="common.cancel" defaultMessage="取消" />
                            </DoButton>
                            <DoButton onClick={this.handleOk} type='primary' shape="round" style = {{marginLeft:'25px'}} loading={saving} prefixCls={'CM_DB-btn'}>
                                <FormattedMessage id="common.confirm" defaultMessage="确认"/>
                            </DoButton>
                        </Fragment> : null
                    }
                    {...modalProps}
                >
                    <WrappedComponent modalControl={this.modalControl} {...rest} />
                    {styles}
                </Modal>
            );
        }
    }
};


const getStyle = () => {
    // language=SCSS
    return css.resolve`
        
        .do-modal{
          :global(.CM_DB-modal-title){
            font-size: 14px;
            font-weight: 800;
          }
          :global(.CM_DB-modal-header){
            padding: 16px 0px;
            color: rgba(0, 0, 0, 0.65);
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            border-radius: 4px 4px 0 0;
            margin: 0 16px;
          }
          :global(.CM_DB-modal-body){
              padding: 20px 16px 45px;
              position: relative;
          }
          :global(.CM_DB-input){
            border-radius: 4px;
            font-size: 12px;
          }
          :global(.CM_DB-modal-footer){
            border-top:none;
            text-align: center;
          }
          :global(textarea){
            border-radius: 1px !important;
          }
          :global(.CM_DB-select-selector){
            border-radius: 4px;
          }
          :global(.CM_DB-form-item-required){
            font-size: 12px;
          }
          :global(.CM_DB-btn){
              height: 30px
          }
        }
    `
}
