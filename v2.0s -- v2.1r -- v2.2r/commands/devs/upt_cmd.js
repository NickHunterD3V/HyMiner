module.exports = [{
    name: 'upt',
    aliases: ['uptcmd','uptcmds','updatecmds','updatecommands','updatecmd','update'],
    code: `
$editMessage[$get[msgid];{newEmbed:{title:Update Commands}{description:Updated.}{color:#72d656}}]
$updateCommands
$let[msgid;$sendMessage[{newEmbed:{title:Update Commands}{description:Updating...}};yes]]

$noMsgOnlyIf[$getGlobalUserVar[isDev]==true;{execute:notADevError}]
`
}]