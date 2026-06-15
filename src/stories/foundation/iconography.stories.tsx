import preview from '../../../.storybook/preview'
import {
  Icon4k,
  IconAccessibility,
  IconAirplay,
  IconAlarm,
  IconAlignBottom,
  IconAlignCenterHorizontal,
  IconAlignCenterVertical,
  IconAlignHorizontally,
  IconAlignLeft,
  IconAlignRight,
  IconAlignTop,
  IconAlignVertically,
  IconApproximate,
  IconAppWindow,
  IconArchive,
  IconArchiveIn,
  IconArchiveOut,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsAllDirections,
  IconArrowsContract,
  IconArrowsDiagonalLeft,
  IconArrowsDiagonalRight,
  IconArrowsExpand,
  IconArrowsHorizontal,
  IconArrowsLeftRight,
  IconArrowsUpDown,
  IconArrowsVertical,
  IconArrowUDown,
  IconArrowULeft,
  IconArrowUp,
  IconArrowURight,
  IconArrowUUp,
  IconAsterisk,
  IconAt,
  IconBank,
  IconBankNote,
  IconBarcode,
  IconBarricade,
  IconBattery,
  IconBatteryEmpty,
  IconBatteryFull,
  IconBatteryHigh,
  IconBatteryMedium,
  IconBell,
  IconBellOff,
  IconBellOn,
  IconBellSilent,
  IconBezier,
  IconBinary,
  IconBook,
  IconBookBookmark,
  IconBookmark,
  IconBookmarks,
  IconBookOpen,
  IconBoundingBox,
  IconBox,
  IconBoxes,
  IconBrackets,
  IconBriefcase,
  IconBroadcast,
  IconBrowser,
  IconBrowsers,
  IconBuilding,
  IconBuildings,
  IconCalendar,
  IconCalendarCheck,
  IconCalendarHeart,
  IconCalendarMinus,
  IconCalendarOff,
  IconCalendarPlus,
  IconCalendarStar,
  IconCalendarTime,
  IconCalendarX,
  IconCamera,
  IconCameraOff,
  IconChalkboard,
  IconCharging,
  IconChartBarHorizontal,
  IconChartBarVertical,
  IconChartCombined,
  IconChartLineDown,
  IconChartLineUp,
  IconChartPie,
  IconChartScatter,
  IconChat,
  IconChatMinus,
  IconChatOff,
  IconChatPlus,
  IconChats,
  IconCheck,
  IconCheckDouble,
  IconChevronDown,
  IconChevronDownDouble,
  IconChevronLeft,
  IconChevronLeftDouble,
  IconChevronRight,
  IconChevronRightDouble,
  IconChevronUp,
  IconChevronUpDouble,
  IconChevronUpDown,
  IconCircle,
  IconCircleFilled,
  IconCircleHalfHorizontal,
  IconCircleHalfVertical,
  IconClipboard,
  IconClock,
  IconClosedCaptioning,
  IconClosedCaptioningFilled,
  IconCloud,
  IconCloudDownload,
  IconCloudUpload,
  IconCode,
  IconCoffee,
  IconCoin,
  IconCoins,
  IconCollapse,
  IconColors,
  IconConfetti,
  IconContactlessPay,
  IconContacts,
  IconContract,
  IconControls,
  IconCookie,
  IconCopy,
  IconCpu,
  IconCreditCard,
  IconCrop,
  IconCube,
  IconCurrencyBtc,
  IconCurrencyCny,
  IconCurrencyEth,
  IconCurrencyEur,
  IconCurrencyGbp,
  IconCurrencyGtq,
  IconCurrencyInr,
  IconCurrencyJpy,
  IconCurrencyKrw,
  IconCurrencyKzt,
  IconCurrencyMxn,
  IconCurrencyNgn,
  IconCurrencyRub,
  IconCurrencyUsd,
  IconCursor,
  IconCursorClick,
  IconCursorText,
  IconDashboard,
  IconDatabase,
  IconDeviceLaptop,
  IconDevicePc,
  IconDevicePhone,
  IconDevices,
  IconDeviceTablet,
  IconDeviceTv,
  IconDiamond,
  IconDislike,
  IconDislikeFilled,
  IconDivide,
  IconDotsHorizontal,
  IconDotsVertical,
  IconDownload,
  IconEarth,
  IconEdit,
  IconEqual,
  IconExclude,
  IconExperiment,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFile,
  IconFileGif,
  IconFilePdf,
  IconFiles,
  IconFileTxt,
  IconFilter,
  IconFilterX,
  IconFingerprint,
  IconFirstAid,
  IconFlag,
  IconFlagAD,
  IconFlagAE,
  IconFlagAF,
  IconFlagAG,
  IconFlagAI,
  IconFlagAL,
  IconFlagAM,
  IconFlagAO,
  IconFlagAR,
  IconFlagAS,
  IconFlagAT,
  IconFlagAU,
  IconFlagAW,
  IconFlagAX,
  IconFlagAZ,
  IconFlagBA,
  IconFlagBB,
  IconFlagBD,
  IconFlagBE,
  IconFlagBF,
  IconFlagBG,
  IconFlagBH,
  IconFlagBI,
  IconFlagBJ,
  IconFlagBL,
  IconFlagBM,
  IconFlagBN,
  IconFlagBO,
  IconFlagBR,
  IconFlagBS,
  IconFlagBT,
  IconFlagBV,
  IconFlagBW,
  IconFlagBY,
  IconFlagBZ,
  IconFlagCA,
  IconFlagCC,
  IconFlagCD,
  IconFlagCF,
  IconFlagCG,
  IconFlagCH,
  IconFlagCI,
  IconFlagCK,
  IconFlagCL,
  IconFlagCM,
  IconFlagCN,
  IconFlagCO,
  IconFlagCR,
  IconFlagCU,
  IconFlagCV,
  IconFlagCW,
  IconFlagCX,
  IconFlagCY,
  IconFlagCZ,
  IconFlagDE,
  IconFlagDJ,
  IconFlagDK,
  IconFlagDM,
  IconFlagDO,
  IconFlagDZ,
  IconFlagEC,
  IconFlagEE,
  IconFlagEG,
  IconFlagER,
  IconFlagES,
  IconFlagET,
  IconFlagEU,
  IconFlagFI,
  IconFlagFJ,
  IconFlagFK,
  IconFlagFM,
  IconFlagFO,
  IconFlagFR,
  IconFlagGA,
  IconFlagGB,
  IconFlagGBENG,
  IconFlagGBNIR,
  IconFlagGBSCT,
  IconFlagGBWLS,
  IconFlagGBZET,
  IconFlagGD,
  IconFlagGE,
  IconFlagGF,
  IconFlagGG,
  IconFlagGH,
  IconFlagGI,
  IconFlagGL,
  IconFlagGM,
  IconFlagGN,
  IconFlagGP,
  IconFlagGQ,
  IconFlagGR,
  IconFlagGS,
  IconFlagGT,
  IconFlagGU,
  IconFlagGW,
  IconFlagGY,
  IconFlagHK,
  IconFlagHM,
  IconFlagHN,
  IconFlagHR,
  IconFlagHT,
  IconFlagHU,
  IconFlagID,
  IconFlagIE,
  IconFlagIL,
  IconFlagIM,
  IconFlagIN,
  IconFlagIO,
  IconFlagIQ,
  IconFlagIR,
  IconFlagIS,
  IconFlagIT,
  IconFlagJE,
  IconFlagJM,
  IconFlagJO,
  IconFlagJP,
  IconFlagKE,
  IconFlagKG,
  IconFlagKH,
  IconFlagKI,
  IconFlagKM,
  IconFlagKN,
  IconFlagKP,
  IconFlagKR,
  IconFlagKW,
  IconFlagKY,
  IconFlagKZ,
  IconFlagLA,
  IconFlagLB,
  IconFlagLC,
  IconFlagLI,
  IconFlagLK,
  IconFlagLR,
  IconFlagLS,
  IconFlagLT,
  IconFlagLU,
  IconFlagLV,
  IconFlagLY,
  IconFlagMA,
  IconFlagMC,
  IconFlagMD,
  IconFlagME,
  IconFlagMF,
  IconFlagMG,
  IconFlagMH,
  IconFlagMK,
  IconFlagML,
  IconFlagMM,
  IconFlagMN,
  IconFlagMO,
  IconFlagMP,
  IconFlagMQ,
  IconFlagMR,
  IconFlagMS,
  IconFlagMT,
  IconFlagMU,
  IconFlagMV,
  IconFlagMW,
  IconFlagMX,
  IconFlagMY,
  IconFlagMZ,
  IconFlagNA,
  IconFlagNC,
  IconFlagNE,
  IconFlagNF,
  IconFlagNG,
  IconFlagNI,
  IconFlagNL,
  IconFlagNO,
  IconFlagNP,
  IconFlagNR,
  IconFlagNU,
  IconFlagNZ,
  IconFlagOM,
  IconFlagPA,
  IconFlagPE,
  IconFlagPF,
  IconFlagPG,
  IconFlagPH,
  IconFlagPK,
  IconFlagPL,
  IconFlagPM,
  IconFlagPN,
  IconFlagPR,
  IconFlagPS,
  IconFlagPT,
  IconFlagPW,
  IconFlagPY,
  IconFlagQA,
  IconFlagRE,
  IconFlagRO,
  IconFlagRS,
  IconFlagRU,
  IconFlagRW,
  IconFlagSA,
  IconFlagSB,
  IconFlagSC,
  IconFlagSD,
  IconFlagSE,
  IconFlagSG,
  IconFlagSH,
  IconFlagSI,
  IconFlagSJ,
  IconFlagSK,
  IconFlagSL,
  IconFlagSM,
  IconFlagSN,
  IconFlagSO,
  IconFlagSR,
  IconFlagSS,
  IconFlagST,
  IconFlagSV,
  IconFlagSX,
  IconFlagSY,
  IconFlagSZ,
  IconFlagTC,
  IconFlagTD,
  IconFlagTF,
  IconFlagTG,
  IconFlagTH,
  IconFlagTJ,
  IconFlagTK,
  IconFlagTL,
  IconFlagTM,
  IconFlagTN,
  IconFlagTO,
  IconFlagTR,
  IconFlagTT,
  IconFlagTV,
  IconFlagTW,
  IconFlagTZ,
  IconFlagUA,
  IconFlagUG,
  IconFlagUM,
  IconFlagUS,
  IconFlagUSCA,
  IconFlagUY,
  IconFlagUZ,
  IconFlagVA,
  IconFlagVC,
  IconFlagVE,
  IconFlagVG,
  IconFlagVI,
  IconFlagVN,
  IconFlagVU,
  IconFlagWF,
  IconFlagWS,
  IconFlagXK,
  IconFlagYE,
  IconFlagYT,
  IconFlagZA,
  IconFlagZM,
  IconFlagZW,
  IconFolder,
  IconFolderCheck,
  IconFolderHeart,
  IconFolderLock,
  IconFolderMinus,
  IconFolderOpen,
  IconFolderPin,
  IconFolderPlus,
  IconFolderProhibit,
  IconFolderStar,
  IconFolderX,
  IconFunction,
  IconGantt,
  IconGift,
  IconGitBranch,
  IconGitCommit,
  IconGitDiff,
  IconGitFork,
  IconGitMerge,
  IconGitPr,
  IconGitPrClosed,
  IconGitPrDraft,
  IconGlobe,
  IconGlobeX,
  IconGreaterThan,
  IconGripHorizontal,
  IconGripVertical,
  IconHand,
  IconHandSwipeLeft,
  IconHandSwipeRight,
  IconHandTouch,
  IconHashtag,
  IconHeadphones,
  IconHeart,
  IconHeartFilled,
  IconHeartHalf,
  IconHighDefinition,
  IconHistory,
  IconHouse,
  IconImage,
  IconImagePanoramic,
  IconInfo,
  IconIntersect,
  IconIntersection,
  IconJustice,
  IconKanban,
  IconKey,
  IconKeyBackspace,
  IconKeyCommand,
  IconKeyEnter,
  IconKeyLock,
  IconKeyOption,
  IconKeyShift,
  IconLayers,
  IconLeaf,
  IconLessOrEqualThan,
  IconGreaterOrEqualThan,
  IconLessThan,
  IconLightning,
  IconLike,
  IconLikeFilled,
  IconLink,
  IconListCheck,
  IconListOrdered,
  IconListPlus,
  IconListUnordered,
  IconLock,
  IconLogoAmazon,
  IconLogoAndroid,
  IconLogoApple,
  IconLogoApplePodcast,
  IconLogoAppStore,
  IconLogoBehance,
  IconLogoBoldAfterEffects,
  IconLogoBoldAhrefs,
  IconLogoBoldAmericanExpress,
  IconLogoBoldAstro,
  IconLogoBoldCanva,
  IconLogoBoldCapCut,
  IconLogoBoldClickUp,
  IconLogoBoldCloudflare,
  IconLogoBoldElevenlabs,
  IconLogoBoldExcalidraw,
  IconLogoBoldFigma,
  IconLogoBoldFontshare,
  IconLogoBoldGithub,
  IconLogoBoldGoogle,
  IconLogoBoldGoogleMeet,
  IconLogoBoldGSAP,
  IconLogoBoldHuggingFace,
  IconLogoBoldIllustrator,
  IconLogoBoldInDesign,
  IconLogoBoldInstagram,
  IconLogoBoldLinkedIn,
  IconLogoBoldMastercard,
  IconLogoBoldMotion,
  IconLogoBoldNamecheap,
  IconLogoBoldNetlify,
  IconLogoBoldNextJS,
  IconLogoBoldNotion,
  IconLogoBoldPhosphorIcons,
  IconLogoBoldPhotoshop,
  IconLogoBoldPremierePro,
  IconLogoBoldRadixUI,
  IconLogoBoldResend,
  IconLogoBoldSERanking,
  IconLogoBoldShopify,
  IconLogoBoldStatista,
  IconLogoBoldTailwind,
  IconLogoBoldVercel,
  IconLogoBoldVisa,
  IconLogoBoldWhatsApp,
  IconLogoCodepen,
  IconLogoDiscord,
  IconLogoDribbble,
  IconLogoFacebook,
  IconLogoFigma,
  IconLogoGithub,
  IconLogoGitlab,
  IconLogoGoogle,
  IconLogoGoogleChrome,
  IconLogoGoogleDrive,
  IconLogoGooglePhotos,
  IconLogoInstagram,
  IconLogoLinkedin,
  IconLogoMarkdown,
  IconLogoMedium,
  IconLogoMessenger,
  IconLogoMeta,
  IconLogoMsExcel,
  IconLogoMsPowerPoint,
  IconLogoMsTeams,
  IconLogoMsWord,
  IconLogoOpenAi,
  IconLogoPaypal,
  IconLogoPinterest,
  IconLogoPlayStore,
  IconLogoReddit,
  IconLogoSandbox,
  IconLogoSlack,
  IconLogoSnapchat,
  IconLogoSpotify,
  IconLogoStackOverflow,
  IconLogoStripe,
  IconLogoTelegram,
  IconLogoThreads,
  IconLogoTiktok,
  IconLogoTwitch,
  IconLogoTwitter,
  IconLogoWebhooks,
  IconLogoWhatsapp,
  IconLogoWindows,
  IconLogoX,
  IconLogoYoutube,
  IconMagic,
  IconMail,
  IconMailOpen,
  IconMap,
  IconMapPin,
  IconMapPinArea,
  IconMapPinLine,
  IconMapPinLineArea,
  IconMapPinPlus,
  IconMaths,
  IconMaximize,
  IconMemberOf,
  IconMenu,
  IconMerge,
  IconMicrophone,
  IconMicrophoneOff,
  IconMinimize,
  IconMinus,
  IconMoney,
  IconMoon,
  IconMouse,
  IconMouseLeft,
  IconMouseLeftClick,
  IconMouseMiddle,
  IconMouseRight,
  IconMouseRightClick,
  IconMovie,
  IconMusicNote,
  IconMusicNotes,
  IconNavigation,
  IconNotEqual,
  IconNotes,
  IconNotSubsetOf,
  IconNotSubsetProperOf,
  IconNotSupersetOf,
  IconNotSupersetProperOf,
  IconOrganizationChart,
  IconPanelBottom,
  IconPanelBottomOpen,
  IconPanelLeft,
  IconPanelLeftOpen,
  IconPanelRight,
  IconPanelRightOpen,
  IconPanelsBottom,
  IconPanelsLeft,
  IconPanelsRight,
  IconPanelsTop,
  IconPanelTop,
  IconPanelTopOpen,
  IconPaperClip,
  IconParenthesis,
  IconPause,
  IconPencil,
  IconPercent,
  IconPerspective,
  IconPhone,
  IconPhoneDown,
  IconPhoneIncoming,
  IconPhoneOutcoming,
  IconPhoneSound,
  IconPhoneVibrate,
  IconPi,
  IconPin,
  IconPinOff,
  IconPip,
  IconPipFilled,
  IconPlay,
  IconPlaylist,
  IconPlus,
  IconPlusMinus,
  IconPower,
  IconPresentation,
  IconPrinter,
  IconProhibit,
  IconPuzzle,
  IconQrCode,
  IconQuotesDown,
  IconQuotesUp,
  IconRanking,
  IconReceipt,
  IconRecord,
  IconReload,
  IconResend,
  IconResfresh,
  IconRobot,
  IconRocket,
  IconRotate,
  IconRuler,
  IconSave,
  IconScan,
  IconScreencast,
  IconSearch,
  IconSearchMinus,
  IconSearchPlus,
  IconSeekBackward,
  IconSeekForward,
  IconServer,
  IconSettings,
  IconShapes,
  IconShare,
  IconShield,
  IconShootingStar,
  IconSignalEmpty,
  IconSignalFull,
  IconSignalHigh,
  IconSignalLow,
  IconSignalMedium,
  IconSignalX,
  IconSignature,
  IconSignIn,
  IconSignOut,
  IconSimCard,
  IconSlides,
  IconSmileyAngry,
  IconSmileyBlank,
  IconSmileyBlink,
  IconSmileyHappy,
  IconSmileyNeutral,
  IconSmileySad,
  IconSmileyScan,
  IconSmileySmile,
  IconSortAsc,
  IconSortDesc,
  IconSoundeWave,
  IconSpeakerHigh,
  IconSpeakerOff,
  IconSpeakerSilent,
  IconSpinner,
  IconSplit,
  IconSquareBrackets,
  IconStandardDefinition,
  IconStar,
  IconStarFilled,
  IconStarHalf,
  IconStarSeal,
  IconStickyNote,
  IconStrategy,
  IconSubsetOf,
  IconSubsetProperOf,
  IconSubstract,
  IconSuffle,
  IconSun,
  IconSupersetOf,
  IconSupersetProperOf,
  IconSwatches,
  IconTag,
  IconTeam,
  IconTerminal,
  IconText,
  IconTextAa,
  IconTextAlignCenter,
  IconTextAlignJustify,
  IconTextAlignLeft,
  IconTextAlignRight,
  IconTextBold,
  IconTextClean,
  IconTextHeading,
  IconTextHeading1,
  IconTextHeading2,
  IconTextHeading3,
  IconTextHeading4,
  IconTextHeading5,
  IconTextHeading6,
  IconTextIndent,
  IconTextItalic,
  IconTextLowecase,
  IconTextOff,
  IconTextOutdent,
  IconTextTracking,
  IconTextTwoColumns,
  IconTextUnderline,
  IconTextUppercase,
  IconTicket,
  IconTilde,
  IconTool,
  IconTranslate,
  IconTrash,
  IconTree,
  IconTreeView,
  IconTrendDown,
  IconTrendUp,
  IconTrophie,
  IconUnion,
  IconUnite,
  IconUnlink,
  IconUnlock,
  IconUpload,
  IconUser,
  IconUserCheck,
  IconUserHeart,
  IconUserMinus,
  IconUserPlus,
  IconUserProhibit,
  IconUsers,
  IconUserScan,
  IconUserSettings,
  IconUsersPlus,
  IconUserStar,
  IconUserX,
  IconVideo,
  IconVideoFilled,
  IconVideoOff,
  IconWarningCircle,
  IconWarningDiamond,
  IconWarningOctagon,
  IconWarningTriangle,
  IconWaves,
  IconWaveSawtooth,
  IconWaveSine,
  IconWaveSquare,
  IconWaveTriangle,
  IconWebcam,
  IconX,
  IconZip,
} from '../../components/icons'

