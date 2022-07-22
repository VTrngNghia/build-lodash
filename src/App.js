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
