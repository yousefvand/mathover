import { workspace, TextEditorDecorationType } from "vscode";
import { correctDecorationType, wrongDecorationType } from "./decorations-types";

export default {
	format: <string>workspace.getConfiguration().get("mathover.format"),
	matchReg: <string>workspace.getConfiguration().get("mathover.matchRegex"),
	matchRegFlags: <string>workspace.getConfiguration().get("mathover.matchRegexFlags"),
	wrongReg: <string>workspace.getConfiguration().get("mathover.wrongRegex"),
	wrongRegFlags: <string>workspace.getConfiguration().get("mathover.wrongRegexFlags"),
	forwardSkip: <number>workspace.getConfiguration().get("mathover.forwardSkip"),
	backwardSkip: <number>workspace.getConfiguration().get("mathover.backwardSkip"),
	cacheSize: <number>workspace.getConfiguration().get("mathover.cacheSize"),
	updateInterval: <number>workspace.getConfiguration().get("mathover.updateInterval"),
	svgTextColor: <string>workspace.getConfiguration().get("mathover.svgTextColor"),
	svgBackgroundColor: <string>workspace.getConfiguration().get("mathover.svgBackgroundColor"),
	// if you know how to cast objects from configurations, let me know.
	correctDecorationType: <TextEditorDecorationType>correctDecorationType,
	wrongDecorationType: <TextEditorDecorationType>wrongDecorationType,
	// correctDecorationType: <TextEditorDecorationType>workspace.getConfiguration().get("mathover.correctDecorationType"),
	// wrongDecorationType: <TextEditorDecorationType>workspace.getConfiguration().get("mathover.wrongDecorationType"),
};
