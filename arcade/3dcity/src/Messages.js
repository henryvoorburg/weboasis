/* micropolisJS. Adapted by Graeme McCutcheon from Micropolis.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */
var messageData = {
    AUTOBUDGET_CHANGED: Micro.makeConstantDescriptor('Autobudget changed'),
    BUDGET_NEEDED: Micro.makeConstantDescriptor('User needs to budget'),
    BLACKOUTS_REPORTED: Micro.makeConstantDescriptor('Blackouts reported'),
    DATE_UPDATED: Micro.makeConstantDescriptor('Date changed'),
    DID_TOOL: Micro.makeConstantDescriptor('Tool applied'),
    EARTHQUAKE: Micro.makeConstantDescriptor('Earthquake'),
    EXPLOSION_REPORTED: Micro.makeConstantDescriptor('Explosion Reported'),
    EVAL_UPDATED: Micro.makeConstantDescriptor('Evaluation Updated'),
    FIRE_REPORTED: Micro.makeConstantDescriptor('Fire!'),
    FIRE_STATION_NEEDS_FUNDING: Micro.makeConstantDescriptor('Fire station needs funding'),
    FLOODING_REPORTED: Micro.makeConstantDescriptor('Flooding reported'),
    FUNDS_CHANGED: Micro.makeConstantDescriptor('Total funds has changed'),
    HEAVY_TRAFFIC: Micro.makeConstantDescriptor('Total funds has changed'),
    HELICOPTER_CRASHED: Micro.makeConstantDescriptor('Helicopter crashed'),
    HIGH_CRIME: Micro.makeConstantDescriptor('High crime'),
    HIGH_POLLUTION: Micro.makeConstantDescriptor('High pollution'),
    MONSTER_SIGHTED: Micro.makeConstantDescriptor('Monster sighted'),
    NEED_ELECTRICITY: Micro.makeConstantDescriptor('More power needed'),
    NEED_FIRE_STATION: Micro.makeConstantDescriptor('Fire station needed'),
    NEED_MORE_COMMERCIAL: Micro.makeConstantDescriptor('More commercial zones needed'),
    NEED_MORE_INDUSTRIAL: Micro.makeConstantDescriptor('More industrial zones needed'),
    NEED_MORE_RESIDENTIAL: Micro.makeConstantDescriptor('More residential needed'),
    NEED_MORE_RAILS: Micro.makeConstantDescriptor('More railways needed'),
    NEED_MORE_ROADS: Micro.makeConstantDescriptor('More roads needed'),
    NEED_POLICE_STATION: Micro.makeConstantDescriptor('Police station needed'),
    NEED_AIRPORT: Micro.makeConstantDescriptor('Airport needed'),
    NEED_SEAPORT: Micro.makeConstantDescriptor('Seaport needed'),
    NEED_STADIUM: Micro.makeConstantDescriptor('Stadium needed'),
    NO_MONEY: Micro.makeConstantDescriptor('No money'),
    NOT_ENOUGH_POWER: Micro.makeConstantDescriptor('Not enough power'),
    NUCLEAR_MELTDOWN: Micro.makeConstantDescriptor('Nuclear Meltdown'),
    PLANE_CRASHED: Micro.makeConstantDescriptor('Plane crashed'),
    POLICE_NEEDS_FUNDING: Micro.makeConstantDescriptor('Police need funding'),
    QUERY_WINDOW_NEEDED: Micro.makeConstantDescriptor('Query window needed'),
    REACHED_CAPITAL: Micro.makeConstantDescriptor('Now a capital'),
    REACHED_CITY: Micro.makeConstantDescriptor('Now a city'),
    REACHED_METROPOLIS: Micro.makeConstantDescriptor('Now a metropolis'),
    REACHED_MEGALOPOLIS: Micro.makeConstantDescriptor('Now a megalopolis'),
    REACHED_TOWN: Micro.makeConstantDescriptor('Now a town'),
    REACHED_VILLAGE: Micro.makeConstantDescriptor('Now a village'),
    ROAD_NEEDS_FUNDING: Micro.makeConstantDescriptor('Roads need funding'),
    SHIP_CRASHED: Micro.makeConstantDescriptor('Shipwrecked'),
    SOUND_EXPLOSIONHIGH: Micro.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_EXPLOSIONLOW: Micro.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_HEAVY_TRAFFIC: Micro.makeConstantDescriptor('Heavy Traffic sound'),
    SOUND_HONKHONK: Micro.makeConstantDescriptor('HonkHonk sound'),
    SOUND_MONSTER: Micro.makeConstantDescriptor('Monster sound'),
    TAX_TOO_HIGH: Micro.makeConstantDescriptor('Tax too high'),
    TORNADO_SIGHTED: Micro.makeConstantDescriptor('Tornado sighted'),
    TRAFFIC_JAMS: Micro.makeConstantDescriptor('Traffic jams reported'),
    TRAIN_CRASHED: Micro.makeConstantDescriptor('Train crashed'),
    VALVES_UPDATED: Micro.makeConstantDescriptor('Valves updated'),
    WELCOME: Micro.makeConstantDescriptor('Welcome to 3D city'),
    WELCOMEBACK: Micro.makeConstantDescriptor('Welcome back to your 3D city')
};

var Messages = Object.defineProperties({}, messageData);