import React from "react";
import { userFooterStyles } from "./style";

import Vk from "@/icon/vk.svg";
import Github from "@/icon/Github.svg";
import { ContainerSC } from "../Container/Container";
import { useFooter } from "./useFooter";
import { Controller } from "react-hook-form";

const Footer = () => {
  const { control, handleSubmit, handlerSubmit } = useFooter();
  return (
    <>
      <FooterSC>
        <ContainerSC maxWidth={1500}>
          <OuterWrapperSC>
            <FormSC onSubmit={handleSubmit(handlerSubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => {
                  return (
                    <>
                      <FormTitleSC>Форма обратной связи</FormTitleSC>
                      <Controller
                        name={"name"}
                        control={control}
                        render={({ field }) => {
                          return (
                            <InputMUI
                              label="Ваше имя"
                              variant="outlined"
                              {...field}
                            />
                          );
                        }}
                      />
                      <Controller
                        name={"phone"}
                        control={control}
                        render={({ field }) => {
                          return (
                            <InputMUI
                              label="Ваш Телефон"
                              variant="outlined"
                              {...field}
                            />
                          );
                        }}
                      />
                      <Controller
                        name={"email"}
                        control={control}
                        render={({ field }) => {
                          return (
                            <InputMUI
                              label="Ваша почта"
                              variant="outlined"
                              {...field}
                            />
                          );
                        }}
                      />
                      <Controller
                        name={"message"}
                        control={control}
                        render={({ field }) => {
                          return (
                            <TextAreaMUI multiline={true} rows={7} {...field} />
                          );
                        }}
                      />
                    </>
                  );
                }}
              />

              <SubmitButtonSC type="submit" variant="contained">
                Отправить
              </SubmitButtonSC>
            </FormSC>
            <RightSideWrapperSC>
              <AboutMeSC>
                Проект разработан в учебных целях почта:mormir09@gmail.com
              </AboutMeSC>
              <SocialWrapperSC>
                <SocialLinkSC href="/">
                  <Vk />
                </SocialLinkSC>
                <SocialLinkSC href="/">
                  <Github />
                </SocialLinkSC>
              </SocialWrapperSC>
            </RightSideWrapperSC>
          </OuterWrapperSC>
        </ContainerSC>
      </FooterSC>
    </>
  );
};

const {
  FormSC,
  FooterSC,
  InputMUI,
  AboutMeSC,
  TextAreaMUI,
  FormTitleSC,
  SocialLinkSC,
  OuterWrapperSC,
  SubmitButtonSC,
  SocialWrapperSC,
  RightSideWrapperSC,
} = userFooterStyles();

export default React.memo(Footer);
