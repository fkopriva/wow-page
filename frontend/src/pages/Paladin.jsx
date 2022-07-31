import React from 'react'
import ClassLayout from '../components/ClassLayout'

const Paladin = () => {
    const text = "Paladin dokáže Healovat, Tankovat a dokonce být ještě hodně dobrý v PVP. Paladin má hodně Aur s různými bonusy, které mu mohou dokonale měnit styl hry. V tankování vyniká díky Plate Armor a Shieldu a využívá techniku AoE, což znamená tankování více mobů najednou. Jako Heal také není špatný, díky jeho přímým Healům (Heal, který mu najednou po Castění vyléčí určitý počet HP). V PVP vyniká hlavně díky Patchi 3.0.2, kde se BLIZZARD rozhodl Paladina obrovsky zesílit. Za Paladina je poměrně velmi lehké hrát."
    const text2 = "Paladin je docela dobrý Healer a od patche 3.0.2 perfektní DMGer. Má životky a manu :). Je lehké za něj hrát. Je velmi žádaný do Arén i Raidů. Bojování s ním není tak zábavné jako u jiných Classů."
    const talentProt = "Talent(Prot)"
    const talentProtDesc = "Tento strom připraví Paladina na tankování, tzv. na PVE. Paladin je považován za nejlepšího AoE tanka (tankování více mobů najednou). Vylepšení se vztahují hlavně na udržení Aggra. Rozdíl mezi Warriorem nebo Druidem je v tom, že Paladin potřebuje k tankování Manu a ne Rage."
    const talentHoly = "Talent(Holy)"
    const talentHolyDesc = "V tomto talentovém stromě naleznete pestrou škálu Healů a jejich vylepšení. Jak už sem se zmínil, Paladin má většinou Healy přímé. Paladin není moc oblíbený Healer do Raidů a téměř vůbec ne do arén. V tomto stromě také naleznete vylepšení některých požehnání a Aur."
    const talentRetri = "Talent(Retri)"
    const talentRetriDesc = "Tyto talenty se nejvíce hodí do PVP. Je docela lehké za tento strom hrát, když se naučíte dobře přepínat aury a poznáte kdy použít který Judgement. Tyto paladinové jsou většinou známí jejich nic neděláním a pobíháním v bublině :). Velmi oblíbený je také stun na 6 sekund Hammer of Justice"
    const profese = "Profese pro Paladina jsou např: Blacksmithing, Mining, Inscription, Herbalism. Jako Secondary profese se hodí vše."
    const profeseTitle = "Doporučené profese pro classu"

  return (
    <div>
        <ClassLayout title="Paladin" desc={text} desc2={text2} talentTitleFirst={talentProt} talentDescFirst={talentProtDesc} 
        talentTitleSecond={talentHoly} talentDescSecond={talentHolyDesc} talentTitleThird={talentRetri} talentDescThird={talentRetriDesc}
        profession={profese} professionTitle={profeseTitle}
        />
    </div>
  )
}

export default Paladin;