const meta = preview.meta({
  title: 'Foundations/Icons',

  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '+500 Custom Duotone icons',
      },
    },
  },

  tags: ['autodocs'],
})

export const Base = meta.story({
  render: () => (
    <div className='flex flex-col gap-10'>
      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Arrows</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconArrowDown'>
            <IconArrowDown />
          </div>
          <div title='IconArrowLeft'>
            <IconArrowLeft />
          </div>
          <div title='IconArrowRight'>
            <IconArrowRight />
          </div>
          <div title='IconArrowUp'>
            <IconArrowUp />
          </div>
          <div title='IconArrowUDown'>
            <IconArrowUDown />
          </div>
          <div title='IconArrowULeft'>
            <IconArrowULeft />
          </div>
          <div title='IconArrowURight'>
            <IconArrowURight />
          </div>
          <div title='IconArrowUUp'>
            <IconArrowUUp />
          </div>
          <div title='IconArrowsAllDirections'>
            <IconArrowsAllDirections />
          </div>
          <div title='IconArrowsContract'>
            <IconArrowsContract />
          </div>
          <div title='IconArrowsDiagonalLeft'>
            <IconArrowsDiagonalLeft />
          </div>
          <div title='IconArrowsDiagonalRight'>
            <IconArrowsDiagonalRight />
          </div>
          <div title='IconArrowsExpand'>
            <IconArrowsExpand />
          </div>
          <div title='IconArrowsHorizontal'>
            <IconArrowsHorizontal />
          </div>
          <div title='IconArrowsLeftRight'>
            <IconArrowsLeftRight />
          </div>
          <div title='IconArrowsUpDown'>
            <IconArrowsUpDown />
          </div>
          <div title='IconArrowsVertical'>
            <IconArrowsVertical />
          </div>
          <div title='IconExternalLink'>
            <IconExternalLink />
          </div>
          <div title='IconMerge'>
            <IconMerge />
          </div>
          <div title='IconSplit'>
            <IconSplit />
          </div>
          <div title='IconTrendDown'>
            <IconTrendDown />
          </div>
          <div title='IconTrendUp'>
            <IconTrendUp />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Chevrons</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconChevronDown'>
            <IconChevronDown />
          </div>
          <div title='IconChevronDownDouble'>
            <IconChevronDownDouble />
          </div>
          <div title='IconChevronLeft'>
            <IconChevronLeft />
          </div>
          <div title='IconChevronLeftDouble'>
            <IconChevronLeftDouble />
          </div>
          <div title='IconChevronRight'>
            <IconChevronRight />
          </div>
          <div title='IconChevronRightDouble'>
            <IconChevronRightDouble />
          </div>
          <div title='IconChevronUp'>
            <IconChevronUp />
          </div>
          <div title='IconChevronUpDouble'>
            <IconChevronUpDouble />
          </div>
          <div title='IconChevronUpDown'>
            <IconChevronUpDown />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Alignment</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconAlignBottom'>
            <IconAlignBottom />
          </div>
          <div title='IconAlignCenterHorizontal'>
            <IconAlignCenterHorizontal />
          </div>
          <div title='IconAlignCenterVertical'>
            <IconAlignCenterVertical />
          </div>
          <div title='IconAlignHorizontally'>
            <IconAlignHorizontally />
          </div>
          <div title='IconAlignLeft'>
            <IconAlignLeft />
          </div>
          <div title='IconAlignRight'>
            <IconAlignRight />
          </div>
          <div title='IconAlignTop'>
            <IconAlignTop />
          </div>
          <div title='IconAlignVertically'>
            <IconAlignVertically />
          </div>
          <div title='IconSortAsc'>
            <IconSortAsc />
          </div>
          <div title='IconSortDesc'>
            <IconSortDesc />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Layout & Panels</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconAppWindow'>
            <IconAppWindow />
          </div>
          <div title='IconCollapse'>
            <IconCollapse />
          </div>
          <div title='IconContract'>
            <IconContract />
          </div>
          <div title='IconDashboard'>
            <IconDashboard />
          </div>
          <div title='IconGripHorizontal'>
            <IconGripHorizontal />
          </div>
          <div title='IconGripVertical'>
            <IconGripVertical />
          </div>
          <div title='IconKanban'>
            <IconKanban />
          </div>
          <div title='IconLayers'>
            <IconLayers />
          </div>
          <div title='IconMaximize'>
            <IconMaximize />
          </div>
          <div title='IconMenu'>
            <IconMenu />
          </div>
          <div title='IconMinimize'>
            <IconMinimize />
          </div>
          <div title='IconOrganizationChart'>
            <IconOrganizationChart />
          </div>
          <div title='IconPanelBottom'>
            <IconPanelBottom />
          </div>
          <div title='IconPanelBottomOpen'>
            <IconPanelBottomOpen />
          </div>
          <div title='IconPanelLeft'>
            <IconPanelLeft />
          </div>
          <div title='IconPanelLeftOpen'>
            <IconPanelLeftOpen />
          </div>
          <div title='IconPanelRight'>
            <IconPanelRight />
          </div>
          <div title='IconPanelRightOpen'>
            <IconPanelRightOpen />
          </div>
          <div title='IconPanelTop'>
            <IconPanelTop />
          </div>
          <div title='IconPanelTopOpen'>
            <IconPanelTopOpen />
          </div>
          <div title='IconPanelsBottom'>
            <IconPanelsBottom />
          </div>
          <div title='IconPanelsLeft'>
            <IconPanelsLeft />
          </div>
          <div title='IconPanelsRight'>
            <IconPanelsRight />
          </div>
          <div title='IconPanelsTop'>
            <IconPanelsTop />
          </div>
          <div title='IconPerspective'>
            <IconPerspective />
          </div>
          <div title='IconPip'>
            <IconPip />
          </div>
          <div title='IconPipFilled'>
            <IconPipFilled />
          </div>
          <div title='IconSplit'>
            <IconSplit />
          </div>
          <div title='IconTreeView'>
            <IconTreeView />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Typography & Text
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconText'>
            <IconText />
          </div>
          <div title='IconTextAa'>
            <IconTextAa />
          </div>
          <div title='IconTextAlignCenter'>
            <IconTextAlignCenter />
          </div>
          <div title='IconTextAlignJustify'>
            <IconTextAlignJustify />
          </div>
          <div title='IconTextAlignLeft'>
            <IconTextAlignLeft />
          </div>
          <div title='IconTextAlignRight'>
            <IconTextAlignRight />
          </div>
          <div title='IconTextBold'>
            <IconTextBold />
          </div>
          <div title='IconTextClean'>
            <IconTextClean />
          </div>
          <div title='IconTextHeading'>
            <IconTextHeading />
          </div>
          <div title='IconTextHeading1'>
            <IconTextHeading1 />
          </div>
          <div title='IconTextHeading2'>
            <IconTextHeading2 />
          </div>
          <div title='IconTextHeading3'>
            <IconTextHeading3 />
          </div>
          <div title='IconTextHeading4'>
            <IconTextHeading4 />
          </div>
          <div title='IconTextHeading5'>
            <IconTextHeading5 />
          </div>
          <div title='IconTextHeading6'>
            <IconTextHeading6 />
          </div>
          <div title='IconTextIndent'>
            <IconTextIndent />
          </div>
          <div title='IconTextItalic'>
            <IconTextItalic />
          </div>
          <div title='IconTextLowecase'>
            <IconTextLowecase />
          </div>
          <div title='IconTextOff'>
            <IconTextOff />
          </div>
          <div title='IconTextOutdent'>
            <IconTextOutdent />
          </div>
          <div title='IconTextTracking'>
            <IconTextTracking />
          </div>
          <div title='IconTextTwoColumns'>
            <IconTextTwoColumns />
          </div>
          <div title='IconTextUnderline'>
            <IconTextUnderline />
          </div>
          <div title='IconTextUppercase'>
            <IconTextUppercase />
          </div>
          <div title='IconTranslate'>
            <IconTranslate />
          </div>
          <div title='IconQuotesDown'>
            <IconQuotesDown />
          </div>
          <div title='IconQuotesUp'>
            <IconQuotesUp />
          </div>
          <div title='IconBinary'>
            <IconBinary />
          </div>
          <div title='IconHashtag'>
            <IconHashtag />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Shapes & Design</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBezier'>
            <IconBezier />
          </div>
          <div title='IconBoundingBox'>
            <IconBoundingBox />
          </div>
          <div title='IconCircle'>
            <IconCircle />
          </div>
          <div title='IconCircleFilled'>
            <IconCircleFilled />
          </div>
          <div title='IconCircleHalfHorizontal'>
            <IconCircleHalfHorizontal />
          </div>
          <div title='IconCircleHalfVertical'>
            <IconCircleHalfVertical />
          </div>
          <div title='IconColors'>
            <IconColors />
          </div>
          <div title='IconCrop'>
            <IconCrop />
          </div>
          <div title='IconCube'>
            <IconCube />
          </div>
          <div title='IconDiamond'>
            <IconDiamond />
          </div>
          <div title='IconExclude'>
            <IconExclude />
          </div>
          <div title='IconIntersect'>
            <IconIntersect />
          </div>
          <div title='IconLayers'>
            <IconLayers />
          </div>
          <div title='IconPerspective'>
            <IconPerspective />
          </div>
          <div title='IconRotate'>
            <IconRotate />
          </div>
          <div title='IconRuler'>
            <IconRuler />
          </div>
          <div title='IconShapes'>
            <IconShapes />
          </div>
          <div title='IconSwatches'>
            <IconSwatches />
          </div>

          <div title='IconUnite'>
            <IconUnite />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Files & Folders</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconArchive'>
            <IconArchive />
          </div>
          <div title='IconArchiveIn'>
            <IconArchiveIn />
          </div>
          <div title='IconArchiveOut'>
            <IconArchiveOut />
          </div>
          <div title='IconClipboard'>
            <IconClipboard />
          </div>
          <div title='IconCopy'>
            <IconCopy />
          </div>
          <div title='IconFile'>
            <IconFile />
          </div>
          <div title='IconFileGif'>
            <IconFileGif />
          </div>
          <div title='IconFilePdf'>
            <IconFilePdf />
          </div>
          <div title='IconFiles'>
            <IconFiles />
          </div>
          <div title='IconFileTxt'>
            <IconFileTxt />
          </div>
          <div title='IconFolder'>
            <IconFolder />
          </div>
          <div title='IconFolderCheck'>
            <IconFolderCheck />
          </div>
          <div title='IconFolderHeart'>
            <IconFolderHeart />
          </div>
          <div title='IconFolderLock'>
            <IconFolderLock />
          </div>
          <div title='IconFolderMinus'>
            <IconFolderMinus />
          </div>
          <div title='IconFolderOpen'>
            <IconFolderOpen />
          </div>
          <div title='IconFolderPin'>
            <IconFolderPin />
          </div>
          <div title='IconFolderPlus'>
            <IconFolderPlus />
          </div>
          <div title='IconFolderProhibit'>
            <IconFolderProhibit />
          </div>
          <div title='IconFolderStar'>
            <IconFolderStar />
          </div>
          <div title='IconFolderX'>
            <IconFolderX />
          </div>
          <div title='IconNotes'>
            <IconNotes />
          </div>
          <div title='IconPaperClip'>
            <IconPaperClip />
          </div>
          <div title='IconSave'>
            <IconSave />
          </div>
          <div title='IconStickyNote'>
            <IconStickyNote />
          </div>
          <div title='IconTrash'>
            <IconTrash />
          </div>
          <div title='IconZip'>
            <IconZip />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Media & Audio</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='Icon4k'>
            <Icon4k />
          </div>
          <div title='IconAirplay'>
            <IconAirplay />
          </div>
          <div title='IconCamera'>
            <IconCamera />
          </div>
          <div title='IconCameraOff'>
            <IconCameraOff />
          </div>
          <div title='IconClosedCaptioning'>
            <IconClosedCaptioning />
          </div>
          <div title='IconClosedCaptioningFilled'>
            <IconClosedCaptioningFilled />
          </div>
          <div title='IconHeadphones'>
            <IconHeadphones />
          </div>
          <div title='IconHighDefinition'>
            <IconHighDefinition />
          </div>
          <div title='IconImage'>
            <IconImage />
          </div>
          <div title='IconImagePanoramic'>
            <IconImagePanoramic />
          </div>
          <div title='IconMicrophone'>
            <IconMicrophone />
          </div>
          <div title='IconMicrophoneOff'>
            <IconMicrophoneOff />
          </div>
          <div title='IconMovie'>
            <IconMovie />
          </div>
          <div title='IconMusicNote'>
            <IconMusicNote />
          </div>
          <div title='IconMusicNotes'>
            <IconMusicNotes />
          </div>
          <div title='IconPause'>
            <IconPause />
          </div>
          <div title='IconPlay'>
            <IconPlay />
          </div>
          <div title='IconPlaylist'>
            <IconPlaylist />
          </div>
          <div title='IconRecord'>
            <IconRecord />
          </div>
          <div title='IconScreencast'>
            <IconScreencast />
          </div>
          <div title='IconSeekBackward'>
            <IconSeekBackward />
          </div>
          <div title='IconSeekForward'>
            <IconSeekForward />
          </div>
          <div title='IconSlides'>
            <IconSlides />
          </div>
          <div title='IconSoundeWave'>
            <IconSoundeWave />
          </div>
          <div title='IconSpeakerHigh'>
            <IconSpeakerHigh />
          </div>
          <div title='IconSpeakerOff'>
            <IconSpeakerOff />
          </div>
          <div title='IconSpeakerSilent'>
            <IconSpeakerSilent />
          </div>
          <div title='IconStandardDefinition'>
            <IconStandardDefinition />
          </div>
          <div title='IconSuffle'>
            <IconSuffle />
          </div>
          <div title='IconVideo'>
            <IconVideo />
          </div>
          <div title='IconVideoFilled'>
            <IconVideoFilled />
          </div>
          <div title='IconVideoOff'>
            <IconVideoOff />
          </div>
          <div title='IconWebcam'>
            <IconWebcam />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Waves & Signals</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBroadcast'>
            <IconBroadcast />
          </div>
          <div title='IconSignalEmpty'>
            <IconSignalEmpty />
          </div>
          <div title='IconSignalFull'>
            <IconSignalFull />
          </div>
          <div title='IconSignalHigh'>
            <IconSignalHigh />
          </div>
          <div title='IconSignalLow'>
            <IconSignalLow />
          </div>
          <div title='IconSignalMedium'>
            <IconSignalMedium />
          </div>
          <div title='IconSignalX'>
            <IconSignalX />
          </div>
          <div title='IconSimCard'>
            <IconSimCard />
          </div>
          <div title='IconWaveSawtooth'>
            <IconWaveSawtooth />
          </div>
          <div title='IconWaveSine'>
            <IconWaveSine />
          </div>
          <div title='IconWaveSquare'>
            <IconWaveSquare />
          </div>
          <div title='IconWaves'>
            <IconWaves />
          </div>
          <div title='IconWaveTriangle'>
            <IconWaveTriangle />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Communication</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconAt'>
            <IconAt />
          </div>
          <div title='IconBell'>
            <IconBell />
          </div>
          <div title='IconBellOff'>
            <IconBellOff />
          </div>
          <div title='IconBellOn'>
            <IconBellOn />
          </div>
          <div title='IconBellSilent'>
            <IconBellSilent />
          </div>
          <div title='IconChat'>
            <IconChat />
          </div>
          <div title='IconChatMinus'>
            <IconChatMinus />
          </div>
          <div title='IconChatOff'>
            <IconChatOff />
          </div>
          <div title='IconChatPlus'>
            <IconChatPlus />
          </div>
          <div title='IconChats'>
            <IconChats />
          </div>
          <div title='IconContacts'>
            <IconContacts />
          </div>
          <div title='IconMail'>
            <IconMail />
          </div>
          <div title='IconMailOpen'>
            <IconMailOpen />
          </div>
          <div title='IconResend'>
            <IconResend />
          </div>
          <div title='IconShare'>
            <IconShare />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Phone</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconPhone'>
            <IconPhone />
          </div>
          <div title='IconPhoneDown'>
            <IconPhoneDown />
          </div>
          <div title='IconPhoneIncoming'>
            <IconPhoneIncoming />
          </div>
          <div title='IconPhoneOutcoming'>
            <IconPhoneOutcoming />
          </div>
          <div title='IconPhoneSound'>
            <IconPhoneSound />
          </div>
          <div title='IconPhoneVibrate'>
            <IconPhoneVibrate />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Devices</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconCpu'>
            <IconCpu />
          </div>
          <div title='IconDatabase'>
            <IconDatabase />
          </div>
          <div title='IconDeviceLaptop'>
            <IconDeviceLaptop />
          </div>
          <div title='IconDevicePc'>
            <IconDevicePc />
          </div>
          <div title='IconDevicePhone'>
            <IconDevicePhone />
          </div>
          <div title='IconDevices'>
            <IconDevices />
          </div>
          <div title='IconDeviceTablet'>
            <IconDeviceTablet />
          </div>
          <div title='IconDeviceTv'>
            <IconDeviceTv />
          </div>
          <div title='IconPrinter'>
            <IconPrinter />
          </div>
          <div title='IconQrCode'>
            <IconQrCode />
          </div>
          <div title='IconScan'>
            <IconScan />
          </div>
          <div title='IconServer'>
            <IconServer />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Input & Cursor</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconCursor'>
            <IconCursor />
          </div>
          <div title='IconCursorClick'>
            <IconCursorClick />
          </div>
          <div title='IconCursorText'>
            <IconCursorText />
          </div>
          <div title='IconFingerprint'>
            <IconFingerprint />
          </div>
          <div title='IconHand'>
            <IconHand />
          </div>
          <div title='IconHandSwipeLeft'>
            <IconHandSwipeLeft />
          </div>
          <div title='IconHandSwipeRight'>
            <IconHandSwipeRight />
          </div>
          <div title='IconHandTouch'>
            <IconHandTouch />
          </div>
          <div title='IconKeyBackspace'>
            <IconKeyBackspace />
          </div>
          <div title='IconKeyCommand'>
            <IconKeyCommand />
          </div>
          <div title='IconKeyEnter'>
            <IconKeyEnter />
          </div>
          <div title='IconKeyOption'>
            <IconKeyOption />
          </div>
          <div title='IconKeyShift'>
            <IconKeyShift />
          </div>
          <div title='IconMouse'>
            <IconMouse />
          </div>
          <div title='IconMouseLeft'>
            <IconMouseLeft />
          </div>
          <div title='IconMouseLeftClick'>
            <IconMouseLeftClick />
          </div>
          <div title='IconMouseMiddle'>
            <IconMouseMiddle />
          </div>
          <div title='IconMouseRight'>
            <IconMouseRight />
          </div>
          <div title='IconMouseRightClick'>
            <IconMouseRightClick />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Security</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBarricade'>
            <IconBarricade />
          </div>
          <div title='IconFingerprint'>
            <IconFingerprint />
          </div>
          <div title='IconKey'>
            <IconKey />
          </div>
          <div title='IconKeyLock'>
            <IconKeyLock />
          </div>
          <div title='IconLock'>
            <IconLock />
          </div>
          <div title='IconFolderLock'>
            <IconFolderLock />
          </div>
          <div title='IconProhibit'>
            <IconProhibit />
          </div>
          <div title='IconShield'>
            <IconShield />
          </div>
          <div title='IconSignIn'>
            <IconSignIn />
          </div>
          <div title='IconSignOut'>
            <IconSignOut />
          </div>
          <div title='IconUnlock'>
            <IconUnlock />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Users & People</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconAccessibility'>
            <IconAccessibility />
          </div>
          <div title='IconContacts'>
            <IconContacts />
          </div>
          <div title='IconTeam'>
            <IconTeam />
          </div>
          <div title='IconUser'>
            <IconUser />
          </div>
          <div title='IconUserCheck'>
            <IconUserCheck />
          </div>
          <div title='IconUserHeart'>
            <IconUserHeart />
          </div>
          <div title='IconUserMinus'>
            <IconUserMinus />
          </div>
          <div title='IconUserPlus'>
            <IconUserPlus />
          </div>
          <div title='IconUserProhibit'>
            <IconUserProhibit />
          </div>
          <div title='IconUserScan'>
            <IconUserScan />
          </div>
          <div title='IconUserSettings'>
            <IconUserSettings />
          </div>
          <div title='IconUserStar'>
            <IconUserStar />
          </div>
          <div title='IconUserX'>
            <IconUserX />
          </div>
          <div title='IconUsers'>
            <IconUsers />
          </div>
          <div title='IconUsersPlus'>
            <IconUsersPlus />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Finance & Commerce
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBank'>
            <IconBank />
          </div>
          <div title='IconBankNote'>
            <IconBankNote />
          </div>
          <div title='IconBarcode'>
            <IconBarcode />
          </div>
          <div title='IconCoin'>
            <IconCoin />
          </div>
          <div title='IconCoins'>
            <IconCoins />
          </div>
          <div title='IconContactlessPay'>
            <IconContactlessPay />
          </div>
          <div title='IconCreditCard'>
            <IconCreditCard />
          </div>
          <div title='IconCurrencyBtc'>
            <IconCurrencyBtc />
          </div>
          <div title='IconCurrencyCny'>
            <IconCurrencyCny />
          </div>
          <div title='IconCurrencyEth'>
            <IconCurrencyEth />
          </div>
          <div title='IconCurrencyEur'>
            <IconCurrencyEur />
          </div>
          <div title='IconCurrencyGbp'>
            <IconCurrencyGbp />
          </div>
          <div title='IconCurrencyGtq'>
            <IconCurrencyGtq />
          </div>
          <div title='IconCurrencyInr'>
            <IconCurrencyInr />
          </div>
          <div title='IconCurrencyJpy'>
            <IconCurrencyJpy />
          </div>
          <div title='IconCurrencyKrw'>
            <IconCurrencyKrw />
          </div>
          <div title='IconCurrencyKzt'>
            <IconCurrencyKzt />
          </div>
          <div title='IconCurrencyMxn'>
            <IconCurrencyMxn />
          </div>
          <div title='IconCurrencyNgn'>
            <IconCurrencyNgn />
          </div>
          <div title='IconCurrencyRub'>
            <IconCurrencyRub />
          </div>
          <div title='IconCurrencyUsd'>
            <IconCurrencyUsd />
          </div>
          <div title='IconMoney'>
            <IconMoney />
          </div>
          <div title='IconPercent'>
            <IconPercent />
          </div>
          <div title='IconReceipt'>
            <IconReceipt />
          </div>
          <div title='IconTicket'>
            <IconTicket />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Calendar & Time</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconAlarm'>
            <IconAlarm />
          </div>
          <div title='IconCalendar'>
            <IconCalendar />
          </div>
          <div title='IconCalendarCheck'>
            <IconCalendarCheck />
          </div>
          <div title='IconCalendarHeart'>
            <IconCalendarHeart />
          </div>
          <div title='IconCalendarMinus'>
            <IconCalendarMinus />
          </div>
          <div title='IconCalendarOff'>
            <IconCalendarOff />
          </div>
          <div title='IconCalendarPlus'>
            <IconCalendarPlus />
          </div>
          <div title='IconCalendarStar'>
            <IconCalendarStar />
          </div>
          <div title='IconCalendarTime'>
            <IconCalendarTime />
          </div>
          <div title='IconCalendarX'>
            <IconCalendarX />
          </div>
          <div title='IconClock'>
            <IconClock />
          </div>
          <div title='IconHistory'>
            <IconHistory />
          </div>
          <div title='IconTimer'>
            <IconSpinner />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Charts & Analytics
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconChartBarHorizontal'>
            <IconChartBarHorizontal />
          </div>
          <div title='IconChartBarVertical'>
            <IconChartBarVertical />
          </div>
          <div title='IconChartCombined'>
            <IconChartCombined />
          </div>
          <div title='IconChartLineDown'>
            <IconChartLineDown />
          </div>
          <div title='IconChartLineUp'>
            <IconChartLineUp />
          </div>
          <div title='IconChartPie'>
            <IconChartPie />
          </div>
          <div title='IconChartScatter'>
            <IconChartScatter />
          </div>
          <div title='IconGantt'>
            <IconGantt />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Navigation & Maps
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconEarth'>
            <IconEarth />
          </div>
          <div title='IconGlobe'>
            <IconGlobe />
          </div>
          <div title='IconGlobeX'>
            <IconGlobeX />
          </div>
          <div title='IconHouse'>
            <IconHouse />
          </div>
          <div title='IconMap'>
            <IconMap />
          </div>
          <div title='IconMapPin'>
            <IconMapPin />
          </div>
          <div title='IconMapPinArea'>
            <IconMapPinArea />
          </div>
          <div title='IconMapPinLine'>
            <IconMapPinLine />
          </div>
          <div title='IconMapPinLineArea'>
            <IconMapPinLineArea />
          </div>
          <div title='IconMapPinPlus'>
            <IconMapPinPlus />
          </div>
          <div title='IconNavigation'>
            <IconNavigation />
          </div>
          <div title='IconPin'>
            <IconPin />
          </div>
          <div title='IconPinOff'>
            <IconPinOff />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Development & Code
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBrackets'>
            <IconBrackets />
          </div>
          <div title='IconBrowser'>
            <IconBrowser />
          </div>
          <div title='IconBrowsers'>
            <IconBrowsers />
          </div>
          <div title='IconCode'>
            <IconCode />
          </div>
          <div title='IconDatabase'>
            <IconDatabase />
          </div>
          <div title='IconFunction'>
            <IconFunction />
          </div>
          <div title='IconGitBranch'>
            <IconGitBranch />
          </div>
          <div title='IconGitCommit'>
            <IconGitCommit />
          </div>
          <div title='IconGitDiff'>
            <IconGitDiff />
          </div>
          <div title='IconGitFork'>
            <IconGitFork />
          </div>
          <div title='IconGitMerge'>
            <IconGitMerge />
          </div>
          <div title='IconGitPr'>
            <IconGitPr />
          </div>
          <div title='IconGitPrClosed'>
            <IconGitPrClosed />
          </div>
          <div title='IconGitPrDraft'>
            <IconGitPrDraft />
          </div>
          <div title='IconParenthesis'>
            <IconParenthesis />
          </div>
          <div title='IconServer'>
            <IconServer />
          </div>
          <div title='IconSquareBrackets'>
            <IconSquareBrackets />
          </div>
          <div title='IconTerminal'>
            <IconTerminal />
          </div>
          <div title='IconTilde'>
            <IconTilde />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Mathematics & Logic
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconApproximate'>
            <IconApproximate />
          </div>
          <div title='IconAsterisk'>
            <IconAsterisk />
          </div>
          <div title='IconDivide'>
            <IconDivide />
          </div>
          <div title='IconEqual'>
            <IconEqual />
          </div>
          <div title='IconGreaterThan'>
            <IconGreaterThan />
          </div>
          <div title='IconLessThan'>
            <IconLessThan />
          </div>
          <div title='IconLessOrEqualThan'>
            <IconLessOrEqualThan />
          </div>
          <div title='IconGreaterOrEqualThan'>
            <IconGreaterOrEqualThan />
          </div>
          <div title='IconMaths'>
            <IconMaths />
          </div>
          <div title='IconMemberOf'>
            <IconMemberOf />
          </div>
          <div title='IconX'>
            <IconX />
          </div>
          <div title='IconMinus'>
            <IconMinus />
          </div>
          <div title='IconNotEqual'>
            <IconNotEqual />
          </div>
          <div title='IconNotSubsetOf'>
            <IconNotSubsetOf />
          </div>
          <div title='IconNotSubsetProperOf'>
            <IconNotSubsetProperOf />
          </div>
          <div title='IconNotSupersetOf'>
            <IconNotSupersetOf />
          </div>
          <div title='IconNotSupersetProperOf'>
            <IconNotSupersetProperOf />
          </div>
          <div title='IconPi'>
            <IconPi />
          </div>
          <div title='IconPlus'>
            <IconPlus />
          </div>
          <div title='IconPlusMinus'>
            <IconPlusMinus />
          </div>
          <div title='IconSubsetOf'>
            <IconSubsetOf />
          </div>
          <div title='IconSubsetProperOf'>
            <IconSubsetProperOf />
          </div>
          <div title='IconSubstract'>
            <IconSubstract />
          </div>
          <div title='IconSupersetOf'>
            <IconSupersetOf />
          </div>
          <div title='IconSupersetProperOf'>
            <IconSupersetProperOf />
          </div>
          <div title='IconUnion'>
            <IconUnion />
          </div>
          <div title='IconIntersection'>
            <IconIntersection />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Battery & Power</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBattery'>
            <IconBattery />
          </div>
          <div title='IconBatteryEmpty'>
            <IconBatteryEmpty />
          </div>
          <div title='IconBatteryFull'>
            <IconBatteryFull />
          </div>
          <div title='IconBatteryHigh'>
            <IconBatteryHigh />
          </div>
          <div title='IconBatteryMedium'>
            <IconBatteryMedium />
          </div>
          <div title='IconCharging'>
            <IconCharging />
          </div>
          <div title='IconLightning'>
            <IconLightning />
          </div>
          <div title='IconPower'>
            <IconPower />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Editing & Actions
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconCheck'>
            <IconCheck />
          </div>
          <div title='IconCheckDouble'>
            <IconCheckDouble />
          </div>
          <div title='IconEdit'>
            <IconEdit />
          </div>
          <div title='IconFilter'>
            <IconFilter />
          </div>
          <div title='IconFilterX'>
            <IconFilterX />
          </div>
          <div title='IconLink'>
            <IconLink />
          </div>
          <div title='IconUnlink'>
            <IconUnlink />
          </div>
          <div title='IconMagic'>
            <IconMagic />
          </div>
          <div title='IconPencil'>
            <IconPencil />
          </div>
          <div title='IconProhibit'>
            <IconProhibit />
          </div>
          <div title='IconReload'>
            <IconReload />
          </div>
          <div title='IconResfresh'>
            <IconResfresh />
          </div>
          <div title='IconRotate'>
            <IconRotate />
          </div>
          <div title='IconSearch'>
            <IconSearch />
          </div>
          <div title='IconSearchMinus'>
            <IconSearchMinus />
          </div>
          <div title='IconSearchPlus'>
            <IconSearchPlus />
          </div>
          <div title='IconSettings'>
            <IconSettings />
          </div>
          <div title='IconTrash'>
            <IconTrash />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Upload & Download
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconCloud'>
            <IconCloud />
          </div>
          <div title='IconCloudDownload'>
            <IconCloudDownload />
          </div>
          <div title='IconCloudUpload'>
            <IconCloudUpload />
          </div>
          <div title='IconDownload'>
            <IconDownload />
          </div>
          <div title='IconUpload'>
            <IconUpload />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Lists & Organization
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBox'>
            <IconBox />
          </div>
          <div title='IconBoxes'>
            <IconBoxes />
          </div>
          <div title='IconDotsHorizontal'>
            <IconDotsHorizontal />
          </div>
          <div title='IconDotsVertical'>
            <IconDotsVertical />
          </div>
          <div title='IconKanban'>
            <IconKanban />
          </div>
          <div title='IconListCheck'>
            <IconListCheck />
          </div>
          <div title='IconListOrdered'>
            <IconListOrdered />
          </div>
          <div title='IconListPlus'>
            <IconListPlus />
          </div>
          <div title='IconListUnordered'>
            <IconListUnordered />
          </div>
          <div title='IconStrategy'>
            <IconStrategy />
          </div>
          <div title='IconTag'>
            <IconTag />
          </div>
          <div title='IconTree'>
            <IconTree />
          </div>
          <div title='IconTreeView'>
            <IconTreeView />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Emojis & Reactions
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconDislike'>
            <IconDislike />
          </div>
          <div title='IconDislikeFilled'>
            <IconDislikeFilled />
          </div>
          <div title='IconHeart'>
            <IconHeart />
          </div>
          <div title='IconHeartFilled'>
            <IconHeartFilled />
          </div>
          <div title='IconHeartHalf'>
            <IconHeartHalf />
          </div>
          <div title='IconLike'>
            <IconLike />
          </div>
          <div title='IconLikeFilled'>
            <IconLikeFilled />
          </div>
          <div title='IconSmileyAngry'>
            <IconSmileyAngry />
          </div>
          <div title='IconSmileyBlank'>
            <IconSmileyBlank />
          </div>
          <div title='IconSmileyBlink'>
            <IconSmileyBlink />
          </div>
          <div title='IconSmileyHappy'>
            <IconSmileyHappy />
          </div>
          <div title='IconSmileyNeutral'>
            <IconSmileyNeutral />
          </div>
          <div title='IconSmileySad'>
            <IconSmileySad />
          </div>
          <div title='IconSmileyScan'>
            <IconSmileyScan />
          </div>
          <div title='IconSmileySmile'>
            <IconSmileySmile />
          </div>
          <div title='IconConfetti'>
            <IconConfetti />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Nature & Weather
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconLeaf'>
            <IconLeaf />
          </div>
          <div title='IconMoon'>
            <IconMoon />
          </div>
          <div title='IconShootingStar'>
            <IconShootingStar />
          </div>
          <div title='IconSun'>
            <IconSun />
          </div>
          <div title='IconTree'>
            <IconTree />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Warnings & Status
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconInfo'>
            <IconInfo />
          </div>
          <div title='IconSpinner'>
            <IconSpinner />
          </div>
          <div title='IconWarningCircle'>
            <IconWarningCircle />
          </div>
          <div title='IconWarningDiamond'>
            <IconWarningDiamond />
          </div>
          <div title='IconWarningOctagon'>
            <IconWarningOctagon />
          </div>
          <div title='IconWarningTriangle'>
            <IconWarningTriangle />
          </div>
          <div title='IconX'>
            <IconX />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>
          Stars, Awards & Ratings
        </span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBookmark'>
            <IconBookmark />
          </div>
          <div title='IconBookmarks'>
            <IconBookmarks />
          </div>
          <div title='IconFlag'>
            <IconFlag />
          </div>
          <div title='IconRanking'>
            <IconRanking />
          </div>
          <div title='IconStar'>
            <IconStar />
          </div>
          <div title='IconStarFilled'>
            <IconStarFilled />
          </div>
          <div title='IconStarHalf'>
            <IconStarHalf />
          </div>
          <div title='IconStarSeal'>
            <IconStarSeal />
          </div>
          <div title='IconTrophie'>
            <IconTrophie />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Business & Work</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBriefcase'>
            <IconBriefcase />
          </div>
          <div title='IconBuilding'>
            <IconBuilding />
          </div>
          <div title='IconBuildings'>
            <IconBuildings />
          </div>
          <div title='IconChalkboard'>
            <IconChalkboard />
          </div>
          <div title='IconContract'>
            <IconContract />
          </div>
          <div title='IconControls'>
            <IconControls />
          </div>
          <div title='IconExperiment'>
            <IconExperiment />
          </div>
          <div title='IconJustice'>
            <IconJustice />
          </div>
          <div title='IconPresentation'>
            <IconPresentation />
          </div>
          <div title='IconPuzzle'>
            <IconPuzzle />
          </div>
          <div title='IconRocket'>
            <IconRocket />
          </div>
          <div title='IconSignature'>
            <IconSignature />
          </div>
          <div title='IconStrategy'>
            <IconStrategy />
          </div>
          <div title='IconTool'>
            <IconTool />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Books & Reading</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBook'>
            <IconBook />
          </div>
          <div title='IconBookBookmark'>
            <IconBookBookmark />
          </div>
          <div title='IconBookmark'>
            <IconBookmark />
          </div>
          <div title='IconBookmarks'>
            <IconBookmarks />
          </div>
          <div title='IconBookOpen'>
            <IconBookOpen />
          </div>
          <div title='IconNotes'>
            <IconNotes />
          </div>
        </div>
      </div>

      <div>
        <span className='text-secondary text-label-base mb-3 block font-mono'>Miscellaneous</span>
        <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center gap-4'>
          <div title='IconBarricade'>
            <IconBarricade />
          </div>
          <div title='IconCoffee'>
            <IconCoffee />
          </div>
          <div title='IconCookie'>
            <IconCookie />
          </div>
          <div title='IconEye'>
            <IconEye />
          </div>
          <div title='IconEyeOff'>
            <IconEyeOff />
          </div>
          <div title='IconFirstAid'>
            <IconFirstAid />
          </div>
          <div title='IconGift'>
            <IconGift />
          </div>
          <div title='IconHistory'>
            <IconHistory />
          </div>
          <div title='IconMagic'>
            <IconMagic />
          </div>
          <div title='IconPaperClip'>
            <IconPaperClip />
          </div>
          <div title='IconRobot'>
            <IconRobot />
          </div>
          <div title='IconScan'>
            <IconScan />
          </div>
        </div>
      </div>
    </div>
  ),
})

