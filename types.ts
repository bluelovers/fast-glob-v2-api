/**
 * Created by user on 2019/6/27.
 */

/// <reference path="./settings.d.ts" />
import * as _setting from 'fast-glob/out/settings';
import * as _types from 'fast-glob/out/types';

import _FastGlob_ = require('fast-glob');

import Pattern = _FastGlob_.Pattern;
import Options = _FastGlob_.Options;
import Entry = _FastGlob_.Entry;
import EntryItem = _types.EntryItem;
import OptionsWithEntryObjectPredicate = _setting.OptionsWithEntryObjectPredicate;

declare function FastGlob(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Promise<Entry[]>;
declare function FastGlob(source: Pattern | Pattern[], options?: Options): Promise<string[]>;
declare function FastGlob<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): Promise<T[]>;

declare namespace FastGlob {
	export import Options = _FastGlob_.Options;
	export import OptionsWithEntryObjectPredicate = _setting.OptionsWithEntryObjectPredicate;
	export import Entry = _FastGlob_.Entry;
	export import EntryItem = _types.EntryItem;
	export import Task = _FastGlob_.Task;
	export import Pattern = _FastGlob_.Pattern;
	export import FileSystemAdapter = _FastGlob_.FileSystemAdapter;
	function async(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Promise<Entry[]>;
	function async(source: Pattern | Pattern[], options?: Options): Promise<string[]>;
	function async<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): Promise<T[]>;
	function sync(source: Pattern | Pattern[], options: OptionsWithEntryObjectPredicate): Entry[];
	function sync(source: Pattern | Pattern[], options?: Options): string[];
	function sync<T extends EntryItem = string>(source: Pattern | Pattern[], options?: Options): T[];
	// @ts-ignore
	function stream(source: Pattern | Pattern[], options?: Options): NodeJS.ReadableStream;
	function generateTasks(source: Pattern | Pattern[], options?: Options): Task[];
}

FastGlob.default = FastGlob;

export = FastGlob
