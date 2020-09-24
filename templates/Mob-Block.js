export function mobBlock() {
  return `<div id="FILLER-BLOCK" >
<table class="mobBlock">
  <tbody>
    <tr>
      <td><button class="mobCloseButton" id="FILLER-BLOCK-Delete" title="Delete mob">
        &times;
      </button></td>
      <td style="">Name:</td>
      <td style=""><input id="FILLER-BLOCK-Name" type="text" value="FILLER-NAME" /></td>
    </tr>
    <tr>
      <td style="text-align: center">
        <button id="FILLER-BLOCK-Enabled" title="Enable/Disable mob" class="fa fa-eye" /></td>
      <td>Icon:</td>
      <td><select id="FILLER-BLOCK-Icon" name="Icons">
        <option value="smile">😀</option>
        <option value="beard">🧔</option>
        <option value="zombie">🧟</option>
        <option value="skull">💀</option>
        <option value="shade">👤</option>
        <option value="dragon">🐉</option>
        <option value="dino">🦕</option>
        <option value="devil">😈</option>
        <option value="ogre">👹</option>
        <option value="unicorn">🦄</option>
        <option value="wolf">🐺</option>
        <option value="cat">🐱</option>
        <option value="bird">🦅</option>
        <option value="elk">🦌</option>
        <option value="dolphin">🐬</option>
        <option value="plant">🌲</option>
        <option value="robot">🤖</option>
      </select></td>
    </tr>
    <tr>
      <td>
        <span class="disableLabel" id="FILLER-BLOCK-Disable-Label"></span>
      </td>
      <td>Bonus to Hit:</td>
      <td><input id="FILLER-BLOCK-ToHit" type="number" value="FILLER-TOHIT" /></td>
    </tr>
    <tr>
      <td>
        <select id="FILLER-BLOCK-Weapon-Select" class="weaponSelect" title="Common weapons for this mob type">
          <option value="[['ToHit', 1],['IsMelee', true],['Weapon', '1d1 + 1 slashing']]">Custom</option>
          ADDITIONAL-WEAPONS
        </select>
      </td>
      <td>Weapon:</td>
      <td><input id="FILLER-BLOCK-Weapon" type="text" value="FILLER-WEAPON" title="Format must follow XdX +/- X" /></td>
    </tr>
    <tr>
      <td></td>
      <td id="FILLER-BLOCK-Range" class="rangeToggleButton" title="Melee assumes the attack is within 5ft">        
          <span id="FILLER-BLOCK-Melee" style="color:black">Melee</span>
            / 
          <span id="FILLER-BLOCK-Ranged">Ranged</span>       
      </td>
      <td style="display:flex">
        <span class="weaponExpandButton" id="FILLER-BLOCK-Weapon-Expand">
          <i class="fa fa-plus-square-o"></i>
          <span id="FILLER-BLOCK-Weapon-Expand-Tip" style="font-size: 10px; margin-left: 1px; color: black; vertical-align:top; display:inline-block; padding-top: 1px">Add Modifier</span>
        </span>
      </td>
    </tr>
    <tr>
      <td><span id="FILLER-BLOCK-Move-Up" class="fa fa-angle-double-up mobMoveButton"></span></td>
      <td>Number:</td>
      <td><input id="FILLER-BLOCK-Number" type="number" value="1" /></td>
    </tr>
    <tr>
      <td><span id="FILLER-BLOCK-Move-Down" class="fa fa-angle-double-down mobMoveButton"></span></td>
      <td><input id="FILLER-BLOCK-Adv" name="advantage" type="checkbox" /> <label for="advantage"> Advantage</label></td>
      <td><input id="FILLER-BLOCK-Dis" name="disadvantage" type="checkbox" /> <label for="disadvantage"> Disadvantage</label></td>
    </tr>
  </tbody>
</table>
</div>`
}