export const Brands = meta.story({
  render: () => (
    <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center justify-center gap-4'>
      <div title='IconLogoAmazon'>
        <IconLogoAmazon />
      </div>
      <div title='IconLogoAndroid'>
        <IconLogoAndroid />
      </div>
      <div title='IconLogoApple'>
        <IconLogoApple />
      </div>
      <div title='IconLogoApplePodcast'>
        <IconLogoApplePodcast />
      </div>
      <div title='IconLogoAppStore'>
        <IconLogoAppStore />
      </div>
      <div title='IconLogoBehance'>
        <IconLogoBehance />
      </div>

      <div title='IconLogoCodepen'>
        <IconLogoCodepen />
      </div>
      <div title='IconLogoDiscord'>
        <IconLogoDiscord />
      </div>
      <div title='IconLogoDribbble'>
        <IconLogoDribbble />
      </div>
      <div title='IconLogoFacebook'>
        <IconLogoFacebook />
      </div>
      <div title='IconLogoFigma'>
        <IconLogoFigma />
      </div>
      <div title='IconLogoGithub'>
        <IconLogoGithub />
      </div>
      <div title='IconLogoGitlab'>
        <IconLogoGitlab />
      </div>
      <div title='IconLogoGoogle'>
        <IconLogoGoogle />
      </div>
      <div title='IconLogoGoogleChrome'>
        <IconLogoGoogleChrome />
      </div>
      <div title='IconLogoGoogleDrive'>
        <IconLogoGoogleDrive />
      </div>
      <div title='IconLogoGooglePhotos'>
        <IconLogoGooglePhotos />
      </div>
      <div title='IconLogoInstagram'>
        <IconLogoInstagram />
      </div>
      <div title='IconLogoLinkedin'>
        <IconLogoLinkedin />
      </div>
      <div title='IconLogoMarkdown'>
        <IconLogoMarkdown />
      </div>
      <div title='IconLogoMedium'>
        <IconLogoMedium />
      </div>
      <div title='IconLogoMessenger'>
        <IconLogoMessenger />
      </div>
      <div title='IconLogoMeta'>
        <IconLogoMeta />
      </div>
      <div title='IconLogoMsExcel'>
        <IconLogoMsExcel />
      </div>
      <div title='IconLogoMsPowerPoint'>
        <IconLogoMsPowerPoint />
      </div>
      <div title='IconLogoMsTeams'>
        <IconLogoMsTeams />
      </div>
      <div title='IconLogoMsWord'>
        <IconLogoMsWord />
      </div>
      <div title='IconLogoOpenAi'>
        <IconLogoOpenAi />
      </div>
      <div title='IconLogoPaypal'>
        <IconLogoPaypal />
      </div>
      <div title='IconLogoPinterest'>
        <IconLogoPinterest />
      </div>
      <div title='IconLogoPlayStore'>
        <IconLogoPlayStore />
      </div>
      <div title='IconLogoReddit'>
        <IconLogoReddit />
      </div>
      <div title='IconLogoSandbox'>
        <IconLogoSandbox />
      </div>
      <div title='IconLogoSlack'>
        <IconLogoSlack />
      </div>
      <div title='IconLogoSnapchat'>
        <IconLogoSnapchat />
      </div>
      <div title='IconLogoSpotify'>
        <IconLogoSpotify />
      </div>
      <div title='IconLogoStackOverflow'>
        <IconLogoStackOverflow />
      </div>
      <div title='IconLogoStripe'>
        <IconLogoStripe />
      </div>
      <div title='IconLogoTelegram'>
        <IconLogoTelegram />
      </div>
      <div title='IconLogoThreads'>
        <IconLogoThreads />
      </div>
      <div title='IconLogoTiktok'>
        <IconLogoTiktok />
      </div>
      <div title='IconLogoTwitch'>
        <IconLogoTwitch />
      </div>
      <div title='IconLogoTwitter'>
        <IconLogoTwitter />
      </div>
      <div title='IconLogoWebhooks'>
        <IconLogoWebhooks />
      </div>
      <div title='IconLogoWhatsapp'>
        <IconLogoWhatsapp />
      </div>
      <div title='IconLogoWindows'>
        <IconLogoWindows />
      </div>
      <div title='IconLogoX'>
        <IconLogoX />
      </div>
      <div title='IconLogoYoutube'>
        <IconLogoYoutube />
      </div>
      <div title='IconLogoBoldAfterEffects'>
        <IconLogoBoldAfterEffects />
      </div>
      <div title='IconLogoBoldAhrefs'>
        <IconLogoBoldAhrefs />
      </div>
      <div title='IconLogoBoldAmericanExpress'>
        <IconLogoBoldAmericanExpress />
      </div>
      <div title='IconLogoBoldAstro'>
        <IconLogoBoldAstro />
      </div>
      <div title='IconLogoBoldCanva'>
        <IconLogoBoldCanva />
      </div>
      <div title='IconLogoBoldCapCut'>
        <IconLogoBoldCapCut />
      </div>
      <div title='IconLogoBoldClickUp'>
        <IconLogoBoldClickUp />
      </div>
      <div title='IconLogoBoldCloudflare'>
        <IconLogoBoldCloudflare />
      </div>
      <div title='IconLogoBoldElevenlabs'>
        <IconLogoBoldElevenlabs />
      </div>
      <div title='IconLogoBoldExcalidraw'>
        <IconLogoBoldExcalidraw />
      </div>
      <div title='IconLogoBoldFigma'>
        <IconLogoBoldFigma />
      </div>
      <div title='IconLogoBoldFontshare'>
        <IconLogoBoldFontshare />
      </div>
      <div title='IconLogoBoldGithub'>
        <IconLogoBoldGithub />
      </div>
      <div title='IconLogoBoldGoogle'>
        <IconLogoBoldGoogle />
      </div>
      <div title='IconLogoBoldGoogleMeet'>
        <IconLogoBoldGoogleMeet />
      </div>
      <div title='IconLogoBoldGSAP'>
        <IconLogoBoldGSAP />
      </div>
      <div title='IconLogoBoldHuggingFace'>
        <IconLogoBoldHuggingFace />
      </div>
      <div title='IconLogoBoldIllustrator'>
        <IconLogoBoldIllustrator />
      </div>
      <div title='IconLogoBoldInDesign'>
        <IconLogoBoldInDesign />
      </div>
      <div title='IconLogoBoldInstagram'>
        <IconLogoBoldInstagram />
      </div>
      <div title='IconLogoBoldLinkedIn'>
        <IconLogoBoldLinkedIn />
      </div>
      <div title='IconLogoBoldMastercard'>
        <IconLogoBoldMastercard />
      </div>
      <div title='IconLogoBoldMotion'>
        <IconLogoBoldMotion />
      </div>
      <div title='IconLogoBoldNamecheap'>
        <IconLogoBoldNamecheap />
      </div>
      <div title='IconLogoBoldNetlify'>
        <IconLogoBoldNetlify />
      </div>
      <div title='IconLogoBoldNextJS'>
        <IconLogoBoldNextJS />
      </div>
      <div title='IconLogoBoldNotion'>
        <IconLogoBoldNotion />
      </div>
      <div title='IconLogoBoldPhosphorIcons'>
        <IconLogoBoldPhosphorIcons />
      </div>
      <div title='IconLogoBoldPhotoshop'>
        <IconLogoBoldPhotoshop />
      </div>
      <div title='IconLogoBoldPremierePro'>
        <IconLogoBoldPremierePro />
      </div>
      <div title='IconLogoBoldRadixUI'>
        <IconLogoBoldRadixUI />
      </div>
      <div title='IconLogoBoldResend'>
        <IconLogoBoldResend />
      </div>
      <div title='IconLogoBoldSERanking'>
        <IconLogoBoldSERanking />
      </div>
      <div title='IconLogoBoldShopify'>
        <IconLogoBoldShopify />
      </div>
      <div title='IconLogoBoldStatista'>
        <IconLogoBoldStatista />
      </div>
      <div title='IconLogoBoldTailwind'>
        <IconLogoBoldTailwind />
      </div>
      <div title='IconLogoBoldVercel'>
        <IconLogoBoldVercel />
      </div>
      <div title='IconLogoBoldVisa'>
        <IconLogoBoldVisa />
      </div>
      <div title='IconLogoBoldWhatsApp'>
        <IconLogoBoldWhatsApp />
      </div>
    </div>
  ),
})

