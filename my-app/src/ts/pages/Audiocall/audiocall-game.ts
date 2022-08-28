import * as helpers from "../AboutTeam/helpers";

// export const audiocall_game = ``;

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
      <a href="#" class="dropdown-item">
        Dropdown item
      </a>
      <a class="dropdown-item">
        Other dropdown item
      </a>
      <a href="#" class="dropdown-item is-active">
        Active dropdown item
      </a>
      <a href="#" class="dropdown-item">
        Other dropdown item
      </a>
      <hr class="dropdown-divider">
      <a href="#" class="dropdown-item">
        With a divider
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

  //-----------------------------------------------------------------
  const gameLegvelHeader = helpers.createHtmlElement(
    "h2",
    "audio-header",
    "Выберите сложность"
  );
  card.append(gameLegvelHeader);
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
  // --------------------------------------------------------------
  
  return card;
};

// export const ourTeam = ourTeamFunc; // export as function for calling on page
export const audiocallGame = audiocallGameFunc(); // export as html element
