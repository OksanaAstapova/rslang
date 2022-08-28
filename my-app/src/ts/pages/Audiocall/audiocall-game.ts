import * as helpers from "../AboutTeam/helpers";

const dropdownChoise = `
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Выберите сложность</span>
      <span class="icon is-small">
        <i class="fa-solid fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a data-level="01" class="dropdown-item">
        01 Level
      </a>
      <a data-level="02" class="dropdown-item">
        02 Level
      </a>
      <a data-level="03" class="dropdown-item is-active">
        03 Level
      </a>
      <a data-level="04" class="dropdown-item">
        04 Level
      </a>
      <a data-level="05" class="dropdown-item">
        05 Level
      </a>
      <a data-level="06" class="dropdown-item">
        06 Level
      </a>
    </div>
</div>`

const audiocallGameFunc = () => {
  const card = helpers.createHtmlElement("div", "audio-game__card", "");
  // just header with name ----------------------------------------
  const audioHeader = helpers.createHtmlElement(
    "h1",
    "audio-header",
    "Игра: Аудиовызов"
  );
  card.append(audioHeader);

  // --------------------------------------------------------------
  const levelChoise = helpers.createHtmlElement(
    "div",
    "dropdown is-hoverable",
    dropdownChoise
  );
  card.append(levelChoise);

  // --------------------------------------------------------------
  const audioWrapper = helpers.createHtmlElement(
    "div",
    "audio-game__wrapper",
    ""
  );
  card.append(audioWrapper);

  // --------------------------------------------------------------
  return card;
};

export const audiocallGame = audiocallGameFunc(); // export as html element
