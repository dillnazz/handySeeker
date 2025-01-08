import "./specialistsRequest.scss";
const SpecialistsRequests = () => {
  return (
    <div>
      <div className="specialistsRequest">
        <div className="mainDiv">
          <div className="inputDiv">
            <h3>Записаться на приём</h3>
            <div className="inputs">
              <div>
                {/* <label htmlFor="firstOption">Выберите категорию:</label> */}
                <select id="firstOption" name="firstOption">
                  <option value="option1">Опция 1</option>
                  <option value="option2">Опция 2</option>
                  <option value="option3">Опция 3</option>
                </select>
              </div>
              <div>
                {/* <label htmlFor="secondInput">Введите текст:</label> */}
                <input type="text" id="secondInput" name="secondInput" placeholder="Введите что-то..." />
              </div>
              <div>
                {/* <label htmlFor="thirdOption">Выберите опцию:</label> */}
                <select id="thirdOption" name="thirdOption">
                  <option value="optionA">Опция A</option>
                  <option value="optionB">Опция B</option>
                  <option value="optionC">Опция C</option>
                </select>
              </div>
              <div>
                {/* <label htmlFor="fourthInput">Введите значение:</label> */}
                <input type="text" id="fourthInput" name="fourthInput" placeholder="Введите значение..." />
              </div>
            </div>
          </div>
          <div className="requestButtonInfos">
            <p>Оставьте заявку и мы свяжемся с вам в ближайшее время</p>
            <button>Оставить заявку</button>
            <p>Отправляя заявку, вы соглашаетесь на нашу политику конфиденциальности</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialistsRequests