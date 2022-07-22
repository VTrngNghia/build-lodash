import logo from './logo.svg';
import './App.css';
import after from "lodash/after";
import assign from "lodash/assign";
import at from "lodash/at";
import bind from "lodash/bind";
import bindAll from "lodash/bindAll";
import bindKey from "lodash/bindKey";
import clone from "lodash/clone";
import cloneDeep from "lodash/cloneDeep";
import compact from "lodash/compact";
import constant from "lodash/constant";
import countBy from "lodash/countBy";
import create from "lodash/create";
import curry from "lodash/curry";
import debounce from "lodash/debounce";
import defaults from "lodash/defaults";
import defer from "lodash/defer";
import delay from "lodash/delay";
import difference from "lodash/difference";
import drop from "lodash/drop";
import each from "lodash/each";
import eachRight from "lodash/eachRight";
import every from "lodash/every";
import extend from "lodash/extend";
import filter from "lodash/filter";
import find from "lodash/find";
import findIndex from "lodash/findIndex";
import findKey from "lodash/findKey";
import findLast from "lodash/findLast";
import findLastIndex from "lodash/findLastIndex";
import findLastKey from "lodash/findLastKey";
import first from "lodash/first";
import flatten from "lodash/flatten";
import forEach from "lodash/forEach";
import forEachRight from "lodash/forEachRight";
import forIn from "lodash/forIn";
import forInRight from "lodash/forInRight";
import forOwn from "lodash/forOwn";
import forOwnRight from "lodash/forOwnRight";
import functions from "lodash/functions";
import groupBy from "lodash/groupBy";
import has from "lodash/has";
import head from "lodash/head";
import identity from "lodash/identity";
import indexOf from "lodash/indexOf";
import initial from "lodash/initial";
import intersection from "lodash/intersection";
import invert from "lodash/invert";
import invoke from "lodash/invoke";
import isArguments from "lodash/isArguments";
import isArray from "lodash/isArray";
import isBoolean from "lodash/isBoolean";
import isDate from "lodash/isDate";
import isElement from "lodash/isElement";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import isFunction from "lodash/isFunction";
import isNull from "lodash/isNull";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import isPlainObject from "lodash/isPlainObject";
import isRegExp from "lodash/isRegExp";
import isString from "lodash/isString";
import isUndefined from "lodash/isUndefined";
import keys from "lodash/keys";
import last from "lodash/last";
import lastIndexOf from "lodash/lastIndexOf";
import map from "lodash/map";
import mapValues from "lodash/mapValues";
import max from "lodash/max";
import memoize from "lodash/memoize";
import merge from "lodash/merge";
import min from "lodash/min";
import mixin from "lodash/mixin";
import noConflict from "lodash/noConflict";
import noop from "lodash/noop";
import now from "lodash/now";
import omit from "lodash/omit";
import once from "lodash/once";
import partial from "lodash/partial";
import partialRight from "lodash/partialRight";
import pick from "lodash/pick";
import property from "lodash/property";
import pull from "lodash/pull";
import random from "lodash/random";
import range from "lodash/range";
import reduce from "lodash/reduce";
import reduceRight from "lodash/reduceRight";
import reject from "lodash/reject";
import remove from "lodash/remove";
import rest from "lodash/rest";
import result from "lodash/result";
import runInContext from "lodash/runInContext";
import sample from "lodash/sample";
import shuffle from "lodash/shuffle";
import size from "lodash/size";
import some from "lodash/some";
import sortBy from "lodash/sortBy";
import sortedIndex from "lodash/sortedIndex";
import tail from "lodash/tail";
import take from "lodash/take";
import tap from "lodash/tap";
import template from "lodash/template";
import templateSettings from "lodash/templateSettings";
import throttle from "lodash/throttle";
import times from "lodash/times";
import toArray from "lodash/toArray";
import transform from "lodash/transform";
import union from "lodash/union";
import uniq from "lodash/uniq";
import uniqueId from "lodash/uniqueId";
import unzip from "lodash/unzip";
import values from "lodash/values";
import without from "lodash/without";
import xor from "lodash/xor";
import zip from "lodash/zip";
import zipObject from "lodash/zipObject";

const _ = {
    after,
    assign,
    at,
    bind,
    bindAll,
    bindKey,
    clone,
    cloneDeep,
    compact,
    constant,
    countBy,
    create,
    curry,
    debounce,
    defaults,
    defer,
    delay,
    difference,
    drop,
    each,
    eachRight,
    every,
    extend,
    filter,
    find,
    findIndex,
    findKey,
    findLast,
    findLastIndex,
    findLastKey,
    first,
    flatten,
    forEach,
    forEachRight,
    forIn,
    forInRight,
    forOwn,
    forOwnRight,
    functions,
    groupBy,
    has,
    head,
    identity,
    indexOf,
    initial,
    intersection,
    invert,
    invoke,
    isArguments,
    isArray,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isFunction,
    isNull,
    isNumber,
    isObject,
    isPlainObject,
    isRegExp,
    isString,
    isUndefined,
    keys,
    last,
    lastIndexOf,
    map,
    mapValues,
    max,
    memoize,
    merge,
    min,
    mixin,
    noConflict,
    noop,
    now,
    omit,
    once,
    partial,
    partialRight,
    pick,
    property,
    pull,
    random,
    range,
    reduce,
    reduceRight,
    reject,
    remove,
    rest,
    result,
    runInContext,
    sample,
    shuffle,
    size,
    some,
    sortBy,
    sortedIndex,
    tail,
    take,
    tap,
    template,
    templateSettings,
    throttle,
    times,
    toArray,
    transform,
    union,
    uniq,
    uniqueId,
    unzip,
    values,
    without,
    xor,
    zip,
    zipObject
}

function App() {
    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>);
}

export default App;
