import { useState } from "react";
import {
  OnBoardingHome,
  OnBoardingExperience,
  OnBoardingMusicalStyle,
  OnBoardingPractice,
  OnBoardingLearn,
} from "../components/onboarding/OnboardingContent";
import { Container } from "../components/onboarding/Onboarding.style";
import ArrowLeft from "../assets/images/ArrowLeft.png";
import { OnboardingBar } from "../components/progressBar/MyJamBar";

export function OnBoarding() {
  const [page, setPage] = useState(0);
  const [isFinish, setIsFinish] = useState(false);

  function voltarPagina() {
    setPage(page - 1);
  }

  function proximaPagina() {
    setPage(page + 1);

    if (page >= 3) {
      setIsFinish(true);
    }
  }

  if (isFinish) {
    return (
      <div>
        <h1>Completou</h1>
      </div>
    );
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <OnboardingBar size={{ width: (page * 100) / 4 + "%" }} />

      {page === 0 && <OnBoardingHome page={page} onClick={proximaPagina} />}

      {page === 1 && (
        <OnBoardingExperience page={page} onClick={proximaPagina} />
      )}

      {page === 2 && (
        <OnBoardingMusicalStyle page={page} onClick={proximaPagina} />
      )}

      {page === 3 && <OnBoardingPractice page={page} onClick={proximaPagina} />}

      {page === 4 && <OnBoardingLearn page={page} onClick={proximaPagina} />}
    </Container>
  );
}
