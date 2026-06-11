!include "FileFunc.nsh"
!include "LogicLib.nsh"

Name "Leave Application"
OutFile "dist\\Leave Application Installer.exe"
InstallDir "$LOCALAPPDATA\\Programs\\Leave Application"
RequestExecutionLevel user
SetCompress auto
ShowInstDetails nevershow
ShowUninstDetails nevershow

!ifndef ROOT
  !define ROOT "${__FILE__}"
!endif
Icon "${ROOT}/build/icon.ico"

Section "Install"
  SetOutPath "$INSTDIR"
  File /r "${ROOT}/dist/Leave Application-win32-x64/*"
  CreateDirectory "$SMPROGRAMS\\Leave Application"
  CreateShortCut "$SMPROGRAMS\\Leave Application\\Leave Application.lnk" "$INSTDIR\\Leave Application.exe"
  CreateShortCut "$DESKTOP\\Leave Application.lnk" "$INSTDIR\\Leave Application.exe"
  WriteUninstaller "$INSTDIR\\Uninstall Leave Application.exe"
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\\Leave Application.lnk"
  Delete "$SMPROGRAMS\\Leave Application\\Leave Application.lnk"
  Delete "$INSTDIR\\Leave Application.exe"
  Delete "$INSTDIR\\Uninstall Leave Application.exe"
  RMDir "$SMPROGRAMS\\Leave Application"
  RMDir "$INSTDIR"
SectionEnd