export const Flags = meta.story({
  render: () => (
    <div className='[&_svg]:size-icon-3xl flex flex-wrap items-center justify-center gap-4'>
      <div title='IconFlagAD'>
        <IconFlagAD />
      </div>
      <div title='IconFlagAE'>
        <IconFlagAE />
      </div>
      <div title='IconFlagAF'>
        <IconFlagAF />
      </div>
      <div title='IconFlagAG'>
        <IconFlagAG />
      </div>
      <div title='IconFlagAI'>
        <IconFlagAI />
      </div>
      <div title='IconFlagAL'>
        <IconFlagAL />
      </div>
      <div title='IconFlagAM'>
        <IconFlagAM />
      </div>
      <div title='IconFlagAO'>
        <IconFlagAO />
      </div>
      <div title='IconFlagAR'>
        <IconFlagAR />
      </div>
      <div title='IconFlagAS'>
        <IconFlagAS />
      </div>
      <div title='IconFlagAT'>
        <IconFlagAT />
      </div>
      <div title='IconFlagAU'>
        <IconFlagAU />
      </div>
      <div title='IconFlagAW'>
        <IconFlagAW />
      </div>
      <div title='IconFlagAX'>
        <IconFlagAX />
      </div>
      <div title='IconFlagAZ'>
        <IconFlagAZ />
      </div>
      <div title='IconFlagBA'>
        <IconFlagBA />
      </div>
      <div title='IconFlagBB'>
        <IconFlagBB />
      </div>
      <div title='IconFlagBD'>
        <IconFlagBD />
      </div>
      <div title='IconFlagBE'>
        <IconFlagBE />
      </div>
      <div title='IconFlagBF'>
        <IconFlagBF />
      </div>
      <div title='IconFlagBG'>
        <IconFlagBG />
      </div>
      <div title='IconFlagBH'>
        <IconFlagBH />
      </div>
      <div title='IconFlagBI'>
        <IconFlagBI />
      </div>
      <div title='IconFlagBJ'>
        <IconFlagBJ />
      </div>
      <div title='IconFlagBL'>
        <IconFlagBL />
      </div>
      <div title='IconFlagBM'>
        <IconFlagBM />
      </div>
      <div title='IconFlagBN'>
        <IconFlagBN />
      </div>
      <div title='IconFlagBO'>
        <IconFlagBO />
      </div>
      <div title='IconFlagBR'>
        <IconFlagBR />
      </div>
      <div title='IconFlagBS'>
        <IconFlagBS />
      </div>
      <div title='IconFlagBT'>
        <IconFlagBT />
      </div>
      <div title='IconFlagBV'>
        <IconFlagBV />
      </div>
      <div title='IconFlagBW'>
        <IconFlagBW />
      </div>
      <div title='IconFlagBY'>
        <IconFlagBY />
      </div>
      <div title='IconFlagBZ'>
        <IconFlagBZ />
      </div>
      <div title='IconFlagCA'>
        <IconFlagCA />
      </div>
      <div title='IconFlagCC'>
        <IconFlagCC />
      </div>
      <div title='IconFlagCD'>
        <IconFlagCD />
      </div>
      <div title='IconFlagCF'>
        <IconFlagCF />
      </div>
      <div title='IconFlagCG'>
        <IconFlagCG />
      </div>
      <div title='IconFlagCH'>
        <IconFlagCH />
      </div>
      <div title='IconFlagCI'>
        <IconFlagCI />
      </div>
      <div title='IconFlagCK'>
        <IconFlagCK />
      </div>
      <div title='IconFlagCL'>
        <IconFlagCL />
      </div>
      <div title='IconFlagCM'>
        <IconFlagCM />
      </div>
      <div title='IconFlagCN'>
        <IconFlagCN />
      </div>
      <div title='IconFlagCO'>
        <IconFlagCO />
      </div>
      <div title='IconFlagCR'>
        <IconFlagCR />
      </div>
      <div title='IconFlagCU'>
        <IconFlagCU />
      </div>
      <div title='IconFlagCV'>
        <IconFlagCV />
      </div>
      <div title='IconFlagCW'>
        <IconFlagCW />
      </div>
      <div title='IconFlagCX'>
        <IconFlagCX />
      </div>
      <div title='IconFlagCY'>
        <IconFlagCY />
      </div>
      <div title='IconFlagCZ'>
        <IconFlagCZ />
      </div>
      <div title='IconFlagDE'>
        <IconFlagDE />
      </div>
      <div title='IconFlagDJ'>
        <IconFlagDJ />
      </div>
      <div title='IconFlagDK'>
        <IconFlagDK />
      </div>
      <div title='IconFlagDM'>
        <IconFlagDM />
      </div>
      <div title='IconFlagDO'>
        <IconFlagDO />
      </div>
      <div title='IconFlagDZ'>
        <IconFlagDZ />
      </div>
      <div title='IconFlagEC'>
        <IconFlagEC />
      </div>
      <div title='IconFlagEE'>
        <IconFlagEE />
      </div>
      <div title='IconFlagEG'>
        <IconFlagEG />
      </div>
      <div title='IconFlagER'>
        <IconFlagER />
      </div>
      <div title='IconFlagES'>
        <IconFlagES />
      </div>
      <div title='IconFlagET'>
        <IconFlagET />
      </div>
      <div title='IconFlagEU'>
        <IconFlagEU />
      </div>
      <div title='IconFlagFI'>
        <IconFlagFI />
      </div>
      <div title='IconFlagFJ'>
        <IconFlagFJ />
      </div>
      <div title='IconFlagFK'>
        <IconFlagFK />
      </div>
      <div title='IconFlagFM'>
        <IconFlagFM />
      </div>
      <div title='IconFlagFO'>
        <IconFlagFO />
      </div>
      <div title='IconFlagFR'>
        <IconFlagFR />
      </div>
      <div title='IconFlagGA'>
        <IconFlagGA />
      </div>
      <div title='IconFlagGBENG'>
        <IconFlagGBENG />
      </div>
      <div title='IconFlagGB'>
        <IconFlagGB />
      </div>
      <div title='IconFlagGBNIR'>
        <IconFlagGBNIR />
      </div>
      <div title='IconFlagGBSCT'>
        <IconFlagGBSCT />
      </div>
      <div title='IconFlagGBWLS'>
        <IconFlagGBWLS />
      </div>
      <div title='IconFlagGBZET'>
        <IconFlagGBZET />
      </div>
      <div title='IconFlagGD'>
        <IconFlagGD />
      </div>
      <div title='IconFlagGE'>
        <IconFlagGE />
      </div>
      <div title='IconFlagGF'>
        <IconFlagGF />
      </div>
      <div title='IconFlagGG'>
        <IconFlagGG />
      </div>
      <div title='IconFlagGH'>
        <IconFlagGH />
      </div>
      <div title='IconFlagGI'>
        <IconFlagGI />
      </div>
      <div title='IconFlagID'>
        <IconFlagID />
      </div>
      <div title='IconFlagIE'>
        <IconFlagIE />
      </div>
      <div title='IconFlagIL'>
        <IconFlagIL />
      </div>
      <div title='IconFlagIM'>
        <IconFlagIM />
      </div>
      <div title='IconFlagIN'>
        <IconFlagIN />
      </div>
      <div title='IconFlagIO'>
        <IconFlagIO />
      </div>
      <div title='IconFlagIQ'>
        <IconFlagIQ />
      </div>
      <div title='IconFlagIR'>
        <IconFlagIR />
      </div>
      <div title='IconFlagIS'>
        <IconFlagIS />
      </div>
      <div title='IconFlagIT'>
        <IconFlagIT />
      </div>
      <div title='IconFlagGL'>
        <IconFlagGL />
      </div>
      <div title='IconFlagGM'>
        <IconFlagGM />
      </div>
      <div title='IconFlagGN'>
        <IconFlagGN />
      </div>
      <div title='IconFlagGP'>
        <IconFlagGP />
      </div>
      <div title='IconFlagGQ'>
        <IconFlagGQ />
      </div>
      <div title='IconFlagGR'>
        <IconFlagGR />
      </div>
      <div title='IconFlagGS'>
        <IconFlagGS />
      </div>
      <div title='IconFlagGT'>
        <IconFlagGT />
      </div>
      <div title='IconFlagGU'>
        <IconFlagGU />
      </div>
      <div title='IconFlagGW'>
        <IconFlagGW />
      </div>
      <div title='IconFlagGY'>
        <IconFlagGY />
      </div>
      <div title='IconFlagHK'>
        <IconFlagHK />
      </div>
      <div title='IconFlagHM'>
        <IconFlagHM />
      </div>
      <div title='IconFlagHN'>
        <IconFlagHN />
      </div>
      <div title='IconFlagHR'>
        <IconFlagHR />
      </div>
      <div title='IconFlagHT'>
        <IconFlagHT />
      </div>
      <div title='IconFlagHU'>
        <IconFlagHU />
      </div>
      <div title='IconFlagJE'>
        <IconFlagJE />
      </div>
      <div title='IconFlagJM'>
        <IconFlagJM />
      </div>
      <div title='IconFlagJO'>
        <IconFlagJO />
      </div>
      <div title='IconFlagJP'>
        <IconFlagJP />
      </div>
      <div title='IconFlagKE'>
        <IconFlagKE />
      </div>
      <div title='IconFlagKG'>
        <IconFlagKG />
      </div>
      <div title='IconFlagKH'>
        <IconFlagKH />
      </div>
      <div title='IconFlagKI'>
        <IconFlagKI />
      </div>
      <div title='IconFlagKM'>
        <IconFlagKM />
      </div>
      <div title='IconFlagKN'>
        <IconFlagKN />
      </div>
      <div title='IconFlagKP'>
        <IconFlagKP />
      </div>
      <div title='IconFlagKR'>
        <IconFlagKR />
      </div>
      <div title='IconFlagKW'>
        <IconFlagKW />
      </div>
      <div title='IconFlagKY'>
        <IconFlagKY />
      </div>
      <div title='IconFlagKZ'>
        <IconFlagKZ />
      </div>
      <div title='IconFlagLA'>
        <IconFlagLA />
      </div>
      <div title='IconFlagLB'>
        <IconFlagLB />
      </div>
      <div title='IconFlagLC'>
        <IconFlagLC />
      </div>

      <div title='IconFlagLI'>
        <IconFlagLI />
      </div>
      <div title='IconFlagLK'>
        <IconFlagLK />
      </div>
      <div title='IconFlagLR'>
        <IconFlagLR />
      </div>
      <div title='IconFlagLS'>
        <IconFlagLS />
      </div>
      <div title='IconFlagLT'>
        <IconFlagLT />
      </div>
      <div title='IconFlagLU'>
        <IconFlagLU />
      </div>
      <div title='IconFlagLV'>
        <IconFlagLV />
      </div>
      <div title='IconFlagLY'>
        <IconFlagLY />
      </div>
      <div title='IconFlagMA'>
        <IconFlagMA />
      </div>
      <div title='IconFlagMC'>
        <IconFlagMC />
      </div>
      <div title='IconFlagMD'>
        <IconFlagMD />
      </div>
      <div title='IconFlagME'>
        <IconFlagME />
      </div>
      <div title='IconFlagMF'>
        <IconFlagMF />
      </div>
      <div title='IconFlagMG'>
        <IconFlagMG />
      </div>
      <div title='IconFlagMH'>
        <IconFlagMH />
      </div>
      <div title='IconFlagMK'>
        <IconFlagMK />
      </div>
      <div title='IconFlagML'>
        <IconFlagML />
      </div>
      <div title='IconFlagMM'>
        <IconFlagMM />
      </div>
      <div title='IconFlagMN'>
        <IconFlagMN />
      </div>
      <div title='IconFlagMO'>
        <IconFlagMO />
      </div>
      <div title='IconFlagMP'>
        <IconFlagMP />
      </div>
      <div title='IconFlagMQ'>
        <IconFlagMQ />
      </div>
      <div title='IconFlagMR'>
        <IconFlagMR />
      </div>
      <div title='IconFlagMS'>
        <IconFlagMS />
      </div>
      <div title='IconFlagMT'>
        <IconFlagMT />
      </div>
      <div title='IconFlagMU'>
        <IconFlagMU />
      </div>
      <div title='IconFlagMV'>
        <IconFlagMV />
      </div>
      <div title='IconFlagMW'>
        <IconFlagMW />
      </div>
      <div title='IconFlagMX'>
        <IconFlagMX />
      </div>
      <div title='IconFlagMY'>
        <IconFlagMY />
      </div>
      <div title='IconFlagMZ'>
        <IconFlagMZ />
      </div>
      <div title='IconFlagNA'>
        <IconFlagNA />
      </div>
      <div title='IconFlagNC'>
        <IconFlagNC />
      </div>
      <div title='IconFlagNE'>
        <IconFlagNE />
      </div>
      <div title='IconFlagNF'>
        <IconFlagNF />
      </div>
      <div title='IconFlagNG'>
        <IconFlagNG />
      </div>
      <div title='IconFlagNI'>
        <IconFlagNI />
      </div>
      <div title='IconFlagNL'>
        <IconFlagNL />
      </div>
      <div title='IconFlagNO'>
        <IconFlagNO />
      </div>
      <div title='IconFlagNP'>
        <IconFlagNP />
      </div>
      <div title='IconFlagNR'>
        <IconFlagNR />
      </div>
      <div title='IconFlagNU'>
        <IconFlagNU />
      </div>
      <div title='IconFlagNZ'>
        <IconFlagNZ />
      </div>
      <div title='IconFlagOM'>
        <IconFlagOM />
      </div>
      <div title='IconFlagGL'>
        <IconFlagGL />
      </div>
      <div title='IconFlagGM'>
        <IconFlagGM />
      </div>
      <div title='IconFlagPA'>
        <IconFlagPA />
      </div>
      <div title='IconFlagPE'>
        <IconFlagPE />
      </div>
      <div title='IconFlagPF'>
        <IconFlagPF />
      </div>
      <div title='IconFlagPG'>
        <IconFlagPG />
      </div>
      <div title='IconFlagPH'>
        <IconFlagPH />
      </div>
      <div title='IconFlagPK'>
        <IconFlagPK />
      </div>
      <div title='IconFlagPL'>
        <IconFlagPL />
      </div>
      <div title='IconFlagPM'>
        <IconFlagPM />
      </div>
      <div title='IconFlagPN'>
        <IconFlagPN />
      </div>
      <div title='IconFlagPR'>
        <IconFlagPR />
      </div>
      <div title='IconFlagPS'>
        <IconFlagPS />
      </div>
      <div title='IconFlagPT'>
        <IconFlagPT />
      </div>
      <div title='IconFlagPW'>
        <IconFlagPW />
      </div>
      <div title='IconFlagPY'>
        <IconFlagPY />
      </div>
      <div title='IconFlagQA'>
        <IconFlagQA />
      </div>
      <div title='IconFlagRE'>
        <IconFlagRE />
      </div>
      <div title='IconFlagRO'>
        <IconFlagRO />
      </div>
      <div title='IconFlagRS'>
        <IconFlagRS />
      </div>
      <div title='IconFlagRU'>
        <IconFlagRU />
      </div>
      <div title='IconFlagRW'>
        <IconFlagRW />
      </div>
      <div title='IconFlagSA'>
        <IconFlagSA />
      </div>
      <div title='IconFlagSB'>
        <IconFlagSB />
      </div>
      <div title='IconFlagSC'>
        <IconFlagSC />
      </div>
      <div title='IconFlagSD'>
        <IconFlagSD />
      </div>
      <div title='IconFlagSE'>
        <IconFlagSE />
      </div>
      <div title='IconFlagSG'>
        <IconFlagSG />
      </div>
      <div title='IconFlagSH'>
        <IconFlagSH />
      </div>
      <div title='IconFlagSI'>
        <IconFlagSI />
      </div>
      <div title='IconFlagSJ'>
        <IconFlagSJ />
      </div>
      <div title='IconFlagSK'>
        <IconFlagSK />
      </div>
      <div title='IconFlagSL'>
        <IconFlagSL />
      </div>
      <div title='IconFlagSM'>
        <IconFlagSM />
      </div>
      <div title='IconFlagSN'>
        <IconFlagSN />
      </div>
      <div title='IconFlagSO'>
        <IconFlagSO />
      </div>
      <div title='IconFlagSR'>
        <IconFlagSR />
      </div>
      <div title='IconFlagSS'>
        <IconFlagSS />
      </div>
      <div title='IconFlagST'>
        <IconFlagST />
      </div>
      <div title='IconFlagSV'>
        <IconFlagSV />
      </div>
      <div title='IconFlagSX'>
        <IconFlagSX />
      </div>
      <div title='IconFlagSY'>
        <IconFlagSY />
      </div>
      <div title='IconFlagSZ'>
        <IconFlagSZ />
      </div>
      <div title='IconFlagTC'>
        <IconFlagTC />
      </div>
      <div title='IconFlagTD'>
        <IconFlagTD />
      </div>
      <div title='IconFlagTF'>
        <IconFlagTF />
      </div>
      <div title='IconFlagTG'>
        <IconFlagTG />
      </div>
      <div title='IconFlagTH'>
        <IconFlagTH />
      </div>
      <div title='IconFlagTJ'>
        <IconFlagTJ />
      </div>
      <div title='IconFlagTK'>
        <IconFlagTK />
      </div>
      <div title='IconFlagTL'>
        <IconFlagTL />
      </div>
      <div title='IconFlagTM'>
        <IconFlagTM />
      </div>
      <div title='IconFlagTN'>
        <IconFlagTN />
      </div>
      <div title='IconFlagTO'>
        <IconFlagTO />
      </div>
      <div title='IconFlagTR'>
        <IconFlagTR />
      </div>
      <div title='IconFlagTT'>
        <IconFlagTT />
      </div>
      <div title='IconFlagTV'>
        <IconFlagTV />
      </div>
      <div title='IconFlagTW'>
        <IconFlagTW />
      </div>
      <div title='IconFlagTZ'>
        <IconFlagTZ />
      </div>
      <div title='IconFlagUA'>
        <IconFlagUA />
      </div>
      <div title='IconFlagUG'>
        <IconFlagUG />
      </div>
      <div title='IconFlagUM'>
        <IconFlagUM />
      </div>
      <div title='IconFlagUSCA'>
        <IconFlagUSCA />
      </div>
      <div title='IconFlagUS'>
        <IconFlagUS />
      </div>
      <div title='IconFlagUY'>
        <IconFlagUY />
      </div>
      <div title='IconFlagUZ'>
        <IconFlagUZ />
      </div>
      <div title='IconFlagVA'>
        <IconFlagVA />
      </div>
      <div title='IconFlagVC'>
        <IconFlagVC />
      </div>
      <div title='IconFlagVE'>
        <IconFlagVE />
      </div>
      <div title='IconFlagVG'>
        <IconFlagVG />
      </div>
      <div title='IconFlagVI'>
        <IconFlagVI />
      </div>
      <div title='IconFlagVN'>
        <IconFlagVN />
      </div>
      <div title='IconFlagVU'>
        <IconFlagVU />
      </div>
      <div title='IconFlagWF'>
        <IconFlagWF />
      </div>
      <div title='IconFlagWS'>
        <IconFlagWS />
      </div>
      <div title='IconFlagXK'>
        <IconFlagXK />
      </div>
      <div title='IconFlagYE'>
        <IconFlagYE />
      </div>
      <div title='IconFlagYT'>
        <IconFlagYT />
      </div>
      <div title='IconFlagZA'>
        <IconFlagZA />
      </div>
      <div title='IconFlagZM'>
        <IconFlagZM />
      </div>
      <div title='IconFlagZW'>
        <IconFlagZW />
      </div>
    </div>
  ),
})
