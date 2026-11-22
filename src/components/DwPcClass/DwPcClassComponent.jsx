import React from 'react'
import declint from 'declint-ru'

import DwMoveList from '@/components/DwMoveList'
import DwMoveLink from '@/components/DwMoveLink'
import DwNote from '@/components/DwNote'
import DwQuote from '@/components/DwQuote'
import DwEquipment from '@/components/DwEquipment'

import sortByName from '@/utils/sortByName'

const DwPcClassComponent = (
  {
    advancedMoveIdList,
    advancedMoveToPickOnStart,
    backgroundIdList,
    capstoneMoveIdList,
    damageDice,
    description,
    featureList,
    hpBonus,
    id,
    nameList,
    nickNameList,
    noteId,
    optionalQuestionList,
    quoteEnd,
    specialMoves,
    startMoveIdList,
    striveList,
  },
) => (
  <section className='DwPcClass'>
    {description && description.length ? (
      <DwQuote>{description}</DwQuote>
    ) : null}

    <section className='DwPcClass__name DwPcClass__section'>
      <h2>Имена</h2>
      <p>Выбери имя персонажа или придумай своё.</p>
      <p>Примеры имён: <span className='DwPcClass__nameExamples'>{nameList.sort().join(', ')}</span>.</p>
    </section>

    {nickNameList && nickNameList.length ? (
      <section className='DwPcClass__name DwPcClass__section DwPcClass__name-nickName'>
        <h2>Прозвища</h2>
        <p>Выбери себе прозвище или придумай своё.</p>
        <p>Примеры прозвищ: <span className='DwPcClass__nameExamples'>{nickNameList.join(', ')}</span>.</p>
      </section>
    ) : null}

    <section className='DwPcClass__appearance DwPcClass__section'>
      <h2>Внешность</h2>
      <p>Выбери по одной черте внешности:</p>
      <ul>
        {featureList.map(
          ({ name, variantList }) => (
            <li key={name}>
              <b>{name}</b>: {variantList.join(', ')}
            </li>
          ),
        )}
      </ul>
    </section>

    <section className='DwPcClass__params DwPcClass__section'>
      <h2>Характеристики</h2>
      <p>Распредели эти значения по характеристикам <strong>+2, +1, +1, +0, +0, −1</strong></p>
      <p>Твои максимальные хиты: <strong>{hpBonus} + ТЕЛ</strong></p>
      <p>Твой базовый урон: <strong>к{damageDice}</strong>.</p>
    </section>

    <section className='DwPcClass__personality'>
      <h2>Личность персонажа</h2>

      <section
        className='DwPcClass__strives DwPcClass__section'
        id='strives'
      >
        <h3>Стремления</h3>
        <p>Выбери до трёх <em>Стремлений</em> своего персонажа. Выбирай из вариантов ниже, или придумай собственное.</p>
        <p><em>Стремления</em> олицетворяют то, как персонаж взаимодействует с миром. Следование <em>Стремлениям</em> или иное их использование в игре награждается опытом в <DwMoveLink id='common.session_end'>Конце сессии</DwMoveLink>.</p>
        <ul className='DwPcClass__striveList'>
          {striveList.sort(sortByName).map(
            ({ name, text }) => (
              <li key={name}>
                <b>Стремление: {name}</b>
                <p>{text}</p>
              </li>
            ),
          )}
        </ul>
      </section>

      {optionalQuestionList && optionalQuestionList.length ? (
        <section className='DwPcClass__optionalQuestions DwPcClass__section'>
          <h3>Опциональные вопросы</h3>
          <p>Эти вопросы помогут тебе лучше понимать своего персонажа:</p>
          <ul>
            {optionalQuestionList.map(
              (text, index) => (
                <li key={index}>{text}</li>
              ),
            )}
          </ul>
        </section>
      ) : null}

      <section className='DwPcClass__backgrounds DwPcClass__section'>
        <h2>Предыстория</h2>
        <p>Теперь выбери предысторию и получи соответствующий ход:</p>
        <DwMoveList idList={backgroundIdList}/>
      </section>
    </section>

    <section
      className='DwPcClass__moves'
      id='start_moves'
    >
      <h2>Стартовые ходы</h2>

      <section className='DwPcClass__startMoves'>
        <h3>Ты начинаешь игру со {startMoveIdList.length > 1 ? 'следующими стартовыми ходами' : 'следующим стартовым ходом'}:</h3>
        <DwMoveList idList={startMoveIdList}/>
      </section>

      {(
        advancedMoveToPickOnStart
        && advancedMoveToPickOnStart.limit
        && advancedMoveToPickOnStart.list
        && advancedMoveToPickOnStart.list.length
      ) ? (
        <section className='DwPcClass__startAdvancedMoves'>
          <h2>Стартовые сложные ходы</h2>
          <p>Сразу выбери дополнительно {advancedMoveToPickOnStart.limit} {declint(advancedMoveToPickOnStart.limit, ['сложный ход', 'сложных хода', 'сложных ходов'])} из списка ниже <em>(<DwMoveLink id='common.level_up'>Повышая уровень</DwMoveLink>, ты сможешь выбирать эти ходы как <a href='#advanced_moves'>обычные сложные ходы</a>)</em>.</p>
          <DwMoveList idList={advancedMoveToPickOnStart.list}/>
        </section>
      ) : null}

      <DwEquipment id={id}/>

      <section
        className='DwPcClass__advancedMoves'
        id='advanced_moves'
      >
        <h2>Сложные ходы</h2>
        <p>{advancedMoveToPickOnStart ? '' : 'Сразу выбери один сложный ход. '} <DwMoveLink id='common.level_up'>Повышая уровень</DwMoveLink>, ты можешь выбирать {advancedMoveToPickOnStart ? '' : ' ещё'} один сложный ход из списка ниже, либо увеличивать один из параметров на +1 (максимум +2).</p>
        <DwMoveList idList={advancedMoveIdList}/>
      </section>

      <section className='DwPcClass__capstoneMoves'>
        <h2>Высшие ходы</h2>
        <p><DwMoveLink id='common.level_up'>Получая уровни</DwMoveLink> 6–10, ты можешь выбирать и из этих ходов тоже, либо увеличивать один из параметров на +1 (максимум +3, только один раз на персонажа).</p>
        <DwMoveList idList={capstoneMoveIdList}/>
      </section>

      {(
        specialMoves
        && specialMoves.list
        && specialMoves.list.length
      ) ? (
        <section
          className='DwPcClass__specialMoves'
          id='special_moves'
        >
          <h2>{specialMoves.title}</h2>
          {specialMoves.text ? (
            <section
              className='DwPcClass__specialItems'
              dangerouslySetInnerHTML={{__html: specialMoves.text}}
            />
          ) : null}
          <DwMoveList idList={specialMoves.list}/>
        </section>
      ) : null}

      {quoteEnd ? (
        <DwQuote
          className='DwPcClass__quote DwPcClass__section'
          author={quoteEnd.author}
        >
          {quoteEnd.text}
        </DwQuote>
      ) : null}

      <DwNote noteId={noteId} />
    </section>
  </section>
)

export default DwPcClassComponent
