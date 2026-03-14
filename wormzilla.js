
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }
    },
    "./node_modules/socket.io-parser/build/esm/is-binary.js": (_0x3673e0, _0x5b6a90, _0x4cc3e6) => {
      'use strict';

      _0x4cc3e6.r(_0x5b6a90);
      _0x4cc3e6.d(_0x5b6a90, {
        hasBinary: () => _0x2de497,
        isBinary: () => _0x437bd5
      });
      const _0x55afbc = typeof ArrayBuffer === "function";
      const _0x8fcfe4 = _0x32d2d8 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(_0x32d2d8);
        } else {
          return _0x32d2d8.buffer instanceof ArrayBuffer;
        }
      };
      const _0x1d00bd = Object.prototype.toString;
      const _0x15c08e = typeof Blob === "function" || typeof Blob !== "undefined" && _0x1d00bd.call(Blob) === "[object BlobConstructor]";
      const _0x5ddad4 = typeof File === "function" || typeof File !== "undefined" && _0x1d00bd.call(File) === "[object FileConstructor]";
      function _0x437bd5(_0x100df9) {
        return _0x55afbc && (_0x100df9 instanceof ArrayBuffer || _0x8fcfe4(_0x100df9)) || _0x15c08e && _0x100df9 instanceof Blob || _0x5ddad4 && _0x100df9 instanceof File;
      }
      function _0x2de497(_0x4c90aa, _0x949b42) {
        if (!_0x4c90aa || typeof _0x4c90aa !== "object") {
          return false;
        }
        if (Array.isArray(_0x4c90aa)) {
          for (let _0x180de7 = 0, _0x17711d = _0x4c90aa.length; _0x180de7 < _0x17711d; _0x180de7++) {
            if (_0x2de497(_0x4c90aa[_0x180de7])) {
              return true;
            }
          }
          return false;
        }
        if (_0x437bd5(_0x4c90aa)) {
          return true;
        }
        if (_0x4c90aa.toJSON && typeof _0x4c90aa.toJSON === "function" && arguments.length === 1) {
          return _0x2de497(_0x4c90aa.toJSON(), true);
        }
        for (const _0x4187da in _0x4c90aa) {
          if (Object.prototype.hasOwnProperty.call(_0x4c90aa, _0x4187da) && _0x2de497(_0x4c90aa[_0x4187da])) {
            return true;
          }
        }
        return false;
      }
    },
    "./src/temp.js": (_0x11bfa2, _0x789551, _0x49ea60) => {
      'use strict';

      _0x49ea60.r(_0x789551);
      var _0x5213e9 = _0x49ea60("./node_modules/howler/dist/howler.js");
      var _0x569d3b = _0x49ea60.n(_0x5213e9);
      var _0x32df20 = _0x49ea60("./node_modules/socket.io-client/build/esm/index.js");
      _0x11bfa2 = _0x49ea60.hmd(_0x11bfa2);
      function _0x3391a3(_0x34a911, _0x413726) {
        if (!(_0x34a911 instanceof _0x413726)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _0x56128a(_0x4f5737, _0x97e917) {
        for (var _0x7ed16a = 0; _0x7ed16a < _0x97e917.length; _0x7ed16a++) {
          var _0x543ff5 = _0x97e917[_0x7ed16a];
          _0x543ff5.enumerable = _0x543ff5.enumerable || false;
          _0x543ff5.configurable = true;
          if ("value" in _0x543ff5) {
            _0x543ff5.writable = true;
          }
          Object.defineProperty(_0x4f5737, _0x41f1d3(_0x543ff5.key), _0x543ff5);
        }
      }
      function _0x3ef9b1(_0x25b4c7, _0x57f354, _0x52b1bf) {
        if (_0x57f354) {
          _0x56128a(_0x25b4c7.prototype, _0x57f354);
        }
        if (_0x52b1bf) {
          _0x56128a(_0x25b4c7, _0x52b1bf);
        }
        Object.defineProperty(_0x25b4c7, "prototype", {
          writable: false
        });
        return _0x25b4c7;
      }
      function _0x449262(_0x5d7dfc) {
        return _0x3b7e45(_0x5d7dfc) || _0x33e018(_0x5d7dfc) || _0xfd2cdc(_0x5d7dfc) || _0x38316c();
      }
      function _0x38316c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x33e018(_0x55f547) {
        if (typeof Symbol != "undefined" && _0x55f547[Symbol.iterator] != null || _0x55f547["@@iterator"] != null) {
          return Array.from(_0x55f547);
        }
      }
      function _0x3b7e45(_0x3b769b) {
        if (Array.isArray(_0x3b769b)) {
          return _0x4f6d45(_0x3b769b);
        }
      }
      function _0x4a2e4b(_0x4a54d9, _0x432762) {
        var _0x4c511b = typeof Symbol != "undefined" && _0x4a54d9[Symbol.iterator] || _0x4a54d9["@@iterator"];
        if (!_0x4c511b) {
          if (Array.isArray(_0x4a54d9) || (_0x4c511b = _0xfd2cdc(_0x4a54d9)) || _0x432762 && _0x4a54d9 && typeof _0x4a54d9.length == "number") {
            if (_0x4c511b) {
              _0x4a54d9 = _0x4c511b;
            }
            var _0x32ffcb = 0;
            var _0x410208 = function _0x97d140() {};
            return {
              s: _0x410208,
              n: function (_0x172d2c) {
                function _0x5cebf7() {
                  return _0x172d2c.apply(this, arguments);
                }
                _0x5cebf7.toString = function () {
                  return _0x172d2c.toString();
                };
                return _0x5cebf7;
              }(function () {
                if (_0x32ffcb >= _0x4a54d9.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: _0x4a54d9[_0x32ffcb++]
                  };
                }
              }),
              e: function _0x37979e(_0x45cfbd) {
                throw _0x45cfbd;
              },
              f: _0x410208
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var _0x59629c;
        var _0x303d9f = true;
        var _0x372077 = false;
        return {
          s: function _0x2d0231() {
            _0x4c511b = _0x4c511b.call(_0x4a54d9);
          },
          n: function _0x45608f() {
            var _0x41369f = _0x4c511b.next();
            _0x303d9f = _0x41369f.done;
            return _0x41369f;
          },
          e: function _0x70015e(_0x16066f) {
            _0x372077 = true;
            _0x59629c = _0x16066f;
          },
          f: function _0x5d324e() {
            try {
              if (!_0x303d9f && _0x4c511b.return != null) {
                _0x4c511b.return();
              }
            } finally {
              if (_0x372077) {
                throw _0x59629c;
              }
            }
          }
        };
      }
      function _0xfd2cdc(_0x56b344, _0x445eb5) {
        if (_0x56b344) {
          if (typeof _0x56b344 == "string") {
            return _0x4f6d45(_0x56b344, _0x445eb5);
          }
          var _0x1acbbe = {}.toString.call(_0x56b344).slice(8, -1);
          if (_0x1acbbe === "Object" && _0x56b344.constructor) {
            _0x1acbbe = _0x56b344.constructor.name;
          }
          if (_0x1acbbe === "Map" || _0x1acbbe === "Set") {
            return Array.from(_0x56b344);
          } else if (_0x1acbbe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1acbbe)) {
            return _0x4f6d45(_0x56b344, _0x445eb5);
          } else {
            return undefined;
          }
        }
      }
      function _0x4f6d45(_0x24ba37, _0x55a925) {
        if (_0x55a925 == null || _0x55a925 > _0x24ba37.length) {
          _0x55a925 = _0x24ba37.length;
        }
        for (var _0x5d9855 = 0, _0x447a5f = Array(_0x55a925); _0x5d9855 < _0x55a925; _0x5d9855++) {
          _0x447a5f[_0x5d9855] = _0x24ba37[_0x5d9855];
        }
        return _0x447a5f;
      }
      function _0x4a76ac(_0x502224, _0x4be223) {
        var _0x5106c3 = Object.keys(_0x502224);
        if (Object.getOwnPropertySymbols) {
          var _0x208af6 = Object.getOwnPropertySymbols(_0x502224);
          if (_0x4be223) {
            _0x208af6 = _0x208af6.filter(function (_0x2a3ae5) {
              return Object.getOwnPropertyDescriptor(_0x502224, _0x2a3ae5).enumerable;
            });
          }
          _0x5106c3.push.apply(_0x5106c3, _0x208af6);
        }
        return _0x5106c3;
      }
      function _0x4e5fcd(_0x1dfee6) {
        for (var _0x391134 = 1; _0x391134 < arguments.length; _0x391134++) {
          var _0x454cba = arguments[_0x391134] ?? {};
          if (_0x391134 % 2) {
            _0x4a76ac(Object(_0x454cba), true).forEach(function (_0x204a19) {
              _0x4ddaaa(_0x1dfee6, _0x204a19, _0x454cba[_0x204a19]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(_0x1dfee6, Object.getOwnPropertyDescriptors(_0x454cba));
          } else {
            _0x4a76ac(Object(_0x454cba)).forEach(function (_0x761711) {
              Object.defineProperty(_0x1dfee6, _0x761711, Object.getOwnPropertyDescriptor(_0x454cba, _0x761711));
            });
          }
        }
        return _0x1dfee6;
      }
      function _0x4ddaaa(_0x498704, _0x2913da, _0x2588a2) {
        if ((_0x2913da = _0x41f1d3(_0x2913da)) in _0x498704) {
          Object.defineProperty(_0x498704, _0x2913da, {
            value: _0x2588a2,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          _0x498704[_0x2913da] = _0x2588a2;
        }
        return _0x498704;
      }
      function _0x41f1d3(_0x4c4849) {
        var _0x527be8 = _0x3869ae(_0x4c4849, "string");
        if (_0x5eb71e(_0x527be8) == "symbol") {
          return _0x527be8;
        } else {
          return _0x527be8 + "";
        }
      }
      function _0x3869ae(_0x10d36b, _0x208528) {
        if (_0x5eb71e(_0x10d36b) != "object" || !_0x10d36b) {
          return _0x10d36b;
        }
        var _0x5be54d = _0x10d36b[Symbol.toPrimitive];
        if (_0x5be54d !== undefined) {
          var _0x1f23a8 = _0x5be54d.call(_0x10d36b, _0x208528 || "default");
          if (_0x5eb71e(_0x1f23a8) != "object") {
            return _0x1f23a8;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (_0x208528 === "string" ? String : Number)(_0x10d36b);
      }
      function _0x1e8476() {
        'use strict';

        _0x1e8476 = function _0x42fa31() {
          return _0x500a06;
        };
        var _0x29ee9e;
        var _0x500a06 = {};
        var _0x53731e = Object.prototype;
        var _0x145fa9 = _0x53731e.hasOwnProperty;
        var _0x2cefa0 = Object.defineProperty || function (_0x87b8c0, _0xc73b22, _0xa4cc3b) {
          _0x87b8c0[_0xc73b22] = _0xa4cc3b.value;
        };
        var _0x309b32 = typeof Symbol == "function" ? Symbol : {};
        var _0x445f0f = _0x309b32.iterator || "@@iterator";
        var _0x290512 = _0x309b32.asyncIterator || "@@asyncIterator";
        var _0x8159f8 = _0x309b32.toStringTag || "@@toStringTag";
        function _0x317d41(_0x551381, _0x13c788, _0x326d19) {
          Object.defineProperty(_0x551381, _0x13c788, {
            value: _0x326d19,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return _0x551381[_0x13c788];
        }
        try {
          _0x317d41({}, "");
        } catch (_0x94ace5) {
          _0x317d41 = function _0x5b852e(_0x5a5811, _0x44fae2, _0x4f34a7) {
            return _0x5a5811[_0x44fae2] = _0x4f34a7;
          };
        }
        function _0x12fd4a(_0x1b469f, _0x26d11d, _0x4c22d, _0x29190c) {
          var _0x12da98 = _0x26d11d && _0x26d11d.prototype instanceof _0x27aaed ? _0x26d11d : _0x27aaed;
          var _0x52809f = Object.create(_0x12da98.prototype);
          var _0x4b2aaa = new _0x3642b9(_0x29190c || []);
          _0x2cefa0(_0x52809f, "_invoke", {
            value: _0x325083(_0x1b469f, _0x4c22d, _0x4b2aaa)
          });
          return _0x52809f;
        }
        function _0x35ad76(_0x5f2ef9, _0x289528, _0xe36275) {
          try {
            return {
              type: "normal",
              arg: _0x5f2ef9.call(_0x289528, _0xe36275)
            };
          } catch (_0x378997) {
            return {
              type: "throw",
              arg: _0x378997
            };
          }
        }
        _0x500a06.wrap = _0x12fd4a;
        var _0x4d4655 = "suspendedStart";
        var _0xeeea5 = "suspendedYield";
        var _0x3a427f = "executing";
        var _0x1944d4 = "completed";
        var _0x585643 = {};
        function _0x27aaed() {}
        function _0x2aa393() {}
        function _0x4ad116() {}
        var _0x4d76e9 = {};
        _0x317d41(_0x4d76e9, _0x445f0f, function () {
          return this;
        });
        var _0x5c390b = Object.getPrototypeOf;
        var _0x5d68ec = _0x5c390b && _0x5c390b(_0x5c390b(_0x101c62([])));
        if (_0x5d68ec && _0x5d68ec !== _0x53731e && _0x145fa9.call(_0x5d68ec, _0x445f0f)) {
          _0x4d76e9 = _0x5d68ec;
        }
        var _0x2a2e7f = _0x4ad116.prototype = _0x27aaed.prototype = Object.create(_0x4d76e9);
        function _0x57518e(_0x162439) {
          ["next", "throw", "return"].forEach(function (_0x402a6a) {
            _0x317d41(_0x162439, _0x402a6a, function (_0x4cbdcc) {
              return this._invoke(_0x402a6a, _0x4cbdcc);
            });
          });
        }
        function _0x7d47c0(_0x271d27, _0x4f1eb6) {
          function _0xeadbe(_0x3bf7dc, _0xbfb6c8, _0x33a3f7, _0x1cd76d) {
            var _0x2e3950 = _0x35ad76(_0x271d27[_0x3bf7dc], _0x271d27, _0xbfb6c8);
            if (_0x2e3950.type !== "throw") {
              var _0x1fc55e = _0x2e3950.arg;
              var _0x21e448 = _0x1fc55e.value;
              if (_0x21e448 && _0x5eb71e(_0x21e448) == "object" && _0x145fa9.call(_0x21e448, "__await")) {
                return _0x4f1eb6.resolve(_0x21e448.__await).then(function (_0x52dd78) {
                  _0xeadbe("next", _0x52dd78, _0x33a3f7, _0x1cd76d);
                }, function (_0x16dacb) {
                  _0xeadbe("throw", _0x16dacb, _0x33a3f7, _0x1cd76d);
                });
              } else {
                return _0x4f1eb6.resolve(_0x21e448).then(function (_0x35f01a) {
                  _0x1fc55e.value = _0x35f01a;
                  _0x33a3f7(_0x1fc55e);
                }, function (_0x3a4c17) {
                  return _0xeadbe("throw", _0x3a4c17, _0x33a3f7, _0x1cd76d);
                });
              }
            }
            _0x1cd76d(_0x2e3950.arg);
          }
          var _0x28f841;
          _0x2cefa0(this, "_invoke", {
            value: function _0x2082d7(_0x55b927, _0x853834) {
              function _0x18ceb8() {
                return new _0x4f1eb6(function (_0x4e6a36, _0x341cb7) {
                  _0xeadbe(_0x55b927, _0x853834, _0x4e6a36, _0x341cb7);
                });
              }
              return _0x28f841 = _0x28f841 ? _0x28f841.then(_0x18ceb8, _0x18ceb8) : _0x18ceb8();
            }
          });
        }
        function _0x325083(_0x58d973, _0x1c1f7c, _0x3bdbae) {
          var _0x2670b6 = _0x4d4655;
          return function (_0x78b0c9, _0x4798a7) {
            if (_0x2670b6 === _0x3a427f) {
              throw Error("Generator is already running");
            }
            if (_0x2670b6 === _0x1944d4) {
              if (_0x78b0c9 === "throw") {
                throw _0x4798a7;
              }
              return {
                value: _0x29ee9e,
                done: true
              };
            }
            _0x3bdbae.method = _0x78b0c9;
            _0x3bdbae.arg = _0x4798a7;
            while (true) {
              var _0x96f760 = _0x3bdbae.delegate;
              if (_0x96f760) {
                var _0xf77684 = _0x3e57a6(_0x96f760, _0x3bdbae);
                if (_0xf77684) {
                  if (_0xf77684 === _0x585643) {
                    continue;
                  }
                  return _0xf77684;
                }
              }
              if (_0x3bdbae.method === "next") {
                _0x3bdbae.sent = _0x3bdbae._sent = _0x3bdbae.arg;
              } else if (_0x3bdbae.method === "throw") {
                if (_0x2670b6 === _0x4d4655) {
                  _0x2670b6 = _0x1944d4;
                  throw _0x3bdbae.arg;
                }
                _0x3bdbae.dispatchException(_0x3bdbae.arg);
              } else if (_0x3bdbae.method === "return") {
                _0x3bdbae.abrupt("return", _0x3bdbae.arg);
              }
              _0x2670b6 = _0x3a427f;
              var _0x16bbc2 = _0x35ad76(_0x58d973, _0x1c1f7c, _0x3bdbae);
              if (_0x16bbc2.type === "normal") {
                _0x2670b6 = _0x3bdbae.done ? _0x1944d4 : _0xeeea5;
                if (_0x16bbc2.arg === _0x585643) {
                  continue;
                }
                return {
                  value: _0x16bbc2.arg,
                  done: _0x3bdbae.done
                };
              }
              if (_0x16bbc2.type === "throw") {
                _0x2670b6 = _0x1944d4;
                _0x3bdbae.method = "throw";
                _0x3bdbae.arg = _0x16bbc2.arg;
              }
            }
          };
        }
        function _0x3e57a6(_0xf35b4a, _0x18a558) {
          var _0x15429e = _0x18a558.method;
          var _0x31b2bc = _0xf35b4a.iterator[_0x15429e];
          if (_0x31b2bc === _0x29ee9e) {
            _0x18a558.delegate = null;
            if (_0x15429e !== "throw" || !_0xf35b4a.iterator.return || !(_0x18a558.method = "return", _0x18a558.arg = _0x29ee9e, _0x3e57a6(_0xf35b4a, _0x18a558), _0x18a558.method === "throw")) {
              if (_0x15429e !== "return") {
                _0x18a558.method = "throw";
                _0x18a558.arg = new TypeError("The iterator does not provide a '" + _0x15429e + "' method");
              }
            }
            return _0x585643;
          }
          var _0x282ba0 = _0x35ad76(_0x31b2bc, _0xf35b4a.iterator, _0x18a558.arg);
          if (_0x282ba0.type === "throw") {
            _0x18a558.method = "throw";
            _0x18a558.arg = _0x282ba0.arg;
            _0x18a558.delegate = null;
            return _0x585643;
          }
          var _0x5f00ac = _0x282ba0.arg;
          if (_0x5f00ac) {
            if (_0x5f00ac.done) {
              _0x18a558[_0xf35b4a.resultName] = _0x5f00ac.value;
              _0x18a558.next = _0xf35b4a.nextLoc;
              if (_0x18a558.method !== "return") {
                _0x18a558.method = "next";
                _0x18a558.arg = _0x29ee9e;
              }
              _0x18a558.delegate = null;
              return _0x585643;
            } else {
              return _0x5f00ac;
            }
          } else {
            _0x18a558.method = "throw";
            _0x18a558.arg = new TypeError("iterator result is not an object");
            _0x18a558.delegate = null;
            return _0x585643;
          }
        }
        function _0x539b1e(_0x246224) {
          var _0x31206c = {
            tryLoc: _0x246224[0]
          };
          if (1 in _0x246224) {
            _0x31206c.catchLoc = _0x246224[1];
          }
          if (2 in _0x246224) {
            _0x31206c.finallyLoc = _0x246224[2];
            _0x31206c.afterLoc = _0x246224[3];
          }
          this.tryEntries.push(_0x31206c);
        }
        function _0x5d15dc(_0x4c2701) {
          var _0x370a40 = _0x4c2701.completion || {};
          _0x370a40.type = "normal";
          delete _0x370a40.arg;
          _0x4c2701.completion = _0x370a40;
        }
        function _0x3642b9(_0x52f6ea) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          _0x52f6ea.forEach(_0x539b1e, this);
          this.reset(true);
        }
        function _0x101c62(_0x36e6af) {
          if (_0x36e6af || _0x36e6af === "") {
            var _0x281b2f = _0x36e6af[_0x445f0f];
            if (_0x281b2f) {
              return _0x281b2f.call(_0x36e6af);
            }
            if (typeof _0x36e6af.next == "function") {
              return _0x36e6af;
            }
            if (!isNaN(_0x36e6af.length)) {
              var _0x2727c6 = -1;
              var _0x122c14 = function _0x49b38f() {
                while (++_0x2727c6 < _0x36e6af.length) {
                  if (_0x145fa9.call(_0x36e6af, _0x2727c6)) {
                    _0x49b38f.value = _0x36e6af[_0x2727c6];
                    _0x49b38f.done = false;
                    return _0x49b38f;
                  }
                }
                _0x49b38f.value = _0x29ee9e;
                _0x49b38f.done = true;
                return _0x49b38f;
              };
              return _0x122c14.next = _0x122c14;
            }
          }
          throw new TypeError(_0x5eb71e(_0x36e6af) + " is not iterable");
        }
        _0x2aa393.prototype = _0x4ad116;
        _0x2cefa0(_0x2a2e7f, "constructor", {
          value: _0x4ad116,
          configurable: true
        });
        _0x2cefa0(_0x4ad116, "constructor", {
          value: _0x2aa393,
          configurable: true
        });
        _0x2aa393.displayName = _0x317d41(_0x4ad116, _0x8159f8, "GeneratorFunction");
        _0x500a06.isGeneratorFunction = function (_0x1cc7d1) {
          var _0x5cef2d = typeof _0x1cc7d1 == "function" && _0x1cc7d1.constructor;
          return !!_0x5cef2d && (_0x5cef2d === _0x2aa393 || (_0x5cef2d.displayName || _0x5cef2d.name) === "GeneratorFunction");
        };
        _0x500a06.mark = function (_0x29ff50) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x29ff50, _0x4ad116);
          } else {
            _0x29ff50.__proto__ = _0x4ad116;
            _0x317d41(_0x29ff50, _0x8159f8, "GeneratorFunction");
          }
          _0x29ff50.prototype = Object.create(_0x2a2e7f);
          return _0x29ff50;
        };
        _0x500a06.awrap = function (_0x39c58b) {
          return {
            __await: _0x39c58b
          };
        };
        _0x57518e(_0x7d47c0.prototype);
        _0x317d41(_0x7d47c0.prototype, _0x290512, function () {
          return this;
        });
        _0x500a06.AsyncIterator = _0x7d47c0;
        _0x500a06.async = function (_0x3f14fd, _0x36c455, _0x21ee24, _0x490653, _0x444cbe = Promise) {
          var _0x3c896a = new _0x7d47c0(_0x12fd4a(_0x3f14fd, _0x36c455, _0x21ee24, _0x490653), _0x444cbe);
          if (_0x500a06.isGeneratorFunction(_0x36c455)) {
            return _0x3c896a;
          } else {
            return _0x3c896a.next().then(function (_0x589d5) {
              if (_0x589d5.done) {
                return _0x589d5.value;
              } else {
                return _0x3c896a.next();
              }
            });
          }
        };
        _0x57518e(_0x2a2e7f);
        _0x317d41(_0x2a2e7f, _0x8159f8, "Generator");
        _0x317d41(_0x2a2e7f, _0x445f0f, function () {
          return this;
        });
        _0x317d41(_0x2a2e7f, "toString", function () {
          return "[object Generator]";
        });
        _0x500a06.keys = function (_0xd9a0c8) {
          var _0x166d85 = Object(_0xd9a0c8);
          var _0x5bcc73 = [];
          for (var _0x4d95bf in _0x166d85) {
            _0x5bcc73.push(_0x4d95bf);
          }
          _0x5bcc73.reverse();
          return function _0x519bb7() {
            while (_0x5bcc73.length) {
              var _0x4088ef = _0x5bcc73.pop();
              if (_0x4088ef in _0x166d85) {
                _0x519bb7.value = _0x4088ef;
                _0x519bb7.done = false;
                return _0x519bb7;
              }
            }
            _0x519bb7.done = true;
            return _0x519bb7;
          };
        };
        _0x500a06.values = _0x101c62;
        _0x3642b9.prototype = {
          constructor: _0x3642b9,
          reset: function _0x1529ab(_0x44d7e8) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = _0x29ee9e;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = _0x29ee9e;
            this.tryEntries.forEach(_0x5d15dc);
            if (!_0x44d7e8) {
              for (var _0x1334b8 in this) {
                if (_0x1334b8.charAt(0) === "t" && _0x145fa9.call(this, _0x1334b8) && !isNaN(+_0x1334b8.slice(1))) {
                  this[_0x1334b8] = _0x29ee9e;
                }
              }
            }
          },
          stop: function _0xc09575() {
            this.done = true;
            var _0x214157 = this.tryEntries[0].completion;
            if (_0x214157.type === "throw") {
              throw _0x214157.arg;
            }
            return this.rval;
          },
          dispatchException: function _0x4efa91(_0x25a23d) {
            if (this.done) {
              throw _0x25a23d;
            }
            var _0x363b0b = this;
            function _0x567b91(_0x4fc95d, _0x2e3129) {
              _0x4b2584.type = "throw";
              _0x4b2584.arg = _0x25a23d;
              _0x363b0b.next = _0x4fc95d;
              if (_0x2e3129) {
                _0x363b0b.method = "next";
                _0x363b0b.arg = _0x29ee9e;
              }
              return !!_0x2e3129;
            }
            for (var _0x438db9 = this.tryEntries.length - 1; _0x438db9 >= 0; --_0x438db9) {
              var _0x5a183b = this.tryEntries[_0x438db9];
              var _0x4b2584 = _0x5a183b.completion;
              if (_0x5a183b.tryLoc === "root") {
                return _0x567b91("end");
              }
              if (_0x5a183b.tryLoc <= this.prev) {
                var _0x55e463 = _0x145fa9.call(_0x5a183b, "catchLoc");
                var _0x3189bc = _0x145fa9.call(_0x5a183b, "finallyLoc");
                if (_0x55e463 && _0x3189bc) {
                  if (this.prev < _0x5a183b.catchLoc) {
                    return _0x567b91(_0x5a183b.catchLoc, true);
                  }
                  if (this.prev < _0x5a183b.finallyLoc) {
                    return _0x567b91(_0x5a183b.finallyLoc);
                  }
                } else if (_0x55e463) {
                  if (this.prev < _0x5a183b.catchLoc) {
                    return _0x567b91(_0x5a183b.catchLoc, true);
                  }
                } else {
                  if (!_0x3189bc) {
                    throw Error("try statement without catch or finally");
                  }
                  if (this.prev < _0x5a183b.finallyLoc) {
                    return _0x567b91(_0x5a183b.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt: function _0x4cc065(_0x95a7f3, _0x4f5b9e) {
            for (var _0x18a9e3 = this.tryEntries.length - 1; _0x18a9e3 >= 0; --_0x18a9e3) {
              var _0x406408 = this.tryEntries[_0x18a9e3];
              if (_0x406408.tryLoc <= this.prev && _0x145fa9.call(_0x406408, "finallyLoc") && this.prev < _0x406408.finallyLoc) {
                var _0x514217 = _0x406408;
                break;
              }
            }
            if (_0x514217 && (_0x95a7f3 === "break" || _0x95a7f3 === "continue") && _0x514217.tryLoc <= _0x4f5b9e && _0x4f5b9e <= _0x514217.finallyLoc) {
              _0x514217 = null;
            }
            var _0x1ef228 = _0x514217 ? _0x514217.completion : {};
            _0x1ef228.type = _0x95a7f3;
            _0x1ef228.arg = _0x4f5b9e;
            if (_0x514217) {
              this.method = "next";
              this.next = _0x514217.finallyLoc;
              return _0x585643;
            } else {
              return this.complete(_0x1ef228);
            }
          },
          complete: function _0x613d35(_0x445171, _0x47a9a3) {
            if (_0x445171.type === "throw") {
              throw _0x445171.arg;
            }
            if (_0x445171.type === "break" || _0x445171.type === "continue") {
              this.next = _0x445171.arg;
            } else if (_0x445171.type === "return") {
              this.rval = this.arg = _0x445171.arg;
              this.method = "return";
              this.next = "end";
            } else if (_0x445171.type === "normal" && _0x47a9a3) {
              this.next = _0x47a9a3;
            }
            return _0x585643;
          },
          finish: function _0x5c6bcd(_0x2a05d7) {
            for (var _0x4066d2 = this.tryEntries.length - 1; _0x4066d2 >= 0; --_0x4066d2) {
              var _0x52d313 = this.tryEntries[_0x4066d2];
              if (_0x52d313.finallyLoc === _0x2a05d7) {
                this.complete(_0x52d313.completion, _0x52d313.afterLoc);
                _0x5d15dc(_0x52d313);
                return _0x585643;
              }
            }
          },
          catch: function _0x4b1b37(_0x5b96eb) {
            for (var _0x58d763 = this.tryEntries.length - 1; _0x58d763 >= 0; --_0x58d763) {
              var _0x3c4191 = this.tryEntries[_0x58d763];
              if (_0x3c4191.tryLoc === _0x5b96eb) {
                var _0x25f3c8 = _0x3c4191.completion;
                if (_0x25f3c8.type === "throw") {
                  var _0x30cc2e = _0x25f3c8.arg;
                  _0x5d15dc(_0x3c4191);
                }
                return _0x30cc2e;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function _0x55751d(_0x1f926f, _0xb83f78, _0x491391) {
            this.delegate = {
              iterator: _0x101c62(_0x1f926f),
              resultName: _0xb83f78,
              nextLoc: _0x491391
            };
            if (this.method === "next") {
              this.arg = _0x29ee9e;
            }
            return _0x585643;
          }
        };
        return _0x500a06;
      }
      function _0x2c58b1(_0x1e75d1, _0x6989c3, _0x43d56f, _0x18cde0, _0x5c9bc3, _0x35835a, _0x4b707b) {
        try {
          var _0x3bbe04 = _0x1e75d1[_0x35835a](_0x4b707b);
          var _0x5f2f7d = _0x3bbe04.value;
        } catch (_0x302886) {
          _0x43d56f(_0x302886);
          return;
        }
        if (_0x3bbe04.done) {
          _0x6989c3(_0x5f2f7d);
        } else {
          Promise.resolve(_0x5f2f7d).then(_0x18cde0, _0x5c9bc3);
        }
      }
      function _0xbb0189(_0x280306) {
        return function () {
          var _0x2a196d = this;
          var _0x19cdc2 = arguments;
          return new Promise(function (_0x5831b4, _0x1ec4c4) {
            var _0x365db6 = _0x280306.apply(_0x2a196d, _0x19cdc2);
            function _0x10d895(_0x1d09bc) {
              _0x2c58b1(_0x365db6, _0x5831b4, _0x1ec4c4, _0x10d895, _0x42574d, "next", _0x1d09bc);
            }
            function _0x42574d(_0x11e91f) {
              _0x2c58b1(_0x365db6, _0x5831b4, _0x1ec4c4, _0x10d895, _0x42574d, "throw", _0x11e91f);
            }
            _0x10d895(undefined);
          });
        };
      }
      function _0x5eb71e(_0x5ab5ab) {
        '@babel/helpers - typeof';

        _0x5eb71e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x5a2b84) {
          return typeof _0x5a2b84;
        } : function (_0xf13277) {
          if (_0xf13277 && typeof Symbol == "function" && _0xf13277.constructor === Symbol && _0xf13277 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof _0xf13277;
          }
        };
        return _0x5eb71e(_0x5ab5ab);
      }
      var _0xdfcc37 = 0;
      window.URLSERV_WORMWORLD = _0xdfcc37 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = _0xdfcc37 ? "http://localhost:3000" : "";
      window.URL_CDN_B = _0xdfcc37 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = _0xdfcc37;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var _0x58e058 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var _0x387e58 = true;
      var _0x57e7ff = true;
      var _0x3320e7 = false;
      var _0x4ac6e2 = 18;
      window.backgroundArena = [{
        nome: "Default",
        uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
      }, {
        nome: "aRENA",
        uri: window.URL_CDN + "0000#"
      }, {
        nome: "ARENA 2",
        uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_10.png"
      }, {
        nome: "ARENA 3",
        uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_7.png"
      }, {
        nome: "Blue Light",
        uri: window.URL_CDN + "https://timmapwormate.com/images/store/bg_sky__6.png"
      }, {
                nome: "Blue Light1",
        uri: window.URL_CDN + "https://timmapwormate.com/images/store/bg_sky_9.png"
      }, {
        nome: "Desert",
        uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
      }, {
        nome: "Textil",
        uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
      }, {
        nome: "Sky Blue",
        uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
      }, {
        nome: "Sky Purp",
        uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
      }, {
        nome: "Sky Violet",
        uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
      }, {
        nome: "Sky Orange",
        uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
      }, {
        nome: "Sky Write",
        uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
      }, {
        nome: "Arena 1",
        uri: window.URL_CDN + "/backgrounds/arena01.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 2",
        uri: window.URL_CDN + "/backgrounds/arena02.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 3",
        uri: window.URL_CDN + "/backgrounds/arena03.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 4",
        uri: window.URL_CDN + "/backgrounds/arena04.png",
        w: 1100,
        h: 1100
      }];
      (function (_0x3acc80) {
        if ((typeof exports === "undefined" ? "undefined" : _0x5eb71e(exports)) === "object" && "object" !== "undefined") {
          _0x11bfa2.exports = _0x3acc80();
        } else if (typeof define === "function" && _0x49ea60.amdO) {
          define([], _0x3acc80);
        } else {
          var _0xffd7e4;
          if (typeof window !== "undefined") {
            _0xffd7e4 = window;
          } else if (typeof _0x49ea60.g !== "undefined") {
            _0xffd7e4 = _0x49ea60.g;
          } else if (typeof self !== "undefined") {
            _0xffd7e4 = self;
          } else {
            _0xffd7e4 = this;
          }
          _0xffd7e4.nipplejs = _0x3acc80();
        }
      })(function () {
        var _0x461db5;
        var _0x172f5e;
        var _0x26b976;
        "use strict";
        var _0x3bec25 = !!("ontouchstart" in window);
        var _0x4920b3 = window.PointerEvent ? true : false;
        var _0x27605c = window.MSPointerEvent ? true : false;
        var _0x1f0660 = {
          touch: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend, touchcancel"
          },
          mouse: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          },
          pointer: {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup, pointercancel"
          },
          MSPointer: {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
          }
        };
        var _0x3f4016;
        var _0x212965 = {};
        if (_0x4920b3) {
          _0x3f4016 = _0x1f0660.pointer;
        } else if (_0x27605c) {
          _0x3f4016 = _0x1f0660.MSPointer;
        } else if (_0x3bec25) {
          _0x3f4016 = _0x1f0660.touch;
          _0x212965 = _0x1f0660.mouse;
        } else {
          _0x3f4016 = _0x1f0660.mouse;
        }
        var _0x4e6ec9 = {};
        _0x4e6ec9.distance = function (_0x3cfc82, _0x41f40a) {
          var _0x4769a1 = _0x41f40a.x - _0x3cfc82.x;
          var _0x2185c5 = _0x41f40a.y - _0x3cfc82.y;
          return Math.sqrt(_0x4769a1 * _0x4769a1 + _0x2185c5 * _0x2185c5);
        };
        _0x4e6ec9.angle = function (_0x15ce3e, _0x4745f6) {
          var _0x1a0209 = _0x4745f6.x - _0x15ce3e.x;
          var _0x5ec7d3 = _0x4745f6.y - _0x15ce3e.y;
          return _0x4e6ec9.degrees(Math.atan2(_0x5ec7d3, _0x1a0209));
        };
        _0x4e6ec9.findCoord = function (_0x312cd4, _0x513f53, _0x5888b6) {
          var _0x150f5b = {
            x: 0,
            y: 0
          };
          _0x5888b6 = _0x4e6ec9.radians(_0x5888b6);
          _0x150f5b.x = _0x312cd4.x - _0x513f53 * Math.cos(_0x5888b6);
          _0x150f5b.y = _0x312cd4.y - _0x513f53 * Math.sin(_0x5888b6);
          return _0x150f5b;
        };
        _0x4e6ec9.radians = function (_0x3c6236) {
          return _0x3c6236 * (Math.PI / 180);
        };
        _0x4e6ec9.degrees = function (_0x409f4d) {
          return _0x409f4d * (180 / Math.PI);
        };
        _0x4e6ec9.bindEvt = function (_0x1e4443, _0x3e6f4b, _0x321887) {
          var _0x4e552b = _0x3e6f4b.split(/[ ,]+/g);
          var _0x2efd33;
          for (var _0x8109b5 = 0; _0x8109b5 < _0x4e552b.length; _0x8109b5 += 1) {
            _0x2efd33 = _0x4e552b[_0x8109b5];
            if (_0x1e4443.addEventListener) {
              _0x1e4443.addEventListener(_0x2efd33, _0x321887, false);
            } else if (_0x1e4443.attachEvent) {
              _0x1e4443.attachEvent(_0x2efd33, _0x321887);
            }
          }
        };
        _0x4e6ec9.unbindEvt = function (_0x10d356, _0x10d3a3, _0x46b50d) {
          var _0x42f8d5 = _0x10d3a3.split(/[ ,]+/g);
          var _0x2dee81;
          for (var _0x4394ab = 0; _0x4394ab < _0x42f8d5.length; _0x4394ab += 1) {
            _0x2dee81 = _0x42f8d5[_0x4394ab];
            if (_0x10d356.removeEventListener) {
              _0x10d356.removeEventListener(_0x2dee81, _0x46b50d);
            } else if (_0x10d356.detachEvent) {
              _0x10d356.detachEvent(_0x2dee81, _0x46b50d);
            }
          }
        };
        _0x4e6ec9.trigger = function (_0x5bc4c8, _0x11073f, _0x3b2520) {
          var _0x2be436 = new CustomEvent(_0x11073f, _0x3b2520);
          _0x5bc4c8.dispatchEvent(_0x2be436);
        };
        _0x4e6ec9.prepareEvent = function (_0x13c71f) {
          _0x13c71f.preventDefault();
          if (_0x13c71f.type.match(/^touch/)) {
            return _0x13c71f.changedTouches;
          } else {
            return _0x13c71f;
          }
        };
        _0x4e6ec9.getScroll = function () {
          var _0x47028c = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var _0x11918e = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: _0x47028c,
            y: _0x11918e
          };
        };
        _0x4e6ec9.applyPosition = function (_0x214fbd, _0x3e5687) {
          if (_0x3e5687.top || _0x3e5687.right || _0x3e5687.bottom || _0x3e5687.left) {
            _0x214fbd.style.top = _0x3e5687.top;
            _0x214fbd.style.right = _0x3e5687.right;
            _0x214fbd.style.bottom = _0x3e5687.bottom;
            _0x214fbd.style.left = _0x3e5687.left;
          } else {
            _0x214fbd.style.left = _0x3e5687.x + "px";
            _0x214fbd.style.top = _0x3e5687.y + "px";
          }
        };
        _0x4e6ec9.getTransitionStyle = function (_0x3f20e1, _0x45789e, _0x4b6adc) {
          var _0x366d93 = _0x4e6ec9.configStylePropertyObject(_0x3f20e1);
          for (var _0x4c8d96 in _0x366d93) {
            if (_0x366d93.hasOwnProperty(_0x4c8d96)) {
              if (typeof _0x45789e === "string") {
                _0x366d93[_0x4c8d96] = _0x45789e + " " + _0x4b6adc;
              } else {
                var _0xaa8317 = "";
                for (var _0x35140c = 0, _0x27cc90 = _0x45789e.length; _0x35140c < _0x27cc90; _0x35140c += 1) {
                  _0xaa8317 += _0x45789e[_0x35140c] + " " + _0x4b6adc + ", ";
                }
                _0x366d93[_0x4c8d96] = _0xaa8317.slice(0, -2);
              }
            }
          }
          return _0x366d93;
        };
        _0x4e6ec9.getVendorStyle = function (_0x4a5d41, _0x150f59) {
          var _0x1e1b26 = _0x4e6ec9.configStylePropertyObject(_0x4a5d41);
          for (var _0x19da35 in _0x1e1b26) {
            if (_0x1e1b26.hasOwnProperty(_0x19da35)) {
              _0x1e1b26[_0x19da35] = _0x150f59;
            }
          }
          return _0x1e1b26;
        };
        _0x4e6ec9.configStylePropertyObject = function (_0x1dabde) {
          var _0x55391c = {
            [_0x1dabde]: ""
          };
          var _0x3889c2 = ["webkit", "Moz", "o"];
          _0x3889c2.forEach(function (_0x20620d) {
            _0x55391c[_0x20620d + _0x1dabde.charAt(0).toUpperCase() + _0x1dabde.slice(1)] = "";
          });
          return _0x55391c;
        };
        _0x4e6ec9.extend = function (_0x2ba4b0, _0x305749) {
          for (var _0x5141b0 in _0x305749) {
            if (_0x305749.hasOwnProperty(_0x5141b0)) {
              _0x2ba4b0[_0x5141b0] = _0x305749[_0x5141b0];
            }
          }
          return _0x2ba4b0;
        };
        _0x4e6ec9.safeExtend = function (_0x4203dd, _0xb19935) {
          var _0x1c5014 = {};
          for (var _0x500924 in _0x4203dd) {
            if (_0x4203dd.hasOwnProperty(_0x500924) && _0xb19935.hasOwnProperty(_0x500924)) {
              _0x1c5014[_0x500924] = _0xb19935[_0x500924];
            } else if (_0x4203dd.hasOwnProperty(_0x500924)) {
              _0x1c5014[_0x500924] = _0x4203dd[_0x500924];
            }
          }
          return _0x1c5014;
        };
        _0x4e6ec9.map = function (_0xff886b, _0x4e5403) {
          if (_0xff886b.length) {
            for (var _0x188057 = 0, _0x327774 = _0xff886b.length; _0x188057 < _0x327774; _0x188057 += 1) {
              _0x4e5403(_0xff886b[_0x188057]);
            }
          } else {
            _0x4e5403(_0xff886b);
          }
        };
        function _0x44dcb2() {}
        ;
        _0x44dcb2.prototype.on = function (_0x163e9e, _0x33de1b) {
          var _0x1e451b = this;
          var _0xd11a85 = _0x163e9e.split(/[ ,]+/g);
          var _0x1599f6;
          _0x1e451b._handlers_ = _0x1e451b._handlers_ || {};
          for (var _0xc06efc = 0; _0xc06efc < _0xd11a85.length; _0xc06efc += 1) {
            _0x1599f6 = _0xd11a85[_0xc06efc];
            _0x1e451b._handlers_[_0x1599f6] = _0x1e451b._handlers_[_0x1599f6] || [];
            _0x1e451b._handlers_[_0x1599f6].push(_0x33de1b);
          }
          return _0x1e451b;
        };
        _0x44dcb2.prototype.off = function (_0x21518d, _0x26a016) {
          var _0xaba72b = this;
          _0xaba72b._handlers_ = _0xaba72b._handlers_ || {};
          if (_0x21518d === undefined) {
            _0xaba72b._handlers_ = {};
          } else if (_0x26a016 === undefined) {
            _0xaba72b._handlers_[_0x21518d] = null;
          } else if (_0xaba72b._handlers_[_0x21518d] && _0xaba72b._handlers_[_0x21518d].indexOf(_0x26a016) >= 0) {
            _0xaba72b._handlers_[_0x21518d].splice(_0xaba72b._handlers_[_0x21518d].indexOf(_0x26a016), 1);
          }
          return _0xaba72b;
        };
        _0x44dcb2.prototype.trigger = function (_0x2b0a43, _0x89a861) {
          var _0x36b25f = this;
          var _0x52243d = _0x2b0a43.split(/[ ,]+/g);
          var _0x3e2c2c;
          _0x36b25f._handlers_ = _0x36b25f._handlers_ || {};
          for (var _0x16c1cd = 0; _0x16c1cd < _0x52243d.length; _0x16c1cd += 1) {
            _0x3e2c2c = _0x52243d[_0x16c1cd];
            if (_0x36b25f._handlers_[_0x3e2c2c] && _0x36b25f._handlers_[_0x3e2c2c].length) {
              _0x36b25f._handlers_[_0x3e2c2c].forEach(function (_0x2df65c) {
                _0x2df65c.call(_0x36b25f, {
                  type: _0x3e2c2c,
                  target: _0x36b25f
                }, _0x89a861);
              });
            }
          }
        };
        _0x44dcb2.prototype.config = function (_0x2e35e9) {
          var _0x3ace1 = this;
          _0x3ace1.options = _0x3ace1.defaults || {};
          if (_0x2e35e9) {
            _0x3ace1.options = _0x4e6ec9.safeExtend(_0x3ace1.options, _0x2e35e9);
          }
        };
        _0x44dcb2.prototype.bindEvt = function (_0x4f7001, _0x3998e3) {
          var _0x369c78 = this;
          _0x369c78._domHandlers_ = _0x369c78._domHandlers_ || {};
          _0x369c78._domHandlers_[_0x3998e3] = function () {
            if (typeof _0x369c78["on" + _0x3998e3] === "function") {
              _0x369c78["on" + _0x3998e3].apply(_0x369c78, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + _0x3998e3 + "\" handler.");
            }
          };
          _0x4e6ec9.bindEvt(_0x4f7001, _0x3f4016[_0x3998e3], _0x369c78._domHandlers_[_0x3998e3]);
          if (_0x212965[_0x3998e3]) {
            _0x4e6ec9.bindEvt(_0x4f7001, _0x212965[_0x3998e3], _0x369c78._domHandlers_[_0x3998e3]);
          }
          return _0x369c78;
        };
        _0x44dcb2.prototype.unbindEvt = function (_0xb57ec9, _0x5defce) {
          var _0x1a4ea0 = this;
          _0x1a4ea0._domHandlers_ = _0x1a4ea0._domHandlers_ || {};
          _0x4e6ec9.unbindEvt(_0xb57ec9, _0x3f4016[_0x5defce], _0x1a4ea0._domHandlers_[_0x5defce]);
          if (_0x212965[_0x5defce]) {
            _0x4e6ec9.unbindEvt(_0xb57ec9, _0x212965[_0x5defce], _0x1a4ea0._domHandlers_[_0x5defce]);
          }
          delete _0x1a4ea0._domHandlers_[_0x5defce];
          return this;
        };
        function _0x4bbc82(_0x2d0f23, _0x2ac7f8) {
          this.identifier = _0x2ac7f8.identifier;
          this.position = _0x2ac7f8.position;
          this.frontPosition = _0x2ac7f8.frontPosition;
          this.collection = _0x2d0f23;
          this.defaults = {
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            mode: "dynamic",
            zone: document.body,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          this.config(_0x2ac7f8);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = _0x4bbc82.id;
          _0x4bbc82.id += 1;
          this.buildEl().stylize();
          this.instance = {
            el: this.ui.el,
            on: this.on.bind(this),
            off: this.off.bind(this),
            show: this.show.bind(this),
            hide: this.hide.bind(this),
            add: this.addToDom.bind(this),
            remove: this.removeFromDom.bind(this),
            destroy: this.destroy.bind(this),
            resetDirection: this.resetDirection.bind(this),
            computeDirection: this.computeDirection.bind(this),
            trigger: this.trigger.bind(this),
            position: this.position,
            frontPosition: this.frontPosition,
            ui: this.ui,
            identifier: this.identifier,
            id: this.id,
            options: this.options
          };
          return this.instance;
        }
        ;
        _0x4bbc82.prototype = new _0x44dcb2();
        _0x4bbc82.constructor = _0x4bbc82;
        _0x4bbc82.id = 0;
        _0x4bbc82.prototype.buildEl = function (_0x3a85fd) {
          this.ui = {};
          if (this.options.dataOnly) {
            return this;
          }
          this.ui.el = document.createElement("div");
          this.ui.back = document.createElement("div");
          this.ui.front = document.createElement("div");
          this.ui.el.className = "nipple collection_" + this.collection.id;
          this.ui.back.className = "back";
          this.ui.front.className = "front";
          this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
          this.ui.el.appendChild(this.ui.back);
          this.ui.el.appendChild(this.ui.front);
          return this;
        };
        _0x4bbc82.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var _0x139b1e = this.options.fadeTime + "ms";
          var _0x5e43ff = _0x4e6ec9.getVendorStyle("borderRadius", "50%");
          var _0x178789 = _0x4e6ec9.getTransitionStyle("transition", "opacity", _0x139b1e);
          var _0xb29425 = {
            el: {
              position: "absolute",
              opacity: this.options.restOpacity,
              display: "unblock",
              zIndex: 999
            },
            back: {
              position: "absolute",
              display: "unblock",
              width: this.options.size + "px",
              height: this.options.size + "px",
              marginLeft: -this.options.size / 2 + "px",
              marginTop: -this.options.size / 2 + "px",
              background: this.options.color,
              opacity: ".5"
            },
            front: {
              width: this.options.size / 2 + "px",
              height: this.options.size / 2 + "px",
              position: "absolute",
              display: "unblock",
              marginLeft: -this.options.size / 4 + "px",
              marginTop: -this.options.size / 4 + "px",
              background: this.options.color,
              opacity: ".5"
            }
          };
          _0x4e6ec9.extend(_0xb29425.el, _0x178789);
          _0x4e6ec9.extend(_0xb29425.back, _0x5e43ff);
          _0x4e6ec9.extend(_0xb29425.front, _0x5e43ff);
          this.applyStyles(_0xb29425);
          return this;
        };
        _0x4bbc82.prototype.applyStyles = function (_0x584812) {
          for (var _0x5de70a in this.ui) {
            if (this.ui.hasOwnProperty(_0x5de70a)) {
              for (var _0x1d23a0 in _0x584812[_0x5de70a]) {
                this.ui[_0x5de70a].style[_0x1d23a0] = _0x584812[_0x5de70a][_0x1d23a0];
              }
            }
          }
          return this;
        };
        _0x4bbc82.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        _0x4bbc82.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        _0x4bbc82.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        _0x4bbc82.prototype.show = function (_0x4d118a) {
          var _0x3c0bd5 = this;
          if (_0x3c0bd5.options.dataOnly) {
            return _0x3c0bd5;
          }
          clearTimeout(_0x3c0bd5.removeTimeout);
          clearTimeout(_0x3c0bd5.showTimeout);
          clearTimeout(_0x3c0bd5.restTimeout);
          _0x3c0bd5.addToDom();
          _0x3c0bd5.restCallback();
          setTimeout(function () {
            _0x3c0bd5.ui.el.style.opacity = 1;
          }, 0);
          _0x3c0bd5.showTimeout = setTimeout(function () {
            _0x3c0bd5.trigger("shown", _0x3c0bd5.instance);
            if (typeof _0x4d118a === "function") {
              _0x4d118a.call(this);
            }
          }, _0x3c0bd5.options.fadeTime);
          return _0x3c0bd5;
        };
        _0x4bbc82.prototype.hide = function (_0xa09027) {
          var _0x1ed782 = this;
          if (_0x1ed782.options.dataOnly) {
            return _0x1ed782;
          }
          _0x1ed782.ui.el.style.opacity = _0x1ed782.options.restOpacity;
          clearTimeout(_0x1ed782.removeTimeout);
          clearTimeout(_0x1ed782.showTimeout);
          clearTimeout(_0x1ed782.restTimeout);
          _0x1ed782.removeTimeout = setTimeout(function () {
            var _0x1b1b84 = _0x1ed782.options.mode === "dynamic" ? "none" : "unblock";
            _0x1ed782.ui.el.style.display = _0x1b1b84;
            if (typeof _0xa09027 === "function") {
              _0xa09027.call(_0x1ed782);
            }
            _0x1ed782.trigger("hidden", _0x1ed782.instance);
          }, _0x1ed782.options.fadeTime);
          if (_0x1ed782.options.restJoystick) {
            _0x1ed782.restPosition();
          }
          return _0x1ed782;
        };
        _0x4bbc82.prototype.restPosition = function (_0x4c0205) {
          var _0x2c8bc8 = this;
          _0x2c8bc8.frontPosition = {
            x: 0,
            y: 0
          };
          var _0x3b0288 = _0x2c8bc8.options.fadeTime + "ms";
          var _0x240cef = {};
          _0x240cef.front = _0x4e6ec9.getTransitionStyle("transition", ["top", "left"], _0x3b0288);
          var _0x194b45 = {
            front: {}
          };
          _0x194b45.front = {
            left: _0x2c8bc8.frontPosition.x + "px",
            top: _0x2c8bc8.frontPosition.y + "px"
          };
          _0x2c8bc8.applyStyles(_0x240cef);
          _0x2c8bc8.applyStyles(_0x194b45);
          _0x2c8bc8.restTimeout = setTimeout(function () {
            if (typeof _0x4c0205 === "function") {
              _0x4c0205.call(_0x2c8bc8);
            }
            _0x2c8bc8.restCallback();
          }, _0x2c8bc8.options.fadeTime);
        };
        _0x4bbc82.prototype.restCallback = function () {
          var _0x4c1a8f = this;
          var _0x132561 = {};
          _0x132561.front = _0x4e6ec9.getTransitionStyle("transition", "none", "");
          _0x4c1a8f.applyStyles(_0x132561);
          _0x4c1a8f.trigger("rested", _0x4c1a8f.instance);
        };
        _0x4bbc82.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        _0x4bbc82.prototype.computeDirection = function (_0x239f5d) {
          var _0x1d6ed4 = _0x239f5d.angle.radian;
          var _0x14ed65 = Math.PI / 4;
          var _0x20a880 = Math.PI / 2;
          var _0x5f8f4f;
          var _0x4754fa;
          var _0x2db5fe;
          if (_0x1d6ed4 > _0x14ed65 && _0x1d6ed4 < _0x14ed65 * 3 && !_0x239f5d.lockX) {
            _0x5f8f4f = "up";
          } else if (_0x1d6ed4 > -_0x14ed65 && _0x1d6ed4 <= _0x14ed65 && !_0x239f5d.lockY) {
            _0x5f8f4f = "left";
          } else if (_0x1d6ed4 > -_0x14ed65 * 3 && _0x1d6ed4 <= -_0x14ed65 && !_0x239f5d.lockX) {
            _0x5f8f4f = "down";
          } else if (!_0x239f5d.lockY) {
            _0x5f8f4f = "right";
          }
          if (!_0x239f5d.lockY) {
            if (_0x1d6ed4 > -_0x20a880 && _0x1d6ed4 < _0x20a880) {
              _0x4754fa = "left";
            } else {
              _0x4754fa = "right";
            }
          }
          if (!_0x239f5d.lockX) {
            if (_0x1d6ed4 > 0) {
              _0x2db5fe = "up";
            } else {
              _0x2db5fe = "down";
            }
          }
          if (_0x239f5d.force > this.options.threshold) {
            var _0x304d42 = {};
            for (var _0x21fce3 in this.direction) {
              if (this.direction.hasOwnProperty(_0x21fce3)) {
                _0x304d42[_0x21fce3] = this.direction[_0x21fce3];
              }
            }
            var _0x10140f = {};
            this.direction = {
              x: _0x4754fa,
              y: _0x2db5fe,
              angle: _0x5f8f4f
            };
            _0x239f5d.direction = this.direction;
            for (var _0x21fce3 in _0x304d42) {
              if (_0x304d42[_0x21fce3] === this.direction[_0x21fce3]) {
                _0x10140f[_0x21fce3] = true;
              }
            }
            if (_0x10140f.x && _0x10140f.y && _0x10140f.angle) {
              return _0x239f5d;
            }
            if (!_0x10140f.x || !_0x10140f.y) {
              this.trigger("plain", _0x239f5d);
            }
            if (!_0x10140f.x) {
              this.trigger("plain:" + _0x4754fa, _0x239f5d);
            }
            if (!_0x10140f.y) {
              this.trigger("plain:" + _0x2db5fe, _0x239f5d);
            }
            if (!_0x10140f.angle) {
              this.trigger("dir dir:" + _0x5f8f4f, _0x239f5d);
            }
          }
          return _0x239f5d;
        };
        function _0x3e0d42(_0x6ababa, _0x41545c) {
          var _0x59dcf3 = this;
          _0x59dcf3.nipples = [];
          _0x59dcf3.idles = [];
          _0x59dcf3.actives = [];
          _0x59dcf3.ids = [];
          _0x59dcf3.pressureIntervals = {};
          _0x59dcf3.manager = _0x6ababa;
          _0x59dcf3.id = _0x3e0d42.id;
          _0x3e0d42.id += 1;
          _0x59dcf3.defaults = {
            zone: document.body,
            multitouch: false,
            maxNumberOfNipples: 10,
            mode: "dynamic",
            position: {
              top: 0,
              left: 0
            },
            catchDistance: 200,
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          _0x59dcf3.config(_0x41545c);
          if (_0x59dcf3.options.mode === "static" || _0x59dcf3.options.mode === "semi") {
            _0x59dcf3.options.multitouch = false;
          }
          if (!_0x59dcf3.options.multitouch) {
            _0x59dcf3.options.maxNumberOfNipples = 1;
          }
          _0x59dcf3.updateBox();
          _0x59dcf3.prepareNipples();
          _0x59dcf3.bindings();
          _0x59dcf3.begin();
          return _0x59dcf3.nipples;
        }
        _0x3e0d42.prototype = new _0x44dcb2();
        _0x3e0d42.constructor = _0x3e0d42;
        _0x3e0d42.id = 0;
        _0x3e0d42.prototype.prepareNipples = function () {
          var _0x5c8fd2 = this;
          var _0x3e4645 = _0x5c8fd2.nipples;
          _0x3e4645.on = _0x5c8fd2.on.bind(_0x5c8fd2);
          _0x3e4645.off = _0x5c8fd2.off.bind(_0x5c8fd2);
          _0x3e4645.options = _0x5c8fd2.options;
          _0x3e4645.destroy = _0x5c8fd2.destroy.bind(_0x5c8fd2);
          _0x3e4645.ids = _0x5c8fd2.ids;
          _0x3e4645.id = _0x5c8fd2.id;
          _0x3e4645.processOnMove = _0x5c8fd2.processOnMove.bind(_0x5c8fd2);
          _0x3e4645.processOnEnd = _0x5c8fd2.processOnEnd.bind(_0x5c8fd2);
          _0x3e4645.get = function (_0x4dede9) {
            if (_0x4dede9 === undefined) {
              return _0x3e4645[0];
            }
            for (var _0x2a3824 = 0, _0xc397d = _0x3e4645.length; _0x2a3824 < _0xc397d; _0x2a3824 += 1) {
              if (_0x3e4645[_0x2a3824].identifier === _0x4dede9) {
                return _0x3e4645[_0x2a3824];
              }
            }
            return false;
          };
        };
        _0x3e0d42.prototype.bindings = function () {
          var _0x55d301 = this;
          _0x55d301.bindEvt(_0x55d301.options.zone, "start");
          _0x55d301.options.zone.style.touchAction = "none";
          _0x55d301.options.zone.style.msTouchAction = "none";
        };
        _0x3e0d42.prototype.begin = function () {
          var _0x3c9eba = this;
          var _0x1e6678 = _0x3c9eba.options;
          if (_0x1e6678.mode === "static") {
            var _0x59b536 = _0x3c9eba.createNipple(_0x1e6678.position, _0x3c9eba.manager.getIdentifier());
            _0x59b536.add();
            _0x3c9eba.idles.push(_0x59b536);
          }
        };
        _0x3e0d42.prototype.createNipple = function (_0x3b1a30, _0x1025ca) {
          var _0x115c72 = this;
          var _0x32c08b = _0x4e6ec9.getScroll();
          var _0x489547 = {};
          var _0x2d6d56 = _0x115c72.options;
          if (_0x3b1a30.x && _0x3b1a30.y) {
            _0x489547 = {
              x: _0x3b1a30.x - (_0x32c08b.x + _0x115c72.box.left),
              y: _0x3b1a30.y - (_0x32c08b.y + _0x115c72.box.top)
            };
          } else if (_0x3b1a30.top || _0x3b1a30.right || _0x3b1a30.bottom || _0x3b1a30.left) {
            var _0x4b3a30 = document.createElement("DIV");
            _0x4b3a30.style.display = "hidden";
            _0x4b3a30.style.top = _0x3b1a30.top;
            _0x4b3a30.style.right = _0x3b1a30.right;
            _0x4b3a30.style.bottom = _0x3b1a30.bottom;
            _0x4b3a30.style.left = _0x3b1a30.left;
            _0x4b3a30.style.position = "absolute";
            _0x2d6d56.zone.appendChild(_0x4b3a30);
            var _0x3c6dd8 = _0x4b3a30.getBoundingClientRect();
            _0x2d6d56.zone.removeChild(_0x4b3a30);
            _0x489547 = _0x3b1a30;
            _0x3b1a30 = {
              x: (_0x2d6d56.dumbBox ? _0x2d6d56.dumbBox.left : _0x3c6dd8.left) + _0x32c08b.x,
              y: (_0x2d6d56.dumbBox ? _0x2d6d56.dumbBox.top : _0x3c6dd8.top) + _0x32c08b.y
            };
          }
          var _0x23a8fb = new _0x4bbc82(_0x115c72, {
            color: _0x2d6d56.color,
            size: _0x2d6d56.size,
            threshold: _0x2d6d56.threshold,
            fadeTime: _0x2d6d56.fadeTime,
            dataOnly: _0x2d6d56.dataOnly,
            restJoystick: _0x2d6d56.restJoystick,
            restOpacity: _0x2d6d56.restOpacity,
            mode: _0x2d6d56.mode,
            identifier: _0x1025ca,
            position: _0x3b1a30,
            zone: _0x2d6d56.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!_0x2d6d56.dataOnly) {
            _0x4e6ec9.applyPosition(_0x23a8fb.ui.el, _0x489547);
            _0x4e6ec9.applyPosition(_0x23a8fb.ui.front, _0x23a8fb.frontPosition);
          }
          _0x115c72.nipples.push(_0x23a8fb);
          _0x115c72.trigger("added " + _0x23a8fb.identifier + ":added", _0x23a8fb);
          _0x115c72.manager.trigger("added " + _0x23a8fb.identifier + ":added", _0x23a8fb);
          _0x115c72.bindNipple(_0x23a8fb);
          return _0x23a8fb;
        };
        _0x3e0d42.prototype.updateBox = function () {
          var _0x5f1bfc = this;
          _0x5f1bfc.box = _0x5f1bfc.options.zone.getBoundingClientRect();
        };
        _0x3e0d42.prototype.bindNipple = function (_0x5a9505) {
          var _0x1f38da = this;
          var _0x6b0669;
          var _0x57b990 = function _0x3c121d(_0x17c979, _0x4c5601) {
            _0x6b0669 = _0x17c979.type + " " + _0x4c5601.id + ":" + _0x17c979.type;
            _0x1f38da.trigger(_0x6b0669, _0x4c5601);
          };
          _0x5a9505.on("destroyed", _0x1f38da.onDestroyed.bind(_0x1f38da));
          _0x5a9505.on("shown hidden rested dir plain", _0x57b990);
          _0x5a9505.on("dir:up dir:right dir:down dir:left", _0x57b990);
          _0x5a9505.on("plain:up plain:right plain:down plain:left", _0x57b990);
        };
        _0x3e0d42.prototype.pressureFn = function (_0x299381, _0xfcb8be, _0x39833e) {
          var _0x38c2ca = this;
          var _0x1efa67 = 0;
          clearInterval(_0x38c2ca.pressureIntervals[_0x39833e]);
          _0x38c2ca.pressureIntervals[_0x39833e] = setInterval(function () {
            var _0x9ad6e0 = _0x299381.force || _0x299381.pressure || _0x299381.webkitForce || 0;
            if (_0x9ad6e0 !== _0x1efa67) {
              _0xfcb8be.trigger("pressure", _0x9ad6e0);
              _0x38c2ca.trigger("pressure " + _0xfcb8be.identifier + ":pressure", _0x9ad6e0);
              _0x1efa67 = _0x9ad6e0;
            }
          }.bind(_0x38c2ca), 100);
        };
        _0x3e0d42.prototype.onstart = function (_0x4e08e1) {
          var _0xad1fcc = this;
          var _0xf5fe49 = _0xad1fcc.options;
          _0x4e08e1 = _0x4e6ec9.prepareEvent(_0x4e08e1);
          _0xad1fcc.updateBox();
          var _0x3c4394 = function _0x12a9e2(_0xd8b8d1) {
            if (_0xad1fcc.actives.length < _0xf5fe49.maxNumberOfNipples) {
              _0xad1fcc.processOnStart(_0xd8b8d1);
            }
          };
          _0x4e6ec9.map(_0x4e08e1, _0x3c4394);
          _0xad1fcc.manager.bindDocument();
          return false;
        };
        _0x3e0d42.prototype.processOnStart = function (_0x221f84) {
          var _0x119374 = this;
          var _0x5d7de6 = _0x119374.options;
          var _0x23b0a6;
          var _0x24d18a = _0x119374.manager.getIdentifier(_0x221f84);
          var _0x5e3bf3 = _0x221f84.force || _0x221f84.pressure || _0x221f84.webkitForce || 0;
          var _0x3ccec3 = {
            x: _0x221f84.pageX,
            y: _0x221f84.pageY
          };
          var _0x4a8ccc = _0x119374.getOrCreate(_0x24d18a, _0x3ccec3);
          if (_0x4a8ccc.identifier !== _0x24d18a) {
            _0x119374.manager.removeIdentifier(_0x4a8ccc.identifier);
          }
          _0x4a8ccc.identifier = _0x24d18a;
          var _0x591af8 = function _0x583d59(_0x2839f6) {
            _0x2839f6.trigger("start", _0x2839f6);
            _0x119374.trigger("start " + _0x2839f6.id + ":start", _0x2839f6);
            _0x2839f6.show();
            if (_0x5e3bf3 > 0) {
              _0x119374.pressureFn(_0x221f84, _0x2839f6, _0x2839f6.identifier);
            }
            _0x119374.processOnMove(_0x221f84);
          };
          if ((_0x23b0a6 = _0x119374.idles.indexOf(_0x4a8ccc)) >= 0) {
            _0x119374.idles.splice(_0x23b0a6, 1);
          }
          _0x119374.actives.push(_0x4a8ccc);
          _0x119374.ids.push(_0x4a8ccc.identifier);
          if (_0x5d7de6.mode !== "semi") {
            _0x591af8(_0x4a8ccc);
          } else {
            var _0x537c61 = _0x4e6ec9.distance(_0x3ccec3, _0x4a8ccc.position);
            if (_0x537c61 <= _0x5d7de6.catchDistance) {
              _0x591af8(_0x4a8ccc);
            } else {
              _0x4a8ccc.destroy();
              _0x119374.processOnStart(_0x221f84);
              return;
            }
          }
          return _0x4a8ccc;
        };
        _0x3e0d42.prototype.getOrCreate = function (_0x1ea9a7, _0x346289) {
          var _0x5ddda1 = this;
          var _0x1388c6 = _0x5ddda1.options;
          var _0x16e02b;
          if (/(semi|static)/.test(_0x1388c6.mode)) {
            _0x16e02b = _0x5ddda1.idles[0];
            if (_0x16e02b) {
              _0x5ddda1.idles.splice(0, 1);
              return _0x16e02b;
            }
            if (_0x1388c6.mode === "semi") {
              return _0x5ddda1.createNipple(_0x346289, _0x1ea9a7);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          _0x16e02b = _0x5ddda1.createNipple(_0x346289, _0x1ea9a7);
          return _0x16e02b;
        };
        _0x3e0d42.prototype.processOnMove = function (_0x4d591f) {
          var _0x1f338f = this;
          var _0x1fabb2 = _0x1f338f.options;
          var _0x3b6670 = _0x1f338f.manager.getIdentifier(_0x4d591f);
          var _0x14d8b6 = _0x1f338f.nipples.get(_0x3b6670);
          if (!_0x14d8b6) {
            console.error("Found zombie joystick with ID " + _0x3b6670);
            _0x1f338f.manager.removeIdentifier(_0x3b6670);
            return;
          }
          _0x14d8b6.identifier = _0x3b6670;
          var _0x2561bf = _0x14d8b6.options.size / 2;
          var _0x276f09 = {
            x: _0x4d591f.pageX,
            y: _0x4d591f.pageY
          };
          var _0x47e3d7 = _0x4e6ec9.distance(_0x276f09, _0x14d8b6.position);
          var _0x193f32 = _0x4e6ec9.angle(_0x276f09, _0x14d8b6.position);
          var _0x399d03 = _0x4e6ec9.radians(_0x193f32);
          var _0x1f6cab = _0x47e3d7 / _0x2561bf;
          if (_0x47e3d7 > _0x2561bf) {
            _0x47e3d7 = _0x2561bf;
            _0x276f09 = _0x4e6ec9.findCoord(_0x14d8b6.position, _0x47e3d7, _0x193f32);
          }
          var _0x15fbf5 = _0x276f09.x - _0x14d8b6.position.x;
          var _0x1a1bcb = _0x276f09.y - _0x14d8b6.position.y;
          if (_0x1fabb2.lockX) {
            _0x1a1bcb = 0;
          }
          if (_0x1fabb2.lockY) {
            _0x15fbf5 = 0;
          }
          _0x14d8b6.frontPosition = {
            x: _0x15fbf5,
            y: _0x1a1bcb
          };
          if (!_0x1fabb2.dataOnly) {
            _0x4e6ec9.applyPosition(_0x14d8b6.ui.front, _0x14d8b6.frontPosition);
          }
          var _0x2a1013 = {
            identifier: _0x14d8b6.identifier,
            position: _0x276f09,
            force: _0x1f6cab,
            pressure: _0x4d591f.force || _0x4d591f.pressure || _0x4d591f.webkitForce || 0,
            distance: _0x47e3d7,
            angle: {
              radian: _0x399d03,
              degree: _0x193f32
            },
            instance: _0x14d8b6,
            lockX: _0x1fabb2.lockX,
            lockY: _0x1fabb2.lockY
          };
          _0x2a1013 = _0x14d8b6.computeDirection(_0x2a1013);
          _0x2a1013.angle = {
            radian: _0x4e6ec9.radians(180 - _0x193f32),
            degree: 180 - _0x193f32
          };
          _0x14d8b6.trigger("move", _0x2a1013);
          _0x1f338f.trigger("move " + _0x14d8b6.id + ":move", _0x2a1013);
        };
        _0x3e0d42.prototype.processOnEnd = function (_0x282990) {
          var _0x571946 = this;
          var _0x1e5062 = _0x571946.options;
          var _0x46541a = _0x571946.manager.getIdentifier(_0x282990);
          var _0x502cd6 = _0x571946.nipples.get(_0x46541a);
          var _0x53b39e = _0x571946.manager.removeIdentifier(_0x502cd6.identifier);
          if (!_0x502cd6) {
            return;
          }
          if (!_0x1e5062.dataOnly) {
            _0x502cd6.hide(function () {
              if (_0x1e5062.mode === "dynamic") {
                _0x502cd6.trigger("removed", _0x502cd6);
                _0x571946.trigger("removed " + _0x502cd6.id + ":removed", _0x502cd6);
                _0x571946.manager.trigger("removed " + _0x502cd6.id + ":removed", _0x502cd6);
                _0x502cd6.destroy();
              }
            });
          }
          clearInterval(_0x571946.pressureIntervals[_0x502cd6.identifier]);
          _0x502cd6.resetDirection();
          _0x502cd6.trigger("end", _0x502cd6);
          _0x571946.trigger("end " + _0x502cd6.id + ":end", _0x502cd6);
          if (_0x571946.ids.indexOf(_0x502cd6.identifier) >= 0) {
            _0x571946.ids.splice(_0x571946.ids.indexOf(_0x502cd6.identifier), 1);
          }
          if (_0x571946.actives.indexOf(_0x502cd6) >= 0) {
            _0x571946.actives.splice(_0x571946.actives.indexOf(_0x502cd6), 1);
          }
          if (/(semi|static)/.test(_0x1e5062.mode)) {
            _0x571946.idles.push(_0x502cd6);
          } else if (_0x571946.nipples.indexOf(_0x502cd6) >= 0) {
            _0x571946.nipples.splice(_0x571946.nipples.indexOf(_0x502cd6), 1);
          }
          _0x571946.manager.unbindDocument();
          if (/(semi|static)/.test(_0x1e5062.mode)) {
            _0x571946.manager.ids[_0x53b39e.id] = _0x53b39e.identifier;
          }
        };
        _0x3e0d42.prototype.onDestroyed = function (_0xbcf77, _0xdd6e6b) {
          var _0x34a39b = this;
          if (_0x34a39b.nipples.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.nipples.splice(_0x34a39b.nipples.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.actives.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.actives.splice(_0x34a39b.actives.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.idles.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.idles.splice(_0x34a39b.idles.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.ids.indexOf(_0xdd6e6b.identifier) >= 0) {
            _0x34a39b.ids.splice(_0x34a39b.ids.indexOf(_0xdd6e6b.identifier), 1);
          }
          _0x34a39b.manager.removeIdentifier(_0xdd6e6b.identifier);
          _0x34a39b.manager.unbindDocument();
        };
        _0x3e0d42.prototype.destroy = function () {
          var _0xfb3847 = this;
          _0xfb3847.unbindEvt(_0xfb3847.options.zone, "start");
          _0xfb3847.nipples.forEach(function (_0x1f2b36) {
            _0x1f2b36.destroy();
          });
          for (var _0x7122d7 in _0xfb3847.pressureIntervals) {
            if (_0xfb3847.pressureIntervals.hasOwnProperty(_0x7122d7)) {
              clearInterval(_0xfb3847.pressureIntervals[_0x7122d7]);
            }
          }
          _0xfb3847.trigger("destroyed", _0xfb3847.nipples);
          _0xfb3847.manager.unbindDocument();
          _0xfb3847.off();
        };
        function _0x2b6c7f(_0x4250b5) {
          var _0x23c480 = this;
          _0x23c480.ids = {};
          _0x23c480.index = 0;
          _0x23c480.collections = [];
          _0x23c480.config(_0x4250b5);
          _0x23c480.prepareCollections();
          var _0x5c4ff1;
          _0x4e6ec9.bindEvt(window, "resize", function (_0x5d855b) {
            clearTimeout(_0x5c4ff1);
            _0x5c4ff1 = setTimeout(function () {
              var _0xc9ec45;
              var _0x409824 = _0x4e6ec9.getScroll();
              _0x23c480.collections.forEach(function (_0x47d5d4) {
                _0x47d5d4.forEach(function (_0x5e64ce) {
                  _0xc9ec45 = _0x5e64ce.el.getBoundingClientRect();
                  _0x5e64ce.position = {
                    x: _0x409824.x + _0xc9ec45.left,
                    y: _0x409824.y + _0xc9ec45.top
                  };
                });
              });
            }, 100);
          });
          return _0x23c480.collections;
        }
        ;
        _0x2b6c7f.prototype = new _0x44dcb2();
        _0x2b6c7f.constructor = _0x2b6c7f;
        _0x2b6c7f.prototype.prepareCollections = function () {
          var _0xb576a8 = this;
          _0xb576a8.collections.create = _0xb576a8.create.bind(_0xb576a8);
          _0xb576a8.collections.on = _0xb576a8.on.bind(_0xb576a8);
          _0xb576a8.collections.off = _0xb576a8.off.bind(_0xb576a8);
          _0xb576a8.collections.destroy = _0xb576a8.destroy.bind(_0xb576a8);
          _0xb576a8.collections.get = function (_0x270213) {
            var _0x5bf390;
            _0xb576a8.collections.every(function (_0x559f8d) {
              if (_0x5bf390 = _0x559f8d.get(_0x270213)) {
                return false;
              }
              return true;
            });
            return _0x5bf390;
          };
        };
        _0x2b6c7f.prototype.create = function (_0x23a81c) {
          return this.createCollection(_0x23a81c);
        };
        _0x2b6c7f.prototype.createCollection = function (_0x5cc0f5) {
          var _0x2a00fa = this;
          var _0x9dab46 = new _0x3e0d42(_0x2a00fa, _0x5cc0f5);
          _0x2a00fa.bindCollection(_0x9dab46);
          _0x2a00fa.collections.push(_0x9dab46);
          return _0x9dab46;
        };
        _0x2b6c7f.prototype.bindCollection = function (_0x1bdb21) {
          var _0x5ed183 = this;
          var _0x1c10fb;
          var _0x49a817 = function _0x506507(_0x4f062f, _0x276c2b) {
            _0x1c10fb = _0x4f062f.type + " " + _0x276c2b.id + ":" + _0x4f062f.type;
            _0x5ed183.trigger(_0x1c10fb, _0x276c2b);
          };
          _0x1bdb21.on("destroyed", _0x5ed183.onDestroyed.bind(_0x5ed183));
          _0x1bdb21.on("shown hidden rested dir plain", _0x49a817);
          _0x1bdb21.on("dir:up dir:right dir:down dir:left", _0x49a817);
          _0x1bdb21.on("plain:up plain:right plain:down plain:left", _0x49a817);
        };
        _0x2b6c7f.prototype.bindDocument = function () {
          var _0x1676d8 = this;
          if (!_0x1676d8.binded) {
            _0x1676d8.bindEvt(document, "move").bindEvt(document, "end");
            _0x1676d8.binded = true;
          }
        };
        _0x2b6c7f.prototype.unbindDocument = function (_0x584a5b) {
          var _0x5bfdf1 = this;
          if (!Object.keys(_0x5bfdf1.ids).length || _0x584a5b === true) {
            _0x5bfdf1.unbindEvt(document, "move").unbindEvt(document, "end");
            _0x5bfdf1.binded = false;
          }
        };
        _0x2b6c7f.prototype.getIdentifier = function (_0x58411f) {
          var _0x2be313;
          if (!_0x58411f) {
            _0x2be313 = this.index;
          } else {
            _0x2be313 = _0x58411f.identifier === undefined ? _0x58411f.pointerId : _0x58411f.identifier;
            if (_0x2be313 === undefined) {
              _0x2be313 = this.latest || 0;
            }
          }
          if (this.ids[_0x2be313] === undefined) {
            this.ids[_0x2be313] = this.index;
            this.index += 1;
          }
          this.latest = _0x2be313;
          return this.ids[_0x2be313];
        };
        _0x2b6c7f.prototype.removeIdentifier = function (_0x45b98e) {
          var _0x363d0c = {};
          for (var _0x582a77 in this.ids) {
            if (this.ids[_0x582a77] === _0x45b98e) {
              _0x363d0c.id = _0x582a77;
              _0x363d0c.identifier = this.ids[_0x582a77];
              delete this.ids[_0x582a77];
              break;
            }
          }
          return _0x363d0c;
        };
        _0x2b6c7f.prototype.onmove = function (_0xc9b901) {
          var _0x2ec8f8 = this;
          _0x2ec8f8.onAny("move", _0xc9b901);
          return false;
        };
        _0x2b6c7f.prototype.onend = function (_0x1cc05f) {
          var _0x4d8bc8 = this;
          _0x4d8bc8.onAny("end", _0x1cc05f);
          return false;
        };
        _0x2b6c7f.prototype.oncancel = function (_0x281285) {
          var _0x413752 = this;
          _0x413752.onAny("end", _0x281285);
          return false;
        };
        _0x2b6c7f.prototype.onAny = function (_0x129e07, _0x35e2e2) {
          var _0x17ba7d = this;
          var _0x17e661;
          var _0x32109e = "processOn" + _0x129e07.charAt(0).toUpperCase() + _0x129e07.slice(1);
          _0x35e2e2 = _0x4e6ec9.prepareEvent(_0x35e2e2);
          var _0x585661 = function _0x43905b(_0x242704, _0x5aca72, _0xc53f9e) {
            if (_0xc53f9e.ids.indexOf(_0x5aca72) >= 0) {
              _0xc53f9e[_0x32109e](_0x242704);
              _0x242704._found_ = true;
            }
          };
          var _0x4538da = function _0x1e5529(_0x10ace8) {
            _0x17e661 = _0x17ba7d.getIdentifier(_0x10ace8);
            _0x4e6ec9.map(_0x17ba7d.collections, _0x585661.bind(null, _0x10ace8, _0x17e661));
            if (!_0x10ace8._found_) {
              _0x17ba7d.removeIdentifier(_0x17e661);
            }
          };
          _0x4e6ec9.map(_0x35e2e2, _0x4538da);
          return false;
        };
        _0x2b6c7f.prototype.destroy = function () {
          var _0x47fadc = this;
          _0x47fadc.unbindDocument(true);
          _0x47fadc.ids = {};
          _0x47fadc.index = 0;
          _0x47fadc.collections.forEach(function (_0x2bddc6) {
            _0x2bddc6.destroy();
          });
          _0x47fadc.off();
        };
        _0x2b6c7f.prototype.onDestroyed = function (_0x5d8fd3, _0x3d6135) {
          var _0x2d52e1 = this;
          if (_0x2d52e1.collections.indexOf(_0x3d6135) < 0) {
            return false;
          }
          _0x2d52e1.collections.splice(_0x2d52e1.collections.indexOf(_0x3d6135), 1);
        };
        var _0x1ff294 = new _0x2b6c7f();
        return {
          create: function _0x5d0ffa(_0x461943) {
            return _0x1ff294.create(_0x461943);
          },
          factory: _0x1ff294
        };
      });
      var _0x13a06a = false;
      var _0x346984 = true;
      var _0x1296c9 = 2;
      var _0x9205d7 = null;
      var _0x2a0429 = 1;
      var _0xc777cf = null;
      var _0xd50fa5 = {};
      var _0x111717 = 0;
      window.createLine = function (_0x18ed25, _0xd72f0b) {
        var _0x4f3af3 = new PIXI.Graphics();
        var _0x21c966 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          _0x21c966 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        _0x4f3af3.lineStyle(bbs.laser || 0.2, _0x21c966, 1);
        _0x4f3af3.moveTo(0, 0);
        _0x4f3af3.lineTo(0, 0);
        _0x4f3af3.zIndex = 10001;
        _0x4f3af3.name = "lineHS";
        _0x4f3af3.alpha = 0;
        _0x4f3af3.filters = [new PIXI.filters.BlurFilter(5)];
        _0x18ed25.addChild(_0x4f3af3);
      };
      window.movimentaLinha = function () {
        try {
          if (!_wwc._anApp.dh.ch.Nm) {
            return;
          }
          var _0x1bf4e8 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          var _0x2ecfbd = _wwc._anApp.dh.ch.Nm.oc;
          var _0x3440a3 = _0x2ecfbd.position.x;
          var _0x2dded9 = _0x2ecfbd.position.y;
          var _0x107976 = "#ff0000";
          if (bbs.laserColor && typeof bbs.laserColor === "string") {
            _0x107976 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
          }
          _0x1bf4e8.lineStyle(bbs.laser || 0.2, _0x107976, 1);
          _0x1bf4e8.clear();
          _0x1bf4e8.lineStyle(bbs.laser || 0.1, _0x107976, 1);
          _0x1bf4e8.moveTo(0, 0);
          _0x1bf4e8.lineTo(_0x3440a3, _0x2dded9);
          if (bbs.laserActive && _wwc.ismobile) {
            _0x1bf4e8.alpha = 0.3;
          }
          _0x1bf4e8.filters = [new PIXI.filters.BlurFilter(5)];
        } catch (_0x4c4461) {
          console.error(_0x4c4461);
        }
      };
      window.gerarCodigoUnico = function () {
        var _0x1b3d40 = bbs.userId || "";
        var _0xd3f039 = _0x1b3d40.match(/\d/g);
        var _0x2a0710 = (_0xd3f039 || []).reduce(function (_0x2d6916, _0x20bafe) {
          return _0x2d6916 + parseInt(_0x20bafe, 10);
        }, 0);
        var _0x4f291b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var _0xe48048 = 5;
        var _0x54edc7 = "";
        var _0x27a616 = "";
        for (var _0x4cd9ce = 0; _0x4cd9ce < _0xe48048; _0x4cd9ce++) {
          var _0x5be807 = Math.floor(Math.random() * _0x4f291b.length);
          _0x54edc7 += _0x4f291b.charAt(_0x5be807);
          var _0x229296 = Math.floor(Math.random() * _0x4f291b.length);
          _0x27a616 += _0x4f291b.charAt(_0x229296);
        }
        return "ROOM" + _0x27a616 + "_" + _0x2a0710 + "_" + _0x54edc7;
      };
      var _0x246168 = {
        sao: "wss://nycsam01.wormworld.io",
        dal: "wss://nycsam01.wormworld.io",
        hil: "wss://nycsam01.wormworld.io",
        vin: "wss://nycsam01.wormworld.io",
        fra: "wss://fraceu01.wormworld.io",
        gra: "wss://fraceu01.wormworld.io",
        dxb: "wss://fraceu01.wormworld.io",
        sin: "wss://fraceu01.wormworld.io",
        tok: "wss://fraceu01.wormworld.io",
        local: "wss://nycsam01.wormworld.io"
      };
      var _0x2c191c = {
        fra: [30055, 31770, 30106, 30339, 30106],
        gra: [32054, 31038],
        sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
        tok: [30171, 31091],
        sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
        hil: [30162, 30042, 32403, 30296],
        dal: [31091, 31230, 32584, 31750],
        dxb: [32703, 31975, 32650],
        vin: [32368]
      };
      var _0x41d210 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
      var _0x437d37 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", _0x4ac6e2);
      var _0x3cd95c = {
        ref: [],
        hs: {},
        fxdo: function _0x3d1d8c(_0xd75577) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!_0x3cd95c[_0xd75577].playing()) {
              _0x3cd95c[_0xd75577].play();
            }
          }
        },
        fxAux: function _0x1a02f4(_0x2da9ed, _0x1a0396) {
          if (_0x1a0396 === 1 && !_0x3cd95c.fxStatus.top1) {
            _0x3cd95c.fxStatus.top1 = true;
            _0x3cd95c.fxdo("top1");
          }
          return _0x2da9ed;
        },
        fxStatus: {
          top1: false
        }
      };

      var _0x296091 = {
        headshot: "https://timmapwormate.com/images/hs_2.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function _0x4b153d() {},
        update: function _0x41fb3a() {},
        leave: function _0x964955() {},
        leaderboardUpdated: function _0x23ec50(_0x5bd6ea, _0x72391f) {
          _0x279fdc(_0x5bd6ea, _0x72391f);
        },
        sendLocation: function _0x50a689() {},
        findFriend: function _0x2f8cd8() {},
        close: function _0x3c3d79() {},
        set: function _0xe5d76d(_0x2409e6) {
          return _0x2409e6;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function _0xb6d397() {
          var _0xfbf40d = new PIXI.Text("X", _wwc.fontStyleMap());
          _0xfbf40d.position.x = _wwc.memory.positionOfDead.x;
          _0xfbf40d.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(_0xfbf40d);
          var _0x187bf9 = 0;
          var _0xdaf7c6 = setInterval(function () {
            _0x187bf9 = !_0x187bf9;
            _0xfbf40d.alpha = _0x187bf9;
          }, 500);
          var _0x271668 = setTimeout(function () {
            clearInterval(_0xdaf7c6);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0xfbf40d);
            _0xfbf40d.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(_0xdaf7c6);
            clearTimeout(_0x271668);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0xfbf40d);
            if (_0xfbf40d && _0xfbf40d.destroy) {
              _0xfbf40d.destroy();
            }
          };
        },
        fontStyleMap: function _0x394a3f(_0xe698e3) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function _0x282c4b() {
          if (_wwc.memory.positionOfDead) {
            var _0x4e6be8 = _wwc.deadPositionMap();
          }
        },
        stopGame: function _0x568663() {
          var _0x9281a4;
          var _0x5c2c22;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          if (!_wwcio.myLocation) {
            return;
          }
          _wwc.memory.positionOfDead = {
            x: (_0x9281a4 = _wwcio.myLocation) === null || _0x9281a4 === undefined || (_0x9281a4 = _0x9281a4.position) === null || _0x9281a4 === undefined ? undefined : _0x9281a4.x,
            y: (_0x5c2c22 = _wwcio.myLocation) === null || _0x5c2c22 === undefined || (_0x5c2c22 = _0x5c2c22.position) === null || _0x5c2c22 === undefined ? undefined : _0x5c2c22.y
          };
          if (_wwc.removeDeadPositionMap) {
            _wwc.removeDeadPositionMap();
          }
        },
        memory: {},
        mySkin: null,
        customPaths: {
          map: null
        },
        _ass_type: [],
        testSkinMod: function _0x3542eb(_0x56d0e4) {
          var _0x8ce052 = typeof _0x56d0e4 === "string";
          _0x56d0e4 = parseInt(_0x56d0e4);
          if (_0x8ce052 && isNaN(_0x56d0e4)) {
            return false;
          } else {
            return parseInt(_0x56d0e4) >= 399 && parseInt(_0x56d0e4) < 8999;
          }
        },
        testWear: function _0xec0aa3(_0x17002f) {
          var _0x340364 = typeof _0x17002f === "string";
          _0x17002f = parseInt(_0x17002f);
          if (_0x340364 && isNaN(_0x17002f)) {
            return false;
          } else {
            return parseInt(_0x17002f) >= 399 && parseInt(_0x17002f) < 8999;
          }
        },
        isNumberValid: function _0x1f645e(_0x1d08ce) {
          return _0x1d08ce !== "" && _0x1d08ce !== null && _0x1d08ce !== undefined && !isNaN(_0x1d08ce);
        },
        validInputWear: function _0x58c9ea(_0x6f860d) {
          var _0x4b5691 = _wwc.testWear(_0x6f860d);
          var _0x2863e0 = typeof skinId === "string";
          if (!_0x4b5691 && !_0x2863e0) {
            return _0x6f860d;
          }
          return 0;
        },
        validInput: function _0x2dbbfa(_0x44a322) {
          var _0x59925a = _wwc.testSkinMod(_0x44a322);
          var _0x4093a9 = typeof _0x44a322 === "string";
          if (!_0x59925a && !_0x4093a9) {
            return _0x44a322;
          }
          try {
            var _0x218f5a = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(_0x218f5a) ? _0x218f5a : bbs.idReplaceSkin || 35);
          } catch (_0x225137) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function _0x56689b(_0x38dc9e) {
          var _0x5d35fc = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return _0x5d35fc;
        },
        load_con: function _0x78d1a4() {
          $(".selecionar-sala-v2").click(function (_0x404c50) {
            _0x404c50.preventDefault();
            var _0x139618 = $(this).attr("data-con") || bbs.con;
            var _0x28595c = $(this).attr("data-type");
            w2c2020.addRoom($(this).attr("data-room"));
            _0x3c7638.dh.Zp = function (_0x1b5f64, _0x126f02, _0x1eee57) {
              bbs.con = _0x1eee57 ? _0x1b5f64 : _0x139618 || _0x1b5f64;
              _wwc.Zp(bbs.con, _0x126f02);
            };
            _0x3c7638.Pn();
          });
        },
        fnSaveGame: function _0x3a6cf5() {
          var _0x447cef = $("#saveGame");
          _0x447cef.prop("checked", bbs.saveGame);
          _0x447cef.change(function () {
            if (!this.checked) {
              var _0xee5654 = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
              $(this).prop("checked", !_0xee5654);
              if (!this.checked) {
                _wwc.fnSetCounts("zerar");
              }
            }
            bbs.saveGame = this.checked;
            w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
            w2c2020.killTotal.alpha = this.checked ? 1 : 0;
            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
          });
        },
        fnSetCounts: function _0x5e6d90(_0x145509, _0x57fedc) {
          var _0x465c91 = function _0x771072(_0x55bf8b, _0x4d022f, _0x4ac345, _0x525b1f) {
            _wwc.setCountGame(_0x55bf8b, _0x4d022f, _0x4ac345, _0x525b1f);
          };
          if (_0x145509 === "count") {
            bbs.kill = (bbs.kill || 0) + (_0x57fedc ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (_0x57fedc ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (_0x57fedc ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (_0x57fedc ? 1 : 0);
          }
          if (_0x145509 === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (_0x145509 === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (_0x145509 === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          _0x465c91(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function _0x20177e(_0xf96092, _0x5a18f9, _0x2b94fd, _0x1980db) {
          if (!bbs.saveGame) {
            w2c2020.hsTotal.alpha = 0;
            w2c2020.killTotal.alpha = 0;
          }
          w2c2020.hs.text = _0x5a18f9;
          w2c2020.hsTotal.text = _0x1980db;
          w2c2020.kill.text = _0xf96092;
          w2c2020.killTotal.text = _0x2b94fd;
        },
        ismobile: _0x4d00ba(),
        Zp: undefined
      };
      window.bbs = {
        version: 0,
        headshot: 0,
        kill: 0,
        theadshot: 0,
        tkill: 0,
        died: 0,
        start: 0,
        HOL: 0,
        tk: null,
        country: null,
        finish: 0,
        saveGame: false,
        idReplaceSkin: 34,
        mobile: false,
        joystick: null,
        configJoystick: {
          buttons: {
            respawn: {
              label: "RESPAWN",
              labelAbbreviation: "RP",
              active: false,
              action: "mbf.mbfass6()"
            },
            lobby: {
              label: "LOBBY",
              labelAbbreviation: "L",
              active: true,
              action: "mbf.mbfass5()"
            },
            rotate: {
              label: "ROTATE",
              labelAbbreviation: "A",
              active: true,
              action: "mbf.mbfass4()"
            },
            snail: {
              label: "SNAIL",
              labelAbbreviation: "B",
              active: true,
              action: "mbf.mbfass3()"
            },
            search: {
              label: "SEARCH",
              labelAbbreviation: "SE",
              active: false,
              action: "mbf.mbfass0()"
            },
            swap: {
              label: "SWAP",
              labelAbbreviation: "SW",
              active: false,
              action: "mbf.mbf_cambiar()"
            },
            zoomplus: {
              label: "Z+",
              labelAbbreviation: "+",
              active: true,
              action: "mbf.mbfass1()"
            },
            zoomminus: {
              label: "Z-",
              labelAbbreviation: "-",
              active: true,
              action: "mbf.mbfass2()"
            },
            zoom: {
              label: "x1",
              labelAbbreviation: "x1",
              active: true,
              action: "mbf.mbfass7()"
            }
          },
          typeZoom: ["btn", "range"],
          typeCurrent: "btn",
          typeName: ["all", "abb"],
          typeCurrentName: "abb"
        },
        customJoystick: null,
        display: {
          customClock: null,
          clock: {
            x: 60,
            y: 60
          },
          top: {
            x: 225,
            y: 1
          },
          default: false,
          custom: false,
          m: {
            x: 60,
            y: 60
          },
          r: {
            x: 225,
            y: 1
          },
          ms: false
        },
        PropertyManager: {},
        acs: true,
        lr: false,
        showTophs: true,
        showRechs: true,
        con: null,
        params: "",
        arrow: true,
        activeBadLang: false,
        activeSounds2: true,
        activeZoom: false,
        activeZoomMobile: false,
        top10Show: [],
        background: null,
        backgroundIsCustom: false,
        nickname: null,
        code: null,
        configZoom: {
          limitDown: 0.25,
          step: 0.25,
          closeUp: 0.5,
          closeDown: 1
        },
        laserActive: false,
        laserColor: 16711680,
        laser: 0.1,
        displayFriends: {
          x: -10,
          y: 315,
          rotation: 0
        },
        enemyNameColor: null,
        enemyNameFontSize: null,
        showSkinLines: true,
        novidadewormworld: 0
      };
      var _0x3e0616 = localStorage.getItem("wwc_version");
      var _0x130194 = localStorage.getItem("wwcSaveGame");
      var _0x102812 = localStorage.getItem("wwc_config");
      _0x130194 &&= JSON.parse(_0x130194);
      for (var _0x54be18 in _0x130194) {
        switch (_0x54be18) {
          case "configJoystick":
            if (!_0x130194[_0x54be18]) {
              break;
            }
            bbs[_0x54be18] = _0x130194[_0x54be18];
            for (var _0x574811 in _0x130194[_0x54be18].buttons) {
              bbs[_0x54be18].buttons[_0x574811] = _0x130194[_0x54be18].buttons[_0x574811];
            }
            for (var _0x81e37d in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x81e37d] = _0x130194[_0x54be18][_0x81e37d];
            }
            break;
          case "joystick":
            bbs[_0x54be18] = _wwc.joystick();
            for (var _0x456ddc in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x456ddc] = _0x130194[_0x54be18][_0x456ddc];
            }
            break;
          case "display":
            for (var _0x4d3d48 in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x4d3d48] = _0x130194[_0x54be18][_0x4d3d48];
            }
            break;
          default:
            bbs[_0x54be18] = _0x130194[_0x54be18];
            break;
        }
      }
      if (!bbs.version || bbs.version !== _0x1296c9) {
        bbs.version = _0x1296c9;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        _0x3c7638.dh.Cn = 0;
        if (_0x3c7638.dh.mq) {
          _0x3c7638.dh.mq.close();
        }
        _0x3c7638.dh.mq = null;
        _0x3c7638.dh.Zp = function (_0x125674, _0x1cb4fa) {
          _wwc.Zp(bbs.con || _0x125674, _0x1cb4fa);
        };
        _0x3c7638.Pn();
      };
      window.lobbyFn = function () {
        _0x3c7638.dh.Cn = 0;
        if (_0x3c7638.dh.mq) {
          _0x3c7638.dh.mq.close();
        }
        _0x3c7638.dh.mq = null;
        _0x3c7638.dh.Np();
        _0x129b06();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 61px;background: #156ab3;color: #FFF;font-weight: bold;margin-right: 5px;border-radius: 7px; cursor: pointer;\">Set</button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var _0x4b3be6 = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        _0x4b3be6 = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append("<div id=\"wwc-set-view\" class=\"base-popup-view\" style=\"" + _0x4b3be6 + "\"></div>");
      var _0x1ff84a = "ass";
      window.mbf = {};
      var _0x33a647 = function _0x42b7a7(_0x1cfb1c) {
        if (bbs.shiftKey) {
          return;
        }
        var _0xb8669d = 30;
        var _0x82bb1c = 0;
        var _0x2cd868 = false;
        function _0x159e09() {
          var _0x191f33 = parseFloat(_0x3c7638.og.af.Bn);
          _0x191f33 = (_0x191f33 - 0.06) % (Math.PI * 2);
          if (_0x191f33 < 0) {
            _0x191f33 += Math.PI * 2;
          }
          _0x3c7638.og.af.Bn = _0x191f33.toFixed(2);
        }
        function _0x22c6cd(_0x3f6cd0) {
          _0x13a06a = setInterval(function () {
            if (_0x3f6cd0 === 1) {
              _0x82bb1c = _0x2cd868 ? _0x82bb1c - 1 : _0x82bb1c + 1;
              if (_0x82bb1c % 80 === 0 && !_0x2cd868) {
                _0xb8669d = _0xb8669d + 18;
                clearInterval(_0x13a06a);
                _0x22c6cd(1);
              }
            }
            _0x159e09();
          }, _0xb8669d);
        }
        if ((_0x1cfb1c == 7 || _0x1cfb1c.key == "7") && _0x13a06a === null) {
          _0x3c7638.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x22c6cd(1);
          return;
        }
        if ((_0x1cfb1c == 8 || _0x1cfb1c.key == "8") && _0x13a06a === null) {
          _0x3c7638.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x22c6cd(2);
          return;
        }
        if (_0x13a06a !== null) {
          clearInterval(_0x13a06a);
          _0x3c7638.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          _0x13a06a = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function (_0x423dfc = true) {
        var _0x2f1d18 = _0xc777cf ? 100 : 400;
        var _0x327c41 = 0.5;
        if (_0x423dfc) {
          if (_0x2a0429 < _0x2f1d18) {
            _0x2a0429 *= 1.25;
            if (_0x2a0429 > _0x2f1d18) {
              _0x2a0429 = _0x2f1d18;
            }
          }
        } else if (_0x2a0429 > _0x327c41) {
          if (_0x2a0429 > 5) {
            _0x2a0429 /= 1.25;
          } else {
            _0x2a0429 *= 0.75;
          }
          if (_0x2a0429 < _0x327c41) {
            _0x2a0429 = _0x327c41;
          }
        }
        w2c2020.zoom.text = "x" + _0x2a0429.toFixed(2);
      };
      mbf.mbfass2 = function () {
        if (_0x2a0429 > 0.5) {
          if (_0x2a0429 > 5) {
            _0x2a0429 /= 1.25;
          } else {
            _0x2a0429 *= 0.75;
          }
          if (_0x2a0429 < 0.5) {
            _0x2a0429 = 0.5;
          }
        }
        w2c2020.zoom.text = "x" + _0x2a0429.toFixed(2);
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          _0x33a647(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x13a06a) {
          mbf.mbf_snail = true;
          $("#mbf_snail").css("background-color", "#156ab3");
        } else {
          mbf.mbf_snail = false;
          $("#mbf_snail").css("background-color", "#000");
        }
      };
      mbf.mbfass4 = function () {
        if (mbf.mbf_snail) {
          $("#mbf_snail").css("background-color", "#000");
          _0x33a647(8);
        } else {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x13a06a) {
          mbf.mbf_rotate = true;
          $("#mbf_rotate").css("background-color", "#156ab3");
        } else {
          mbf.mbf_rotate = false;
          $("#mbf_rotate").css("background-color", "#000");
        }
      };
      mbf.mbfass5 = function () {
        window.location.reload();
      };
      mbf.mbfass6 = function () {
        respawnFn();
      };
      mbf.mbfass7 = function () {
        _0x2a0429 = 1;
        w2c2020.zoom.text = "x1";
      };
      mbf.mbfass9 = function (_0x2125c0) {
        var _0x3df755 = _0xc777cf ? 100 : 2;
        if (_0x2125c0.value <= _0x3df755) {
          _0x2a0429 = _0x2125c0.value;
          w2c2020.zoom.text = "x" + _0x2125c0.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 35;
      mbf.mbf_cambiar_seq = 35;
      mbf.mbf_cambiar_add = function (_0x37ab9c, _0x4a5080) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[_0x37ab9c]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[_0x37ab9c] = _0x4a5080 || "Skin " + _0x37ab9c;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var _0x3bd68b = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= _0x3bd68b.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        for (var _0x560c60 = 0; _0x560c60 < _0x3bd68b.length; _0x560c60++) {
          mbf.mbf_cambiar_current = _0x3bd68b[_0x560c60];
          if (_0x560c60 === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = _0x3bd68b[_0x560c60];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (_0xdbe2ae) {
          if (_0xdbe2ae.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      var _0x6236b5 = $("#idReplaceSkin");
      var _0x15aeed = function () {
        var _0x7de56 = _0xbb0189(_0x1e8476().mark(function _0x2cfc67(_0x7247c3, _0x34dae9) {
          return _0x1e8476().wrap(function _0x133721(_0x24fb4f) {
            while (1) {
              switch (_0x24fb4f.prev = _0x24fb4f.next) {
                case 0:
                  if (!_0x34dae9) {
                    _0x24fb4f.next = 2;
                    break;
                  }
                  return _0x24fb4f.abrupt("return");
                case 2:
                  if (!_0x7247c3) {
                    _0x7247c3 = _0x3c7638.u.wi;
                  }
                  console.log(_0x7247c3);
                  bbs.userId = _0x7247c3.userId;
                  _0x24fb4f.next = 7;
                  return fetch(URLSERV_WORMWORLD + "/load-page", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify(_0x7247c3)
                  }).then(function (_0x5d8ca6) {
                    _0x5d8ca6.text().then(function (_0x50fef9) {
                      $(".description-text").html(_0x50fef9);
                      if (_0x7247c3.type === "error") {
                        $(".description-text").html(_0x7247c3.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 7:
                  _0x24fb4f.next = 9;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (_0x163021) {
                    _0x163021.text().then(function (_0x26651b) {
                      $("#wwc-set-view").html(_0x26651b);
                      $("#mm-wwc").click(function (_0x45bb89) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var _0x56ff2a = $(this).val();
                        bbs.background = _0x56ff2a;
                        bbs.backgroundUri = null;
                        _0x3c7638.xe._g = _0xb65a12.bgg(_0x56ff2a);
                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                        _wwc._anApp.og.af.ng.Lg.$g(_0x3c7638.xe._g);
                        alert("Background changed!");
                      });
                      var _0x26e598 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (_0x26e598) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var _0x29ba95 = $("#inputReplaceSkin").val();
                        _0x26e598 = _wwc.isNumberValid(_0x29ba95);
                        bbs.idReplaceSkin = _0x26e598 ? _0x29ba95 : 33;
                      }
                      if (!bbs.joystick) {
                        $("#joystick_checked").val(true);
                        $("#joystick_color").val("red");
                        $("#joystick_mode").val("dynamic");
                        $("#joystick_position").val("L");
                        $("#joystick_size").val(100);
                        $("#joystick_pxy").val(100);
                      } else {
                        $("#joystick_checked").prop("checked", bbs.joystick.checked);
                        $("#joystick_color").val(bbs.joystick.color);
                        $("#joystick_mode").val(bbs.joystick.mode);
                        $("#joystick_position").val(bbs.joystick.positionMode);
                        $("#joystick_size").val(bbs.joystick.size);
                        $("#joystick_pxy").val(bbs.joystick.pxy);
                      }
                    });
                  });
                case 9:
                case "end":
                  return _0x24fb4f.stop();
              }
            }
          }, _0x2cfc67);
        }));
        return function _0x94a594(_0x2f4fd, _0x1494dc) {
          return _0x7de56.apply(this, arguments);
        };
      }();
      var _0x5d5bc0 = function _0x12986a(_0x3e4909) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            _0x3e4909.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            _0x3e4909.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            _0x3e4909.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            _0x3e4909.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            _0x3e4909.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var _0x43a937 = function () {
        var _0x4a6c56 = _0xbb0189(_0x1e8476().mark(function _0x1f6c68(_0x45bdfe, _0x4d3153) {
          var _0x40abc2;
          var _0x1415d8;
          var _0x549ab4;
          var _0x5264e0;
          var _0x4e5db7;
          return _0x1e8476().wrap(function _0x20a305(_0x28272f) {
            while (1) {
              switch (_0x28272f.prev = _0x28272f.next) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", _0x4ac6e2);
                  _0x28272f.next = 3;
                  return fetch(URLSERV_WORMWORLD + "volte1234.s0jj/registry.json", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-wuid": bbs.wuid,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify(_0x45bdfe)
                  }).then(function () {
                    var _0x524d85 = _0xbb0189(_0x1e8476().mark(function _0x4c5af6(_0x3bbd81) {
                      return _0x1e8476().wrap(function _0x28857a(_0x4ef44a) {
                        while (1) {
                          switch (_0x4ef44a.prev = _0x4ef44a.next) {
                            case 0:
                              _0x4ef44a.next = 2;
                              return _0x3bbd81.json();
                            case 2:
                              return _0x4ef44a.abrupt("return", _0x4ef44a.sent);
                            case 3:
                            case "end":
                              return _0x4ef44a.stop();
                          }
                        }
                      }, _0x4c5af6);
                    }));
                    return function (_0x6f085a) {
                      return _0x524d85.apply(this, arguments);
                    };
                  }()).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 3:
                  _0x40abc2 = _0x28272f.sent;
                  if (!_0x40abc2) {
                    _0x40abc2 = {};
                    _0x40abc2.tk = 1;
                  }
                  bbs.tk = _0x40abc2.tk;
                  _0xc777cf = _0x40abc2.customer;
                  _0x45bdfe.propertyList = _0x40abc2.propertyList;
                  _0x4d3153(_0x45bdfe);
                  _0x15aeed(_0x40abc2);
                  _wwc._anApp = _0x3c7638;
                  _wwc._tx = function (_0x34fdab) {
                    Object.keys(_0x34fdab).forEach(function (_0x595d7a) {
                      if (_0x34fdab[_0x595d7a].Yi) {
                        _0x34fdab[_0x595d7a].fj.nh.Cc.xc.width = _0x34fdab[_0x595d7a].fj.nh.Cc.xc.width + 2;
                        _0x34fdab[_0x595d7a].fj.nh.Cc.xc.height = _0x34fdab[_0x595d7a].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = _0x3c7638.dh.Zp;
                  _0x3c7638.dh.Dq = function (_0x316157, _0x2af5a0, _0x360d3a = 0) {
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": bbs.tk,
                          "x-uid": vLS4d59d9b6cc24740ef3ab
                        },
                        method: "POST",
                        body: JSON.stringify({
                          userId: _0x3c7638.Ij.Rk.userId,
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var _0x116cfc = _0xbb0189(_0x1e8476().mark(function _0x5e34ac(_0x21f262) {
                          var _0x23989d;
                          var _0x1c9099;
                          return _0x1e8476().wrap(function _0x9f4830(_0x822c34) {
                            while (1) {
                              switch (_0x822c34.prev = _0x822c34.next) {
                                case 0:
                                  _0x822c34.next = 2;
                                  return _0x21f262.json();
                                case 2:
                                  _0x23989d = _0x822c34.sent;
                                  _0x1c9099 = _0x3c7638.dh;
                                  if (!_0x23989d.connected) {
                                    _0x822c34.next = 8;
                                    break;
                                  }
                                  alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                  _0x1c9099.Cq();
                                  return _0x822c34.abrupt("return");
                                case 8:
                                  _0x1c9099.mq = new WebSocket(_0x316157);
                                  _0x1c9099.mq.binaryType = "arraybuffer";
                                  _0x2a0429 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = _0x316157;
                                  _0xd50fa5 = {};
                                  _0xb65a12.setIntervalRun = setInterval(function () {
                                    _0xb65a12.ps3();
                                  }, 16);
                                  _0x1c9099.mq.onopen = function () {
                                    _0x30d494();
                                    _wwc.fnSetCounts("open");
                                    _0x2af5a0();
                                  };
                                  _0x1c9099.mq.onclose = function () {
                                    _0x129b06();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0xb65a12.setIntervalRun);
                                    _0xb65a12.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  _0x1c9099.mq.onerror = function (_0x55993e) {
                                    _0x129b06();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0xb65a12.setIntervalRun);
                                    _0xb65a12.loadBg = false;
                                    bbs.start = 0;
                                    if (_0x360d3a > 4) {
                                      _0x1c9099.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x360d3a++;
                                        console.log("Reconnect server");
                                        _0x3c7638.dh.Dq(bbs.con, _0x2af5a0, _0x360d3a);
                                      }, 2000);
                                    }
                                  };
                                  _0x1c9099.mq.onmessage = function (_0x3b17a5) {
                                    _0x1c9099.Kp.Ph(_0x3b17a5.data);
                                  };
                                case 19:
                                case "end":
                                  return _0x822c34.stop();
                              }
                            }
                          }, _0x5e34ac);
                        }));
                        return function (_0x2770e2) {
                          return _0x116cfc.apply(this, arguments);
                        };
                      }());
                    } catch (_0x1152c5) {
                      console.log(_0x1152c5);
                      i.Cq();
                    }
                  };
                  _0x3c7638.dh.Kp.Yh = function (_0x25ea78, _0x69bae5) {
                    _0x129b06();
                    this.dh.Oi();
                  };
                  _0x3c7638.og.af.ng.Ug.Uf = function (_0x3b66cc) {
                    var _0x370615 = function () {
                      return _0xb65a12.$F.M(_0xb65a12.POGL.Sprite, function () {
                        _0xb65a12.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var _0x4b65c6 in this.rh) {
                      if (_0x3b66cc[_0x4b65c6] == null || !_0x3b66cc[_0x4b65c6].hd) {
                        _0xb65a12.$F.U(this.rh[_0x4b65c6]);
                        delete this.rh[_0x4b65c6];
                      }
                    }
                    var _0x4d5d48 = 0;
                    var _0x56ba81 = 1;
                    if (bbs.display.custom) {
                      _0x56ba81 = window.innerWidth;
                    }
                    for (var _0x5e47ca in _0x3b66cc) {
                      var _0x22b1e5 = _0x3b66cc[_0x5e47ca];
                      if (_0x22b1e5.hd) {
                        var _0x449e4e = this.rh[_0x5e47ca];
                        if (!_0x449e4e) {
                          var _0x208faa = _0x3c7638.Lc.Ub().pb(_0x22b1e5.nd).ub;
                          _0x449e4e = new _0x370615();
                          _0x449e4e.texture = _0x208faa.Ea();
                          _0x449e4e.width = 40;
                          _0x449e4e.height = 40;
                          this.rh[_0x5e47ca] = _0x449e4e;
                          this.addChild(_0x449e4e);
                        }
                        w2c2020.setPtc(this, _0x5e47ca, _0x22b1e5.od);
                        _0x449e4e.sh = _0x22b1e5.od;
                        _0x449e4e.position.x = _0x4d5d48 + (bbs.display.custom ? bbs.display.clock.x * _0x56ba81 : 0);
                        _0x449e4e.position.y = bbs.display.custom ? bbs.display.clock.y : _0x449e4e.position.y;
                        _0x4d5d48 += 40;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    _0x3c7638.og.af.ng.Tg.addChild(w2c2020.clock);
                  }
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                  w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                  w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                  w2c2020.ptc = {};
                  _0x1415d8 = [30, 30, 30, 80, 30, 20, 30];
                  for (_0x549ab4 = 0; _0x549ab4 < _0x1415d8.length; _0x549ab4++) {
                    _0x5264e0 = "clock_ad" + _0x549ab4;
                    w2c2020.ptc[_0x5264e0] = new PIXI.Text(_0x1415d8[_0x549ab4], w2c2020.fontStyle["tfc" + _0x549ab4]);
                    w2c2020.ptc[_0x5264e0].y = 61;
                  }
                  w2c2020.setPtc = function (_0x148bce, _0x47fcbb, _0x2825d4) {
                    var _0x6ee462 = _0x1415d8[_0x47fcbb] - parseInt((_0x2825d4 == 0.99 ? 1 : _0x2825d4) * _0x1415d8[_0x47fcbb] / 1);
                    var _0x2fd571 = "clock_ad" + _0x47fcbb;
                    _0x148bce.rh[_0x47fcbb].addChild(w2c2020.ptc[_0x2fd571]);
                    if (w2c2020.ptc[_0x2fd571]) {
                      w2c2020.ptc[_0x2fd571].x = _0x6ee462 >= 100 ? 11 : _0x6ee462 >= 10 ? 18 : 26;
                      w2c2020.ptc[_0x2fd571].text = _0x6ee462;
                    }
                  };
                  _0x4e5db7 = _0x3c7638.og.af.ng.Eb;
                  mbf.onmovepoint = function (_0xc5b648) {
                    if (_0xc5b648.pointerType === "touch" && !_0xc5b648.isPrimary) {
                      return;
                    }
                    if (_0xc5b648.clientX !== undefined) {
                      _0x3c7638.og.af.Bn = Math.atan2(_0xc5b648.clientY - _0x4e5db7.offsetHeight * 0.5, _0xc5b648.clientX - _0x4e5db7.offsetWidth * 0.5);
                    } else {
                      _0x3c7638.og.af.Bn = Math.atan2(_0xc5b648.pageY - _0x4e5db7.offsetHeight * 0.5, _0xc5b648.pageX - _0x4e5db7.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (_0x29308e) {
                    if (_0x29308e && _0x29308e.pointerType === "touch") {
                      return;
                    }
                    _0x3c7638.og.af.An = true;
                  };
                  mbf.onStop = function (_0xdbac3b) {
                    if (_0xdbac3b && _0xdbac3b.pointerType === "touch") {
                      return;
                    }
                    _0x3c7638.og.af.An = false;
                  };
                  _0x4e5db7.addEventListener("pointermove", mbf.onmovepoint, true);
                  _0x4e5db7.addEventListener("pointerdown", mbf.onRun, true);
                  _0x4e5db7.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    _0x4e5db7.addEventListener("touchstart", function (_0x1d14d5) {
                      if (_0x1d14d5 = _0x1d14d5 || window.event) {
                        _0x3c7638.og.af.An = _0x1d14d5.touches.length >= 2;
                      }
                      _0x1d14d5.preventDefault();
                    }, true);
                    _0x4e5db7.addEventListener("touchend", function (_0x99e125) {
                      if (_0x99e125 = _0x99e125 || window.event) {
                        _0x3c7638.og.af.An = _0x99e125.touches.length >= 2;
                      }
                    }, true);
                  }
                case 35:
                case "end":
                  return _0x28272f.stop();
              }
            }
          }, _0x1f6c68);
        }));
        return function _0x40beb1(_0x51fb5f, _0x1eab36) {
          return _0x4a6c56.apply(this, arguments);
        };
      }();
      function _0x1b2cbd() {
        var _0x10a13b = document.createElement("div");
        _0x10a13b.style.position = "fixed";
        _0x10a13b.style.top = "0";
        _0x10a13b.style.height = "100%";
        _0x10a13b.style.width = "100%";
        _0x10a13b.style.zIndex = "1000";
        _0x10a13b.id = "zone_joystick";
        document.body.appendChild(_0x10a13b);
      }
      function _0x41832e() {
        var _0x12dc77 = document.getElementById("zone_joystick");
        if (_0x12dc77) {
          _0x12dc77.remove();
        }
      }
      var _0x129b06 = function _0x374806() {
        if (_0x9205d7) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          _0x9205d7.destroy();
        }
        _0x41832e();
      };
      var _0x30d494 = function _0x46f991() {
        try {
          var _0x46c9e2 = function _0x548302() {
            _0x9205d7.on("start end", function (_0x1c4ca1, _0xcab939) {}).on("move", function (_0x36e23e, _0x4fb79d) {
              var _0x249aff = _0x4fb79d.angle.radian <= Math.PI ? _0x4fb79d.angle.radian * -1 : Math.PI - (_0x4fb79d.angle.radian - Math.PI);
              _0x3c7638.og.af.Bn = _0x249aff;
            });
          };
          var _0x87b5bd = function _0x26d616() {
            if (_0x9205d7) {
              _0x9205d7.destroy();
            }
            var _0x2e12ee = _0x4e5fcd({}, bbs.joystick);
            var _0x59e484 = {};
            if (bbs.customJoystick) {
              _0x1b2cbd();
              var _0x279817 = _0x4a2e4b(bbs.customJoystick.buttons);
              var _0x5030a4;
              try {
                for (_0x279817.s(); !(_0x5030a4 = _0x279817.n()).done;) {
                  var _0x761eec = _0x5030a4.value;
                  var _0x2c7c8e = document.createElement("div");
                  if (_0x761eec.svg) {
                    _0x2c7c8e.innerHTML = _0x761eec.svg;
                  } else {
                    _0x2c7c8e.style.color = _0x761eec.color || "#FFF";
                    _0x2c7c8e.style.backgroundColor = _0x761eec.backgroundColor || "#000";
                    _0x2c7c8e.style.borderRadius = "10px";
                    _0x2c7c8e.style.textAlign = "center";
                    _0x2c7c8e.style.fontWeight = "bold";
                    _0x2c7c8e.style.padding = "5px";
                    _0x2c7c8e.style.border = "1px solid #f00";
                    _0x2c7c8e.style.fontSize = _0x761eec.size || "25px";
                    _0x2c7c8e.innerHTML = _0x761eec.value;
                  }
                  _0x2c7c8e.style.position = "absolute";
                  _0x2c7c8e.style.top = _0x761eec.top;
                  _0x2c7c8e.style.left = _0x761eec.left;
                  _0x2c7c8e.style.display = _0x761eec.display;
                  _0x2c7c8e.style.cursor = "pointer";
                  _0x2c7c8e.id = "cbjt_" + _0x761eec.value;
                  _0x2c7c8e.dataset.size = _0x761eec.size;
                  _0x2c7c8e.dataset.color = _0x761eec.color || "#FFF";
                  _0x2c7c8e.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(_0x2c7c8e);
                  if (_0x761eec.display !== "none") {
                    if (_0x761eec.value === "ZoomIn") {
                      _0x2c7c8e.addEventListener("click", function (_0xe9afb0) {
                        mbf.mbfass2();
                      });
                    }
                    if (_0x761eec.value === "ZoomOut") {
                      _0x2c7c8e.addEventListener("click", function (_0x2e0920) {
                        mbf.mbfass1();
                      });
                    }
                    if (_0x761eec.value === "Accelerator") {
                      _0x2c7c8e.addEventListener("pointerdown", function (_0x2552ca) {
                        mbf.onRun();
                      });
                      _0x2c7c8e.addEventListener("pointerup", function (_0x12e542) {
                        mbf.onStop();
                      });
                    }
                    if (_0x761eec.value === "Respawn") {
                      _0x2c7c8e.addEventListener("click", function (_0x18d72e) {
                        respawnFn();
                      });
                    }
                    if (_0x761eec.value === "Rotate") {
                      _0x2c7c8e.addEventListener("click", function (_0x5ecfe3) {
                        _0x33a647(_0x13a06a ? 0 : 8);
                      });
                    }
                    if (_0x761eec.value === "Snail") {
                      _0x2c7c8e.addEventListener("click", function (_0x5e6b19) {
                        _0x33a647(_0x13a06a ? 0 : 7);
                      });
                    }
                    if (_0x761eec.value === "Lobby") {
                      _0x2c7c8e.addEventListener("click", function (_0x1c6102) {
                        lobbyFn();
                      });
                    }
                    if (_0x761eec.value === "Search") {
                      _0x2c7c8e.addEventListener("click", function (_0x5bebf5) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  _0x59e484[_0x761eec.value] = _0x2c7c8e;
                }
              } catch (_0x26df27) {
                _0x279817.e(_0x26df27);
              } finally {
                _0x279817.f();
              }
              _0x59e484.Directional;
              var _0x228f6d = _0x59e484.Directional.dataset.size / 2;
              var _0x2d8ad2 = parseInt(_0x59e484.Directional.style.left.replace("px", "")) + _0x228f6d;
              var _0xddf591 = parseInt(_0x59e484.Directional.style.top.replace("px", "")) + _0x228f6d;
              _0x2e12ee = {
                zone: _0x59e484.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: _0x2d8ad2,
                  top: _0xddf591
                },
                color: "transparent",
                size: Math.floor(_0x59e484.Directional.dataset.size / 1.6)
              };
            } else {
              _0x2e12ee.zone = document.getElementById("game-view");
              if (_0x2e12ee.mode === "static") {
                delete _0x2e12ee.zone;
              }
            }
            _0x9205d7 = nipplejs.create(_0x2e12ee);
            _0x46c9e2();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", _0x59e484.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var _0xa70e7c = "";
            var _0x58a7a7 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (_0x456f05) {
              _0xa70e7c = _0xa70e7c + (bbs.configJoystick.buttons[_0x456f05].active ? "<button onclick=\"" + bbs.configJoystick.buttons[_0x456f05].action + "\" id=\"mbf_" + _0x456f05 + "\">" + bbs.configJoystick.buttons[_0x456f05][_0x58a7a7] + "</button>" : "");
            });
            var _0x658414 = "\n        <style>\n          #wwc-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n          }\n          #wwc-mobile-buttons {\n            position: relative;margin: 0 auto;width: 265px;\n            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;\n          }\n          #wwc-mobile-buttons > button {\n            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;\n            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;\n            align-items: center;\n          }\n          .game-slider-container-02 {\n            position: fixed;z-index: 1000;bottom: 50px;right: 45px;\n          }\n          .game-slider-container-02 input[type=range][orient=vertical] {\n              writing-mode: vertical-lr;\n              direction: rtl;\n              appearance: slider-vertical;\n              width: 16px;\n              vertical-align: bottom;\n          }\n        </style>\n        <div id=\"wwc-mobile-box\"><div id=\"wwc-mobile-buttons\" style=\"\">" + _0xa70e7c + "</div></div>";
            _0x658414 = _0x658414 + (bbs.configJoystick.typeCurrent === "btn" ? "" : "<div id=\"wwc-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"mbf.mbfass9(this)\" type=\"range\" min=\"0.25\" max=\"" + (_0xc777cf ? 12 : 2) + "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>");
            $("body").append(_0x658414);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            _0x87b5bd();
          }
        } catch (_0x2f3c13) {
          console.error(_0x2f3c13);
        }
      };
      var _0xe4cc44 = localStorage.getItem("custom_wormworld_wear");
      var _0x3591ab = localStorage.getItem("custom_wormworld_skin");
      var _0x4160cf = localStorage.getItem("custom_wormworld_badLang");
      var _0x4f82c6 = localStorage.getItem("custom_wormworld_background");
      var _0x33def7 = localStorage.getItem("custom_wormworld_audio");
      var _0x51347c = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (_0x4160cf) {
        _0x51347c = _0x51347c.concat(JSON.parse(_0x4160cf));
      }
      window.badLanguageRegEx = (_0x51347c || []).join("|");
      var _0x26b207 = function _0x437580(_0x2adeed) {
        _0x2adeed = _0x2adeed.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        _0x2adeed = _0x2adeed.replace(/\uFDFD/g, "");
        _0x2adeed = _0x2adeed.substring(0, _0x4ac6e2);
        return _0x2adeed;
      };
      _wwc.customConfig = function (_0x33251b) {
        var _0x42baaa = function _0x5ce5ee(_0x534afd, _0x5c309e = 0) {
          var _0x4312d8 = _0x534afd.id.toString();
          var _0x2d513a = _0x534afd.type.toString().toLowerCase() + "VariantArray";
          var _0x46f052 = _0x534afd.type.toString().toLowerCase() + "Dict";
          _0x33251b.textureDict[_0x4312d8] = {
            custom: true,
            re1ativePath: _0x534afd.file,
            reference: 1000 + _0x5c309e
          };
          _0x33251b.regionDict[_0x4312d8] = {
            texture: _0x4312d8,
            x: _0x534afd.x,
            y: _0x534afd.y,
            w: _0x534afd.w,
            h: _0x534afd.h,
            px: _0x534afd.px,
            py: _0x534afd.py,
            pw: 128,
            ph: 128
          };
          _0x33251b[_0x46f052][1000 + _0x5c309e] = {
            base: [{
              region: _0x4312d8
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: _0x4312d8
          };
          _0x33251b[_0x2d513a].push([1000 + _0x5c309e]);
        };
        if (_0xe4cc44) {
          _0xe4cc44 = JSON.parse(_0xe4cc44);
          if (_0xe4cc44.wear) {
            if (_0xe4cc44.version == "2") {
              _0xe4cc44.data.forEach(function (_0x1d303a, _0x214519) {
                _0x42baaa(_0x1d303a, _0x214519);
              });
            } else {
              for (var _0x152468 in _0xe4cc44.wear.textureDict) {
                _0x33251b.textureDict[_0x152468] = {};
                _0x33251b.textureDict[_0x152468].h1 = true;
                _0x33251b.textureDict[_0x152468].h3 = true;
                _0x33251b.textureDict[_0x152468].re1ativePath = _0xe4cc44.wear.textureDict[_0x152468].file;
              }
              for (var _0x197bb7 in _0xe4cc44.wear.regionDict) {
                _0x33251b.regionDict[_0x197bb7] = _0xe4cc44.wear.regionDict[_0x197bb7];
                var _0x38f293 = _0x33251b.regionDict[_0x197bb7];
                _0x33251b[_0x38f293.list][_0x38f293.obj.id.toString()] = _0x38f293.obj;
                _0x33251b[_0x38f293.listVariant].push([_0x38f293.obj.id.toString()]);
              }
            }
          }
        }
        if (_0x3591ab) {
          _0x3591ab = JSON.parse(_0x3591ab);
          if (_0x3591ab.version_skin == "2") {
            var _0x481769 = function _0x37f1a1(_0x114c91, _0x15db31, _0x526cc3, _0x11023a) {
              return {
                texture: _0x15db31,
                h: _0x526cc3 - 5,
                w: _0x526cc3 - 5,
                x: _0x526cc3 * (_0x11023a ? 0 : _0x114c91 || 0),
                y: 0
              };
            };
            var _0x59d6c3 = "SKIN_" + _0x3591ab.id + "___Z";
            var _0x30e969 = {
              id: _0x59d6c3,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: _0x59d6c3,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var _0x3a70cf = {
              id: _0x59d6c3,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: _0x3591ab.glow,
              base: []
            };
            for (var _0x3c0533 = _0x3591ab.len - 1; _0x3c0533 >= 0; _0x3c0533--) {
              _0x30e969.regionDict[_0x59d6c3 + "_" + _0x3c0533] = _0x481769(_0x3c0533, _0x59d6c3, _0x3591ab.cos, 0);
              _0x3a70cf.base.push(_0x59d6c3 + "_" + _0x3c0533);
            }
            _0x30e969.textureDict[_0x59d6c3] = {
              custom: true,
              re1ativePath: _0x3591ab.file || _0x3591ab.td.file,
              h1: true,
              h4: true
            };
            _0x30e969.skinArrayDict.push(_0x3a70cf);
            _0x30e969.skinGroupArrayDict[0].list.push(_0x59d6c3);
            if (!_0x3591ab.textureDict[_0x59d6c3]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (_0x3591ab.version_skin == "3") {
            for (var _0xcd5259 in _0x3591ab) {
              var _0x4a9aea = _0x5eb71e(_0x3591ab[_0xcd5259]);
              if (_0x4a9aea === "object") {
                _0x33251b[_0xcd5259] = Array.isArray(_0x3591ab[_0xcd5259]) ? [].concat(_0x449262(_0x33251b[_0xcd5259]), _0x449262(_0x3591ab[_0xcd5259])) : _0x4e5fcd(_0x4e5fcd({}, _0x33251b[_0xcd5259]), _0x3591ab[_0xcd5259]);
              }
            }
            return;
          }
          var _0x165381 = _0x3591ab.skin.id;
          _0x3591ab.skin.id = _0x165381.toString();
          for (var _0x397249 in _0x3591ab.textureDict) {
            _0x33251b.textureDict[_0x397249] = _0x3591ab.textureDict[_0x397249];
            _0x33251b.textureDict[_0x397249].re1ativePath = _0x3591ab.textureDict[_0x397249].file;
            _0x33251b.textureDict[_0x397249].h1 = true;
            _0x33251b.textureDict[_0x397249].h4 = true;
          }
          for (var _0x49f82f in _0x3591ab.regionDict) {
            _0x33251b.regionDict[_0x49f82f] = _0x3591ab.regionDict[_0x49f82f];
          }
          _0x33251b.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [_0x165381]
          });
          _0x33251b.skinArrayDict.push(_0x3591ab.skin);
        }
      };
      function _0x4d00ba() {
        var _0xe5623c = false;
        (function (_0x17e141) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x17e141) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x17e141.substr(0, 4))) {
            _0xe5623c = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return _0xe5623c;
      }
      window.w2c2020 = {
        fontStyle: {
          amarelo: new PIXI.TextStyle({
            align: "center",
            fill: "#f8d968",
            fontSize: 10,
            lineJoin: "round",
            stroke: "red",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          branco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 10,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBranco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBrancoRight: new PIXI.TextStyle(_0x4ddaaa({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }, "align", "right")),
          brancoXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          verdeXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#0ff555",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          })
        }
      };
      var _0x180d51 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
      for (var _0x4a13da = 0; _0x4a13da < _0x180d51.length; _0x4a13da++) {
        var _0x40dcd0 = _0x180d51[_0x4a13da];
        w2c2020.fontStyle["tfc" + _0x4a13da] = new PIXI.TextStyle({
          align: "center",
          fill: _0x40dcd0,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
      }
      w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
      w2c2020.zoom.x = 82;
      w2c2020.zoom.y = 105;
      w2c2020.conteinerTeam = new PIXI.Container();
      w2c2020.conteinerTeam.id = "team";
      w2c2020.friends = new PIXI.Container();
      w2c2020.friends.background = new PIXI.Graphics();
      w2c2020.friends.background.beginFill(0, 0.4);
      w2c2020.friends.background.drawRect(0, 0, 100, 130);
      w2c2020.friends.background.endFill();
      w2c2020.friends.addChild(w2c2020.friends.background);
      w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
      w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
      w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
      w2c2020.friends.alpha = 0;
      w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
      w2c2020.moveSprite.width = 20;
      w2c2020.moveSprite.height = 20;
      w2c2020.moveSprite.x = 75;
      w2c2020.moveSprite.y = 130;
      w2c2020.moveSprite.interactive = true;
      w2c2020.moveSprite.buttonMode = true;
      w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
      w2c2020.rotation.width = 25;
      w2c2020.rotation.height = 25;
      w2c2020.rotation.x = 45;
      w2c2020.rotation.y = 130;
      w2c2020.rotation.interactive = true;
      w2c2020.rotation.buttonMode = true;
      w2c2020.friends.addChild(w2c2020.moveSprite);
      w2c2020.friends.addChild(w2c2020.rotation);
      var _0x46d5cc = false;
      var _0x16f92f = {
        x: 0,
        y: 0
      };
      w2c2020.rotation.on("pointerdown", function (_0x2ea43a) {
        w2c2020.friends.rotation += Math.PI / 2;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      });
      w2c2020.moveSprite.on("pointerdown", function (_0x2eaca7) {
        _0x46d5cc = true;
        _0x16f92f.x = _0x2eaca7.data.global.x - w2c2020.friends.x;
        _0x16f92f.y = _0x2eaca7.data.global.y - w2c2020.friends.y;
      });
      w2c2020.moveSprite.on("pointerup", function () {
        _0x46d5cc = false;
      });
      w2c2020.moveSprite.on("pointerupoutside", function () {
        _0x46d5cc = false;
      });
      w2c2020.moveSprite.on("pointermove", function (_0x37fb90) {
        if (_0x46d5cc) {
          var _0xbdb0df = _0x37fb90.data.global;
          w2c2020.friends.x = _0xbdb0df.x - _0x16f92f.x;
          w2c2020.friends.y = _0xbdb0df.y - _0x16f92f.y;
          bbs.displayFriends.x = w2c2020.friends.x;
          bbs.displayFriends.y = w2c2020.friends.y;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
        }
      });
      w2c2020.moveSprite.visible = false;
      w2c2020.rotation.visible = false;
      window.addEventListener("keydown", function (_0x36aef1) {
        if (_0x36aef1.key === "Escape") {
          w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
          w2c2020.rotation.visible = !w2c2020.rotation.visible;
        }
      });
      w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
      w2c2020.label_hs.x = 15;
      w2c2020.label_hs.y = 107;
      w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.hs.x = 20;
      w2c2020.hs.y = 119;
      w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.hsTotal.x = 20;
      w2c2020.hsTotal.y = 132;
      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
      w2c2020.label_kill.x = 50;
      w2c2020.label_kill.y = 107;
      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.kill.x = 60;
      w2c2020.kill.y = 120;
      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.killTotal.x = 60;
      w2c2020.killTotal.y = 133;
      w2c2020.clock = PIXI.Sprite.from(URL_CDN + "https://wormup.in/assets/images/clock.png");
      w2c2020.clock.width = 100;
      w2c2020.clock.height = 100;
      w2c2020.clock.x = -50;
      w2c2020.clock.y = -50;
      w2c2020.containerHsRec = new PIXI.Container();
      w2c2020.containerHsRec.x = -55;
      w2c2020.containerHsRec.y = 195;
      w2c2020.containerHstop = new PIXI.Container();
      w2c2020.containerHstop.x = -55;
      w2c2020.containerHstop.y = 95;
      w2c2020.containerHsIndex = new PIXI.Container();
      w2c2020.containerHsNames = new PIXI.Container();
      w2c2020.containerHsValue = new PIXI.Container();
      var _0x4662b3 = function _0x30478b(_0x224100) {};
      w2c2020.top1rec = "🥇";
      w2c2020.top2rec = "🥈";
      w2c2020.top3rec = "🥉";
      w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
      w2c2020.titleRec.y = -5;
      for (var _0x3028f2 = 0; _0x3028f2 < 3; _0x3028f2++) {
        var _0x1d8712 = _0x3028f2 + 1;
        var _0x25d9aa = new PIXI.Text(w2c2020["top" + _0x1d8712 + "rec"], w2c2020.fontStyle.hsBrancoRight);
        _0x25d9aa.x = _0x3028f2 >= 9 ? -5 : 0;
        _0x25d9aa.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x25d9aa);
        var _0x255ef4 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
        _0x255ef4.x = 15;
        _0x255ef4.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x255ef4);
        var _0x2bb1c7 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
        _0x2bb1c7.x = 135;
        _0x2bb1c7.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x2bb1c7);
      }
      w2c2020.containerHsRec.addChild(w2c2020.titleRec);
      var _0x44aad7 = 6;
      var _0x279fdc = function _0x4b091b(_0x58a578, _0x155ab1) {
        if (_0x155ab1 && _0x155ab1.length > 0) {
          for (var _0x558b19 = 0; _0x558b19 < 3; _0x558b19++) {
            if (w2c2020.containerHsRec.children[_0x558b19]) {
              w2c2020.containerHsRec.children[_0x558b19 * 3 + 1].text = _0x155ab1 && _0x155ab1[_0x558b19] ? _0x155ab1[_0x558b19].nickname.substring(0, 17) : "--";
            }
            if (w2c2020.containerHsRec.children[_0x558b19]) {
              w2c2020.containerHsRec.children[_0x558b19 * 3 + 2].text = _0x155ab1 && _0x155ab1[_0x558b19] ? _0x155ab1[_0x558b19].score : "--";
            }
          }
        }
        if (_0x58a578 && _0x58a578.length > 0) {
          for (var _0x4400a3 = 0; _0x4400a3 < _0x44aad7; _0x4400a3++) {
            var _0x363ee0 = "--";
            var _0x487b99 = "--";
            if (_0x58a578 && _0x58a578[_0x4400a3]) {
              _0x363ee0 = _0x58a578[_0x4400a3].nickname ? _0x58a578[_0x4400a3].nickname.substring(0, 14) : "--";
              _0x487b99 = parseInt(_0x58a578[_0x4400a3].score || 0);
            }
            if (w2c2020.containerHsNames.children[_0x4400a3]) {
              w2c2020.containerHsNames.children[_0x4400a3].text = _0x363ee0;
            }
            if (w2c2020.containerHsValue.children[_0x4400a3]) {
              w2c2020.containerHsValue.children[_0x4400a3].text = _0x487b99;
            }
          }
        }
      };
      w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
      for (var _0xd6f7d9 = 0; _0xd6f7d9 < _0x44aad7; _0xd6f7d9++) {
        var _0x3d4e08 = new PIXI.Text(_0xd6f7d9 + 1, w2c2020.fontStyle.hsBranco);
        _0x3d4e08.x = _0xd6f7d9 >= 9 ? -5 : 0;
        _0x3d4e08.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsIndex.addChild(_0x3d4e08);
        var _0x20ba36 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
        _0x20ba36.x = 10;
        _0x20ba36.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsNames.addChild(_0x20ba36);
        var _0x1b701c = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
        _0x1b701c.x = 130;
        _0x1b701c.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsValue.addChild(_0x1b701c);
      }
      w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
      w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
      w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
      w2c2020.containerCountInfo = new PIXI.Container();
      w2c2020.containerCountInfo.x = -45;
      w2c2020.containerCountInfo.y = -52;
      w2c2020.containerCountInfo.addChild(w2c2020.zoom);
      w2c2020.containerCountInfo.addChild(w2c2020.friends);
      w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
      w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
      w2c2020.containerCountInfo.addChild(w2c2020.kill);
      w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
      w2c2020.labelRoom = new PIXI.Text("?", w2c2020.fontStyle.amarelo);
      w2c2020.labelRoom.x = -50;
      w2c2020.labelRoom.y = -56;
      w2c2020.addRoom = function (_0x97610d) {
        w2c2020.labelRoom.text = _0x97610d || "SC";
      };
      window.addEventListener("keydown", function (_0x138804) {
        if (_0x138804.key == "7") {
          _0x33a647(_0x13a06a ? 0 : 7);
        }
        if (_0x138804.key == "8") {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x138804.key === "0" && bbs.showRechs) {
          w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
        }
        if (_0x138804.key === "9" && bbs.showTophs) {
          w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
        }
        if (_0x138804.key === "6" && _0xb65a12.setIntervalRun) {
          _0x346984 = !_0x346984;
        }
        if (_0x138804.key === "5") {
          respawnFn();
        }
        if (_0x138804.key === "4") {
          var _0x4a030d = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          if (_0x4a030d) {
            _0x4a030d.alpha = _0x4a030d.alpha ? 0 : 0.3;
          }
        }
        if (_0x138804.key === "3") {
          var _0x181d6a = _0x111717;
          if (backgroundArena.length < _0x181d6a) {
            _0x181d6a = bbs.background || 0;
            _0x111717 = 0;
          }
          _wwc._anApp.og.af.ng.Lg.$g(_0xb65a12.bgg(_0x181d6a));
          _0x111717++;
        }
        if (_0x138804.key === "1") {
          mbf.mbf_cambiar();
        }
        if (_0x138804.key === "x1") {
          _wwcio.update(1);
        }
        if (_0x138804.key === "x2") {
          _wwcio.update(2);
        }
        if (_0x138804.key === "<" || _0x138804.key === "," && _0xb65a12.setIntervalRun) {
          mbf.mbfass1();
        }
        if (_0x138804.key === ">" || _0x138804.key === "." && _0xb65a12.setIntervalRun) {
          mbf.mbfass2();
        }
        if (_0x138804.key === "z" || _0x138804.key === "Z" && _0xb65a12.setIntervalRun) {
          _0x2a0429 = bbs.configZoom?.closeDown || 1;
          w2c2020.zoom.text = "x" + _0x2a0429;
        }
        if (_0x138804.key === "c" || _0x138804.key === "C" && _0xb65a12.setIntervalRun) {
          w2c2020.zoom.text = _0x2a0429 === 0.5 ? "x2" : "CLOSE-UP";
          _0x2a0429 = _0x2a0429 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }
        if (_0x138804.key === "m" || _0x138804.key === "M") {
          bbs.showSkinLines = !bbs.showSkinLines;
          // If disabling, hide existing skin lines
          if (!bbs.showSkinLines && _0x3c7638.dh && _0x3c7638.dh.af && _0x3c7638.dh.af.ng && _0x3c7638.dh.af.ng.skinLineGraphics) {
            _0x3c7638.dh.af.ng.skinLineGraphics.visible = false;
          }
        }
      });
      var _0x3c7638 = {
        Lc: {
          Gb: {}
        }
      };
      var _0xb65a12 = {
        pm: {},
        ps: 0,
        ps2: function _0x4e1aaf(_0x341d7e, _0x21fcf7, _0x16d62e) {
          if (true) {
            var _0x22dbf1 = _0x16d62e ? 128 : 0;
            var _0x481bf9 = _0xb65a12.$F.N(_0x21fcf7) / _0xb65a12.$V.F * 128 & 127;
            var _0x5c1a51 = (_0x22dbf1 | _0x481bf9) & 255;
            var _0x5881ea = new ArrayBuffer(1);
            new DataView(_0x5881ea).setInt8(0, _0x5c1a51);
            _0x341d7e.Eq(_0x5881ea);
            _0x341d7e.nq = _0x5c1a51;
          } else {}
        },
        ps3: function _0x4ef089() {
          _0x3c7638.dh.xq(_0x3c7638.og.af.Gn(), _0x3c7638.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function _0x12a70d(_0x5311a1, _0x54a37c, _0x424f4f) {
          _0x5311a1.Ll("gg", _0x424f4f.credential, null);
        },
        Lg: function _0x4edffe(_0x90a289) {
          _0x3c7638.xe._g = _0xb65a12.bgg();
          _wwc.$C = _0x90a289;
          _wwc.$W = _0xb65a12;
          if (bbs.bgGameWidth > 512) {
            return new _0x90a289.WMGBS1();
          } else {
            return new _0x90a289.WMGBS2();
          }
        },
        registry: function () {
          var _0x493130 = _0xbb0189(_0x1e8476().mark(function _0x107915(_0xc59158) {
            var _0x3a2088;
            return _0x1e8476().wrap(function _0x6620ee(_0x20b4f9) {
              while (1) {
                switch (_0x20b4f9.prev = _0x20b4f9.next) {
                  case 0:
                    _0x20b4f9.next = 2;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-uid": vLS4d59d9b6cc24740ef3ab
                      },
                      body: JSON.stringify(_0xc59158)
                    }).then(function (_0x5acb02) {
                      if (!_0x5acb02.ok) {
                        return _0xc59158;
                      }
                      return _0x5acb02.json();
                    });
                  case 2:
                    _0x3a2088 = _0x20b4f9.sent;
                    return _0x20b4f9.abrupt("return", _0x3a2088);
                  case 4:
                  case "end":
                    return _0x20b4f9.stop();
                }
              }
            }, _0x107915);
          }));
          function _0x4f2174(_0x28ffcc) {
            return _0x493130.apply(this, arguments);
          }
          return _0x4f2174;
        }()
      };
      _0xb65a12.Vd = function (_0x55bb1a, _0x200f45) {
        _wwc.customConfig(_0x55bb1a);
        if (!_0x55bb1a) {
          return;
        }
        var _0x19c79a = this;
        function _0x17649e(_0x3c66ea) {
          var _0x354704 = _0x200f45.Id.Ld;
          _0x19c79a.Rd(_0x354704, _0x200f45.Od.bc(_0x354704).lc(_0x3c66ea));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x64a80d = [];
        var _0x2d19bd = [];
        var _0x2535f0 = 0;
        var _0x49f1c0 = new PIXI.Loader();
        for (var _0x5e6ad in _0x55bb1a.textureDict) {
          if (_0x55bb1a.textureDict.hasOwnProperty(_0x5e6ad)) {
            var _0x568b93 = _0x55bb1a.textureDict[_0x5e6ad];
            var _0x5b86ee = _0x568b93.re1ativePath || _0x568b93.relativePath;
            var _0xfe0708 = _0x568b93.fileSize || 100;
            var _0x42b18e = _0x568b93.sha256 || null;
            var _0x54055e = new _0x200f45.Wd(_0x5e6ad, _0x5b86ee, _0xfe0708, _0x42b18e);
            _0x54055e.h1 = _0x568b93.h1;
            _0x54055e.h4 = _0x568b93.h4;
            _0x54055e.skinEvo = _0x568b93.skinEvo;
            _0x54055e.lines = _0x568b93.lines;
            _0x54055e.speed = _0x568b93.speed;
            _0x64a80d.push(_0x54055e);
            _0x49f1c0.add(_0x5e6ad, _0x5b86ee);
          }
        }
        _0x49f1c0.onProgress.add(function (_0x39fe8c, _0x2b4a46) {
          _0x17649e(_0x39fe8c.progress / 100);
        });
        _0x49f1c0.load(function (_0x4b7927, _0x5792b1) {
          _0x64a80d.forEach(function (_0x2444d4) {
            _0x2444d4.resource = _0x5792b1[_0x2444d4.ae];
          });
          _0x19c79a.$d(_0x55bb1a, _0x64a80d, _0x200f45);
        });
        return;
      };
      _0xb65a12.Zd = function (_0x1ed885, _0x13d153, _0xe2ae90, _0x40d5cd) {
        $.ajax({
          type: "GET",
          url: _0x1ed885._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function _0x426bca(_0x25d6f8) {
              if (_0x25d6f8.lengthComputable) {
                _0x40d5cd(_0x25d6f8.loaded / _0x25d6f8.total);
              }
            }
          }
        }).fail(function () {
          _0x13d153(new Error());
        }).done(function (_0x235d92) {
          _0xe2ae90(_0x235d92);
        });
      };
      _0xb65a12.$d = function (_0x51c450, _0x22d82d, _0x349ff3) {
        function _0x368e89(_0x2fc85d) {
          var _0x26a100 = _0x349ff3.Id.Md;
          _0x5b9d66.Rd(_0x26a100, _0x349ff3.Od.bc(_0x26a100).lc(_0x2fc85d));
        }
        var _0x5b9d66 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x57ee0e;
        var _0x34f275;
        var _0x229727 = {};
        var _0x55e2fc = function _0x1ffd4b() {
          for (var _0x22d640 = 0; _0x22d640 < _0x22d82d.length; _0x22d640++) {
            try {
              window.URL.revokeObjectURL(_0x22d82d[_0x22d640].Xd);
            } catch (_0x5d2436) {}
          }
          _0x5b9d66.Sd(new Error());
        };
        var _0x5ee76b = function _0x17b28b() {
          var _0x1ac5ec = _0x2e4f54 == 5 ? 0 : _0x2e4f54;
          _0x368e89(_0x1ac5ec / 4);
          _0x229727[_0x57ee0e.ae] = new _0xb65a12.$C.be(_0x57ee0e.Xd, _0x34f275);
          _0x4d71bf();
        };
        var _0x4d71bf = function _0x1b8345() {
          try {
            if (_0x2e4f54 < _0x22d82d.length) {
              _0x57ee0e = _0x22d82d[_0x2e4f54];
              _0x2e4f54++;
              _0x229727[_0x57ee0e.ae] = new _0xb65a12.$C.be(_0x57ee0e.resource.texture, _0x57ee0e.resource.texture.baseTexture);
              _0x4d71bf();
              return;
            }
            return _0x5b9d66.ce(_0x51c450, _0x229727);
          } catch (_0x16e7a4) {
            console.error(_0x16e7a4);
          }
        };
        var _0x2e4f54 = 0;
        _0x4d71bf();
      };
      _0xb65a12.p = function (_0x397276, _0x167e7) {
        _0x397276 = _0x397276.split("|");
        _0xb65a12.pm[_0x397276[0]] = {
          p: _0x397276[1],
          i: _0x167e7
        };
      };
      _0xb65a12.ae = function (_0x50cd1d, _0xcbc279, _0x227669) {
        if (_0xcbc279.maV !== 1) {
          _0xcbc279.maV = 1;
          var _0x53c0c5 = _0xcbc279.ma.trim().match(_0x58e058);
          if (_0x53c0c5 && _0x227669.dh.Fh[_0xcbc279.ae]) {
            var _0x247f2a = function _0x4c746c(_0x5c3b05, _0x42543d) {
              if (_0x5c3b05.includes("_")) {
                if (_0x1bbcee["WEAR_W" + _0x2c5c0c + "_" + _0x5c3b05]) {
                  return _0x1bbcee["WEAR_W" + _0x2c5c0c + "_" + _0x5c3b05].reference;
                } else {
                  return _0x42543d;
                }
              }
              return _wwc.wearMap[_0x5c3b05];
            };
            var _0x44576a = _0x53c0c5[3];
            var _0x2c5c0c = _0x53c0c5[4];
            var _0x2bccbc = _0x53c0c5[5];
            var _0x4d1e25 = _0x53c0c5[6];
            var _0x2c1cfc = _0x53c0c5[7];
            var _0x66045c = _0x53c0c5[8];
            var _0x3d24e9 = _0x53c0c5[9];
            var _0x1bbcee = _0x3c7638.Lc.Xb().textureDict;
            var _0x1947e0 = _0x44576a === "B";
            if (_0x2bccbc !== "000") {
              var _0x3b80e8 = "SKIN_S" + _0x2bccbc.substring(0, 2) + "___" + _0x2bccbc.substring(2);
              var _0x38e9b2 = _0x1bbcee[_0x3b80e8];
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.Hh = !_0x1947e0 ? parseInt(_wwc.skinMap[_0x2bccbc]) : _0x38e9b2 ? _0x3b80e8 : _0x227669.dh.Fh[_0xcbc279.ae].Eh.Hh;
            }
            if (_0x4d1e25 !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.ni = _0x247f2a(_0x4d1e25, _0x227669.dh.Fh[_0xcbc279.ae].Eh.ni);
            }
            if (_0x2c1cfc !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.oi = _0x247f2a(_0x2c1cfc, _0x227669.dh.Fh[_0xcbc279.ae].Eh.oi);
            }
            if (_0x66045c !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.pi = _0x247f2a(_0x66045c, _0x227669.dh.Fh[_0xcbc279.ae].Eh.pi);
            }
            if (_0x3d24e9 !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.qi = _0x247f2a(_0x3d24e9, _0x227669.dh.Fh[_0xcbc279.ae].Eh.qi);
            }
            _0x227669.dh.Fh[_0xcbc279.ae].Eh.ma = _0x26b207(_0x227669.dh.Fh[_0xcbc279.ae].Eh.ma);
          }
        }
        _0xcbc279.ma = _0x26b207(_0xcbc279.ma);
      };
      _0xb65a12.Xp = function (_0x4e85bc, _0x3d3321, _0x4da33e, _0x49cdb1, _0x4c88e9, _0x161e41, _0x14e305) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = _0x3c7638.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = _0x3c7638.Lc.Xb().wearMap;
        }
        var _0x39911b = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var _0x5db799 = _0x3c7638.Lc.Xb().hatDict[_0x14e305] ? _0x3c7638.Lc.Xb().hatDict[_0x14e305].id : _0x14e305;
        var _0x376e03 = _0x3c7638.Lc.Xb().glassesDict[_0x161e41] ? _0x3c7638.Lc.Xb().glassesDict[_0x161e41].id : _0x161e41;
        var _0x2172b0 = _0x3c7638.Lc.Xb().glassesDict[_0x4c88e9] ? _0x3c7638.Lc.Xb().mouthDict[_0x4c88e9].id : _0x4c88e9;
        var _0x1ba085 = _0x3c7638.Lc.Xb().glassesDict[_0x49cdb1] ? _0x3c7638.Lc.Xb().eyesDict[_0x49cdb1].id : _0x49cdb1;
        var _0x9d2f16 = "A";
        var _0x36f698 = "";
        var _0x5491e9 = "__";
        var _0x35e88b = function _0x345263(_0x8ad5ff, _0x503513) {
          if (_0x39911b.test(_0x8ad5ff)) {
            var _0x2b31a7 = _0x39911b.exec(_0x8ad5ff);
            return {
              id: _0x2b31a7[2],
              value: _0x2b31a7[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var _0x3995cf = {
          h: _0x35e88b(_0x4da33e, "h"),
          r: _0x35e88b(_0x1ba085, "r"),
          a: _0x35e88b(_0x2172b0, "a"),
          f: _0x35e88b(_0x376e03, "f"),
          c: _0x35e88b(_0x5db799, "c")
        };
        if (_0x3995cf.h.testRun) {
          _0x36f698 = _0x3995cf.h.id.substring(1);
          _0x9d2f16 = "B";
        }
        if (_0x3995cf.r.testRun || _0x3995cf.a.testRun || _0x3995cf.f.testRun || _0x3995cf.c.testRun) {
          _0x5491e9 = (_0x3995cf.r.id || _0x3995cf.a.id || _0x3995cf.f.id || _0x3995cf.c.id).substring(1);
        }
        var _0x485808 = function _0x596568(_0x4c1321, _0xfb6f29) {
          if (_0x3995cf[_0xfb6f29].value) {
            return _0x3995cf[_0xfb6f29].value.padStart(_0xfb6f29 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[_0xfb6f29 === "h" ? "testSkinMod" : "testWear"](_0x4c1321 || 0)) {
            if (_0x3995cf[_0xfb6f29].testRun) {
              return _0x4c1321.toString().padStart(_0xfb6f29 === "h" ? 3 : 2, "0");
            } else if (_0xfb6f29 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[_0xfb6f29 === "h" ? "skinMap" : "wearMap"][_0x4c1321] || (_0xfb6f29 === "h" ? "000" : "00");
        };
        var _0x3c3f0b = _0x485808(_0x4da33e, "h");
        var _0xf141bc = _0x485808(_0x49cdb1, "r");
        var _0x51f8b2 = _0x485808(_0x4c88e9, "a");
        var _0x264263 = _0x485808(_0x161e41, "f");
        var _0x2d3d31 = _0x485808(_0x14e305, "c");
        var _0x1faac0 = _0x9d2f16 + _0x5491e9 + _0x36f698 + _0x3c3f0b.replace("__", "") + _0xf141bc + _0x51f8b2 + _0x264263 + _0x2d3d31;
        bbs.code = (_0x3c3f0b || "000") + "|" + (_0x2d3d31 || "00");
        function _0x51abd4(_0x47e2cb, _0x31c86a) {
          var _0x2d5895 = "";
          _0x2d5895 = _0x47e2cb.substring(0, _0x4ac6e2).padEnd(_0x4ac6e2, "_");
          var _0x37fd1c = _0x2d5895 + _0x31c86a;
          return _0x37fd1c;
        }
        bbs.nickname = _0x51abd4(_0x3d3321, _0x1faac0);
        return bbs.nickname;
      };
      _0xb65a12.bgg = function (_0x1064f9) {
        _0x1064f9 = parseInt(_0x1064f9);
        var _0x452535 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
        if (!isNaN(_0x1064f9)) {
          _0x452535 = backgroundArena[_0x1064f9]?.uri || _0x452535;
          bbs.bgGameWidth = backgroundArena[_0x1064f9]?.w || 512;
          bbs.bgGameHeight = backgroundArena[_0x1064f9]?.h || 256;
        }
        var _0x424f71 = PIXI.BaseTexture.from(_0x452535);
        bbs.bgGameWidth = _0x424f71.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = _0x424f71.height || bbs.bgGameHeight || 256;
        _0x424f71.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        return new PIXI.Texture(_0x424f71);
      };
      _0xb65a12.genereteTexture = function (_0x146eb9) {
        var _0x1909e8 = 128;
        var _0x176d00 = 9;
        try {
          var _0x50df5d = function _0x557c9e() {
            var _0x4f2482 = [];
            for (var _0x31c5a8 = 0; _0x31c5a8 < _0x146eb9.lines; _0x31c5a8++) {
              lineContainer = [];
              for (var _0x2809bc = 0; _0x2809bc < _0x176d00; _0x2809bc++) {
                try {
                  var _0x1490b2 = PIXI.Texture.from(_0x146eb9._d, {
                    x: _0x2809bc * _0x1909e8,
                    y: _0x31c5a8 * _0x1909e8,
                    width: _0x1909e8,
                    height: _0x1909e8
                  });
                  lineContainer.push(_0x1490b2);
                } catch (_0x377e92) {
                  console.log(_0x31c5a8, _0x2809bc);
                  console.log(_0x377e92);
                  return;
                }
              }
              _0x4f2482.push(lineContainer);
            }
            return _0x4f2482;
          };
          return _0x50df5d();
        } catch (_0x42ea64) {
          return [];
        }
      };
      var _0x32451b = {
        headshot: "https://timmapwormate.com/images/hs_2.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      _0x3cd95c.ref = ["speed", "curve"];
      for (var _0x2d5804 in _0x32451b) {
        _0x3cd95c[_0x2d5804] = new _0x5213e9.Howl({
          src: [_0x32451b[_0x2d5804]],
          html5: true,
          autoplay: _0x2d5804 == "top1",
          loop: false
        });
      }
      var _0x220e6f = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      var _0x3be3f8 = typeof Symbol == "function" && _0x5eb71e(Symbol.iterator) == "symbol" ? function (_0x50c223) {
        return _0x5eb71e(_0x50c223);
      } : function (_0x25dbb7) {
        if (_0x25dbb7 && typeof Symbol == "function" && _0x25dbb7.constructor === Symbol && _0x25dbb7 !== Symbol.prototype) {
          return "symbol";
        } else {
          return _0x5eb71e(_0x25dbb7);
        }
      };
      var _0x3fa18c;
      window.addEventListener("load", function () {
        function _0x349bb7() {
          (function (_0x245a63, _0xe0fdf4, _0x5c30ad) {
            function _0x4db743(_0x2d165b, _0x2b3f1c) {
              return (_0x2d165b === undefined ? "undefined" : _0x3be3f8(_0x2d165b)) === _0x2b3f1c;
            }
            function _0x500615() {
              if (typeof _0xe0fdf4.createElement != "function") {
                return _0xe0fdf4.createElement(arguments[0]);
              } else if (_0x4afe72) {
                return _0xe0fdf4.createElementNS.call(_0xe0fdf4, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return _0xe0fdf4.createElement.apply(_0xe0fdf4, arguments);
              }
            }
            var _0x2ff9e2 = [];
            var _0x17f80c = [];
            var _0x50e5e5 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function _0x3e0ddd(_0x3c1383, _0x3b5671) {
                var _0x8f4166 = this;
                setTimeout(function () {
                  _0x3b5671(_0x8f4166[_0x3c1383]);
                }, 0);
              },
              addTest: function _0x3810b1(_0x40b726, _0x21adda, _0x46bf2e) {
                _0x17f80c.push({
                  name: _0x40b726,
                  fn: _0x21adda,
                  options: _0x46bf2e
                });
              },
              addAsyncTest: function _0x531b34(_0x14656c) {
                _0x17f80c.push({
                  name: null,
                  fn: _0x14656c
                });
              }
            };
            var _0x3cf45b = function _0x407730() {};
            _0x3cf45b.prototype = _0x50e5e5;
            _0x3cf45b = new _0x3cf45b();
            var _0x5bc98c = false;
            try {
              _0x5bc98c = "WebSocket" in _0x245a63 && _0x245a63.WebSocket.CLOSING === 2;
            } catch (_0x2f2b2e) {}
            _0x3cf45b.addTest("websockets", _0x5bc98c);
            var _0x4d91c8 = _0xe0fdf4.documentElement;
            var _0x4afe72 = _0x4d91c8.nodeName.toLowerCase() === "svg";
            _0x3cf45b.addTest("canvas", function () {
              var _0x5cfd94 = _0x500615("canvas");
              return !!_0x5cfd94.getContext && !!_0x5cfd94.getContext("2d");
            });
            _0x3cf45b.addTest("canvastext", function () {
              return _0x3cf45b.canvas !== false && typeof _0x500615("canvas").getContext("2d").fillText == "function";
            });
            (function () {
              var _0x4890df;
              var _0xcd24bd;
              var _0x44bf26;
              var _0xf730a4;
              var _0x5757d6;
              var _0x3e6f38;
              var _0x23199b;
              for (var _0x8c8732 in _0x17f80c) {
                if (_0x17f80c.hasOwnProperty(_0x8c8732)) {
                  _0x4890df = [];
                  _0xcd24bd = _0x17f80c[_0x8c8732];
                  if (_0xcd24bd.name && (_0x4890df.push(_0xcd24bd.name.toLowerCase()), _0xcd24bd.options && _0xcd24bd.options.aliases && _0xcd24bd.options.aliases.length)) {
                    for (_0x44bf26 = 0; _0x44bf26 < _0xcd24bd.options.aliases.length; _0x44bf26++) {
                      _0x4890df.push(_0xcd24bd.options.aliases[_0x44bf26].toLowerCase());
                    }
                  }
                  _0xf730a4 = _0x4db743(_0xcd24bd.fn, "function") ? _0xcd24bd.fn() : _0xcd24bd.fn;
                  _0x5757d6 = 0;
                  for (; _0x5757d6 < _0x4890df.length; _0x5757d6++) {
                    _0x3e6f38 = _0x4890df[_0x5757d6];
                    _0x23199b = _0x3e6f38.split(".");
                    if (_0x23199b.length === 1) {
                      _0x3cf45b[_0x23199b[0]] = _0xf730a4;
                    } else {
                      if (!!_0x3cf45b[_0x23199b[0]] && !(_0x3cf45b[_0x23199b[0]] instanceof Boolean)) {
                        _0x3cf45b[_0x23199b[0]] = new Boolean(_0x3cf45b[_0x23199b[0]]);
                      }
                      _0x3cf45b[_0x23199b[0]][_0x23199b[1]] = _0xf730a4;
                    }
                    _0x2ff9e2.push((_0xf730a4 ? "" : "no-") + _0x23199b.join("-"));
                  }
                }
              }
            })();
            (function (_0x4e00ec) {
              var _0x180636 = _0x4d91c8.className;
              var _0x1ab6ec = _0x3cf45b._config.classPrefix || "";
              if (_0x4afe72) {
                _0x180636 = _0x180636.baseVal;
              }
              if (_0x3cf45b._config.enableJSClass) {
                var _0x2414dc = new RegExp("(^|\\s)" + _0x1ab6ec + "no-js(\\s|$)");
                _0x180636 = _0x180636.replace(_0x2414dc, "$1" + _0x1ab6ec + "js$2");
              }
              if (_0x3cf45b._config.enableClasses) {
                _0x180636 += " " + _0x1ab6ec + _0x4e00ec.join(" " + _0x1ab6ec);
                if (_0x4afe72) {
                  _0x4d91c8.className.baseVal = _0x180636;
                } else {
                  _0x4d91c8.className = _0x180636;
                }
              }
            })(_0x2ff9e2);
            delete _0x50e5e5.addTest;
            delete _0x50e5e5.addAsyncTest;
            for (var _0x101893 = 0; _0x101893 < _0x3cf45b._q.length; _0x101893++) {
              _0x3cf45b._q[_0x101893]();
            }
            _0x245a63.Modernizr = _0x3cf45b;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "unblock";
        
        // Add animated confetti background
        var confettiURL = "https://timmapwormate.com/images/store/confetti-tmw.png";
        var bgLayerId = "animated-confetti-layer";
        var bgLayer = document.getElementById(bgLayerId);
        
        if (!bgLayer) {
          bgLayer = document.createElement("div");
          bgLayer.id = bgLayerId;
          bgLayer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
          `;
          document.body.appendChild(bgLayer);
        }
        
        // Add confetti CSS styles
        var styleId = "confetti-style";
        if (!document.getElementById(styleId)) {
          var st = document.createElement("style");
          st.id = styleId;
          st.textContent = `
            .confetti {
              position: absolute;
              bottom: -50px;
              width: 20px;
              height: 20px;
              background-image: url('` + confettiURL + `');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              animation: floatUpRandom linear infinite;
              opacity: 0.9;
              pointer-events: none;
              will-change: transform, opacity;
            }
            
            @keyframes floatUpRandom {
              0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0.9;
              }
              100% {
                transform: translateY(-100vh) translateX(var(--end-x, 0)) rotate(var(--end-rotate, 0deg));
                opacity: 0;
              }
            }
          `;
          document.head.appendChild(st);
        }
        
        // Clear existing confetti and add new ones
        bgLayer.innerHTML = '';
        for (let i = 0; i < 20; i++) {
          let confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 100}%`);
          confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
          confetti.style.animationDuration = `${5 + Math.random() * 10}s`;
          confetti.style.animationDelay = `${Math.random() * 5}s`;
          bgLayer.appendChild(confetti);
        }
        
        if (!_0x349bb7()) {
          document.getElementById("error-view").style.display = "unblock";
          return;
        }
        (function () {
          function _0x4b2cbe() {
            return _0x3c7638;
          }
          var _0x3819e1 = {};
          var _0x3a8870 = {};
          var _0x36bffa = {
            a: {
              r: window.runtimeHash,
              b: "https://gateway.wormate.io",
              c: "https://resources.wormate.io",
              d: "/images/linelogo-valday2023.png",
              e: "/images/guest-avatar-valday2023.png",
              f: "/images/confetti-valday2023.png",
              g: "/images/bg-event-pattern-valday2023.png"
            }
          };
          _0x36bffa.a.i = function () {
            var _0x5455ed = window.I18N_LANG;
            _0x5455ed ||= "en";
            return _0x5455ed;
          }();
          _0x36bffa.a.j = function () {
            var _0x4a2289 = undefined;
            switch (_0x36bffa.a.i) {
              case "uk":
                _0x4a2289 = "uk_UA";
                break;
              case "de":
                _0x4a2289 = "de_DE";
                break;
              case "fr":
                _0x4a2289 = "fr_FR";
                break;
              case "es":
                _0x4a2289 = "es_ES";
                break;
              default:
                _0x4a2289 = "en_US";
            }
            return _0x4a2289;
          }();
          moment.locale(_0x36bffa.a.j);
          var _0x4efbaa = function () {
            return {
              Container: PIXI.Container,
              BaseTexture: PIXI.BaseTexture,
              Texture: PIXI.Texture,
              Renderer: PIXI.Renderer,
              Graphics: PIXI.Graphics,
              Shader: PIXI.Shader,
              Rectangle: PIXI.Rectangle,
              Sprite: PIXI.Sprite,
              Text: PIXI.Text,
              Geometry: PIXI.Geometry,
              Mesh: PIXI.Mesh,
              v: {
                z: PIXI.BLEND_MODES.ADD,
                A: PIXI.BLEND_MODES.SCREEN,
                B: PIXI.BLEND_MODES.MULTIPLY
              },
              C: {
                D: PIXI.WRAP_MODES.REPEAT
              }
            };
          }();
          _0x3a8870.F = 6.283185307179586;
          _0x3a8870.G = Math.PI;
          _0x36bffa.H = function (_0x42281d) {
            return window.I18N_MESSAGES[_0x42281d];
          };
          _0x36bffa.I = function (_0x3290ac) {
            if (_0x3290ac[_0x36bffa.a.i]) {
              return _0x3290ac[_0x36bffa.a.i];
            } else if (_0x3290ac.en) {
              return _0x3290ac.en;
            } else {
              return _0x3290ac.x;
            }
          };
          _0x36bffa.J = function (_0x4b3053) {
            var _0x2c43cc = (Math.floor(_0x4b3053) % 60).toString();
            var _0x300888 = (Math.floor(_0x4b3053 / 60) % 60).toString();
            var _0x4ee87f = (Math.floor(_0x4b3053 / 3600) % 24).toString();
            var _0xb8236e = Math.floor(_0x4b3053 / 86400).toString();
            var _0x5c61a3 = _0x36bffa.H("util.time.days");
            var _0x292e4e = _0x36bffa.H("util.time.hours");
            var _0x498a0d = _0x36bffa.H("util.time.min");
            var _0x40f2b3 = _0x36bffa.H("util.time.sec");
            if (_0xb8236e > 0) {
              return _0xb8236e + " " + _0x5c61a3 + " " + _0x4ee87f + " " + _0x292e4e + " " + _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else if (_0x4ee87f > 0) {
              return _0x4ee87f + " " + _0x292e4e + " " + _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else if (_0x300888 > 0) {
              return _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else {
              return _0x2c43cc + " " + _0x40f2b3;
            }
          };
          _0x36bffa.K = function (_0x452a5e) {
            if (_0x452a5e.includes("href")) {
              return _0x452a5e.replaceAll("href", "target=\"_black\" href");
            } else {
              return _0x452a5e;
            }
          };
          _0x36bffa.L = function (_0x457289, _0x58e4fa, _0x3d2e4c, _0x29960c) {
            var _0x49d7a1 = document.createElement("script");
            var _0x187792 = true;
            if (_0x3be3f8(_0x58e4fa) !== "undefined" && _0x58e4fa !== null) {
              if (_0x3be3f8(_0x58e4fa.id) !== "undefined") {
                _0x49d7a1.id = _0x58e4fa.id;
              }
              if (_0x3be3f8(_0x58e4fa.async) !== "undefined" && _0x58e4fa.async) {
                _0x49d7a1.async = "async";
              }
              if (_0x3be3f8(_0x58e4fa.defer) !== "undefined" && _0x58e4fa.defer) {
                _0x49d7a1.defer = "defer";
              }
              if (_0x3be3f8(_0x58e4fa.crossorigin) !== "undefined") {
                _0x49d7a1.crossorigin = _0x58e4fa.crossorigin;
              }
            }
            _0x49d7a1.type = _0x49d7a1.type == _0x29960c ? "module" : "text/javascript";
            _0x49d7a1.src = _0x457289;
            if (_0x3d2e4c) {
              _0x49d7a1.onload = _0x49d7a1.onreadystatechange = function () {
                _0x187792 = false;
                try {
                  _0x3d2e4c();
                } catch (_0x3d86ac) {}
                _0x49d7a1.onload = _0x49d7a1.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x49d7a1);
          };
          _0x36bffa.M = function (_0x242fe3, _0x4a0f8c) {
            var _0x242bdf = _0x4a0f8c;
            _0x242bdf.prototype = Object.create(_0x242fe3.prototype);
            _0x242bdf.prototype.constructor = _0x242bdf;
            _0x242bdf.parent = _0x242fe3;
            return _0x242bdf;
          };
          _0x36bffa.N = function (_0xfb1a60) {
            _0xfb1a60 %= _0x3a8870.F;
            if (_0xfb1a60 < 0) {
              return _0xfb1a60 + _0x3a8870.F;
            } else {
              return _0xfb1a60;
            }
          };
          _0x36bffa.O = function (_0x495945, _0x498fc3, _0x441b26) {
            return _0x36bffa.P(_0x441b26, _0x495945, _0x498fc3);
          };
          _0x36bffa.P = function (_0x23c0c1, _0xafaa78, _0x592074) {
            if (_0x23c0c1 > _0x592074) {
              return _0x592074;
            } else if (_0x23c0c1 < _0xafaa78) {
              return _0xafaa78;
            } else if (Number.isFinite(_0x23c0c1)) {
              return _0x23c0c1;
            } else {
              return (_0xafaa78 + _0x592074) * 0.5;
            }
          };
          _0x36bffa.Q = function (_0x266a8d, _0x1e81cc, _0x56e50b, _0x36d298) {
            if (_0x1e81cc > _0x266a8d) {
              return Math.min(_0x1e81cc, _0x266a8d + _0x56e50b * _0x36d298);
            } else {
              return Math.max(_0x1e81cc, _0x266a8d - _0x56e50b * _0x36d298);
            }
          };
          _0x36bffa.R = function (_0xc47825, _0x55debb, _0x484bca, _0x43509d, _0x521940) {
            return _0x55debb + (_0xc47825 - _0x55debb) * Math.pow(1 - _0x43509d, _0x484bca / _0x521940);
          };
          _0x36bffa.S = function (_0x7516dd, _0x40f37f, _0x419cee) {
            return _0x7516dd - (_0x7516dd - _0x40f37f) * _0x419cee;
          };
          _0x36bffa.T = function (_0x23eab7, _0x112904, _0x4c3db5, _0x5061c4) {
            var _0x1b263f = _0x4c3db5;
            var _0x39fc81 = _0x112904;
            var _0x5392fa = _0x112904 + _0x5061c4;
            if (_0x23eab7 == null) {
              throw new TypeError("this is null or not defined");
            }
            var _0x57a9c6 = _0x23eab7.length >>> 0;
            var _0x258c76 = _0x1b263f >> 0;
            var _0x57e6b5 = _0x258c76 < 0 ? Math.max(_0x57a9c6 + _0x258c76, 0) : Math.min(_0x258c76, _0x57a9c6);
            var _0x5f295e = _0x39fc81 >> 0;
            var _0x44049d = _0x5f295e < 0 ? Math.max(_0x57a9c6 + _0x5f295e, 0) : Math.min(_0x5f295e, _0x57a9c6);
            var _0x28747b = _0x5392fa === undefined ? _0x57a9c6 : _0x5392fa >> 0;
            var _0x558302 = _0x28747b < 0 ? Math.max(_0x57a9c6 + _0x28747b, 0) : Math.min(_0x28747b, _0x57a9c6);
            var _0x33045b = Math.min(_0x558302 - _0x44049d, _0x57a9c6 - _0x57e6b5);
            var _0x3469a8 = 1;
            for (_0x44049d < _0x57e6b5 && _0x57e6b5 < _0x44049d + _0x33045b && (_0x3469a8 = -1, _0x44049d += _0x33045b - 1, _0x57e6b5 += _0x33045b - 1); _0x33045b > 0;) {
              if (_0x44049d in _0x23eab7) {
                _0x23eab7[_0x57e6b5] = _0x23eab7[_0x44049d];
              } else {
                delete _0x23eab7[_0x57e6b5];
              }
              _0x44049d += _0x3469a8;
              _0x57e6b5 += _0x3469a8;
              _0x33045b--;
            }
            return _0x23eab7;
          };
          _0x36bffa.U = function (_0x3cb4ba) {
            if (_0x3cb4ba.parent != null) {
              _0x3cb4ba.parent.removeChild(_0x3cb4ba);
            }
          };
          _0x36bffa.V = function (_0x3f99c5, _0x5e1bd) {
            return _0x3f99c5 + (_0x5e1bd - _0x3f99c5) * Math.random();
          };
          _0x36bffa.W = function (_0x5f5719) {
            return _0x5f5719[parseInt(Math.random() * _0x5f5719.length)];
          };
          _0x36bffa.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          _0x36bffa.Y = function (_0x332cc3, _0x471cc7, _0x45541f) {
            var _0x5b742b = (1 - Math.abs(_0x45541f * 2 - 1)) * _0x471cc7;
            var _0x1f23e2 = _0x5b742b * (1 - Math.abs(_0x332cc3 / 60 % 2 - 1));
            var _0x52c33c = _0x45541f - _0x5b742b / 2;
            if (_0x332cc3 >= 0 && _0x332cc3 < 60) {
              return [_0x52c33c + _0x5b742b, _0x52c33c + _0x1f23e2, _0x52c33c + 0];
            } else if (_0x332cc3 >= 60 && _0x332cc3 < 120) {
              return [_0x52c33c + _0x1f23e2, _0x52c33c + _0x5b742b, _0x52c33c + 0];
            } else if (_0x332cc3 >= 120 && _0x332cc3 < 180) {
              return [_0x52c33c + 0, _0x52c33c + _0x5b742b, _0x52c33c + _0x1f23e2];
            } else if (_0x332cc3 >= 180 && _0x332cc3 < 240) {
              return [_0x52c33c + 0, _0x52c33c + _0x1f23e2, _0x52c33c + _0x5b742b];
            } else if (_0x332cc3 >= 240 && _0x332cc3 < 300) {
              return [_0x52c33c + _0x1f23e2, _0x52c33c + 0, _0x52c33c + _0x5b742b];
            } else {
              return [_0x52c33c + _0x5b742b, _0x52c33c + 0, _0x52c33c + _0x1f23e2];
            }
          };
          _0x36bffa.Z = function (_0x48a59c, _0x4bc156, _0x502f35) {
            $.get(_0x48a59c).fail(_0x4bc156).done(_0x502f35);
          };
          _0x36bffa.$ = function (_0x908703, _0xabae3d, _0x3293a2, _0x483ea5) {
            $.ajax({
              type: "GET",
              url: _0x908703,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function _0x34a19c(_0x161516) {
                  if (_0x161516.lengthComputable) {
                    _0x483ea5(_0x161516.loaded / _0x161516.total * 100);
                  }
                }
              }
            }).fail(_0xabae3d).done(_0x3293a2);
          };
          _0x36bffa._ = function (_0x246488, _0x93eab9) {
            for (var _0xc8a7aa in _0x246488) {
              if (_0x246488.hasOwnProperty(_0xc8a7aa)) {
                _0x93eab9(_0xc8a7aa, _0x246488[_0xc8a7aa]);
              }
            }
          };
          _0x36bffa.aa = function (_0xb8c2c6) {
            for (var _0x370856 = _0xb8c2c6.length - 1; _0x370856 > 0; _0x370856--) {
              var _0x48e9ac = Math.floor(Math.random() * (_0x370856 + 1));
              var _0x343178 = _0xb8c2c6[_0x370856];
              _0xb8c2c6[_0x370856] = _0xb8c2c6[_0x48e9ac];
              _0xb8c2c6[_0x48e9ac] = _0x343178;
            }
            return _0xb8c2c6;
          };
          (function () {
            var _0x3b547f = 0;
            try {
              DataView.prototype.ba = function (_0x508c66) {
                try {
                  _0x3b547f = _0x508c66;
                  return this.getInt8(_0x508c66);
                } catch (_0x508df0) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ca = function (_0xa41611) {
                try {
                  _0x3b547f = _0xa41611;
                  return this.getInt16(_0xa41611);
                } catch (_0x1cd2ee) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.da = function (_0x543af9) {
                try {
                  _0x3b547f = _0x543af9;
                  return this.getInt32(_0x543af9);
                } catch (_0x57b591) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ea = function (_0x374445) {
                try {
                  _0x3b547f = _0x374445;
                  return this.getFloat32(_0x374445);
                } catch (_0x400ae9) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.fa = function (_0x370413) {
                try {
                  _0x3b547f = _0x370413;
                  return this.getFloat64(_0x370413);
                } catch (_0x2ea0ed) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
            } catch (_0x4061e7) {
              console.log(_0x3b547f);
              console.error("Error adding methods to DataView prototype:", _0x4061e7);
            }
          })();
          _0x36bffa.ga = function () {
            function _0xa13080() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadunblocker", window.runtimeHash + "_complete");
                } catch (_0x323e45) {}
                _0x4ea41c(true);
              }
            }
            var _0x15a176 = false;
            var _0x4ea41c = function _0x9d5bde() {};
            var _0x500f6b = {};
            var _0x503c18 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + _0x503c18).fadeOut(500);
              _0x4ea41c(false);
            });
            _0x500f6b.ha = function (_0x414a55) {
              _0x4ea41c = _0x414a55;
              if (!_0x15a176) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer();
                  });
                  _0x15a176 = true;
                } catch (_0x2c121) {}
              }
            };
            _0x500f6b.ia = function () {
              try {
                ga("send", "event", "antiadunblocker", window.runtimeHash + "_start");
              } catch (_0x11a96c) {}
              _0xa13080();
            };
            return _0x500f6b;
          };
          _0x36bffa.ja = function (_0x2772ee, _0x5d7ee3) {
            var _0x3f8c75 = $("#" + _0x2772ee);
            var _0x1b2d86 = _0x5d7ee3;
            var _0x1a49eb = {};
            var _0x5bbb45 = false;
            _0x1a49eb.ha = function () {
              if (!_0x5bbb45) {
                _0x3f8c75.empty();
                _0x3f8c75.append("<div id='" + _0x1b2d86 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (_0x2cc807) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(_0x1b2d86);
                  });
                  _0x5bbb45 = true;
                } catch (_0x43b1eb) {}
              }
            };
            _0x1a49eb.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (_0x5e1608) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(_0x1b2d86);
                });
              } catch (_0x3b59e8) {}
            };
            return _0x1a49eb;
          };
          _0x3819e1.la = function () {
            function _0x55b73c(_0x4d56fb, _0x5cb196, _0x56b941, _0x5b4415, _0x3703c1, _0x4d3986, _0x311f68, _0x294721, _0x342edc, _0x5562b5, _0xdbc28c) {
              this.ma = _0x4d56fb;
              this.na = _0x5cb196;
              this.oa = null;
              this.pa = false;
              this.qa = _0x56b941;
              this.ra = _0x5b4415;
              this.sa = _0x3703c1;
              this.ta = _0x4d3986;
              this.ua = _0x311f68 || (_0x342edc || _0x3703c1) / 2;
              this.va = _0x294721 || (_0x5562b5 || _0x4d3986) / 2;
              this.wa = _0x342edc || _0x3703c1;
              this.xa = _0x5562b5 || _0x4d3986;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (_0xdbc28c) {
                this.ev = _0xdbc28c;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            _0x55b73c.Ca = function () {
              return new _0x55b73c("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            _0x55b73c.Da = function (_0x206616, _0x2f4a13, _0x2f563b, _0xc3226a) {
              return new _0x55b73c(_0x206616, _0x2f4a13, _0x2f563b.x, _0x2f563b.y, _0x2f563b.w, _0x2f563b.h, _0x2f563b.px, _0x2f563b.py, _0x2f563b.pw, _0x2f563b.ph, _0xc3226a);
            };
            _0x55b73c.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new _0x4efbaa.Texture(this.na, new _0x4efbaa.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            _0x55b73c.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return _0x55b73c;
          }();
          _0x3819e1.Ga = function () {
            function _0x271ea4(_0x18c0f3, _0xef27f4, _0x57dfff, _0x14740c, _0x306103, _0xc20790, _0x5a4d66, _0x155288, _0x7df0e0, _0x4f144b, _0x473286, _0x30c03f, _0x259a5a, _0x11e790, _0xf172f0, _0x412dfc, _0x24dd33, _0x3b86fd) {
              this.Ha = _0x18c0f3;
              this.Ia = _0xef27f4;
              this.Ja = _0x57dfff;
              this.Ka = _0x14740c;
              this.La = _0x306103;
              this.Ma = _0xc20790;
              this.Na = _0x5a4d66;
              this.Oa = _0x155288;
              this.Pa = _0x7df0e0;
              this.Qa = _0x4f144b;
              this.Ra = _0x473286;
              this.Sa = _0x30c03f;
              this.Ta = _0x259a5a;
              this.Ua = _0x11e790;
              this.Va = _0xf172f0;
              this.Wa = _0x412dfc;
              this.Xa = _0x24dd33;
              this.Ya = _0x3b86fd;
            }
            _0x271ea4.prototype.Fa = function () {
              for (var _0x353210 = 0; _0x353210 < this.Ha.length; _0x353210++) {
                this.Ha[_0x353210].dispose();
                this.Ha[_0x353210].destroy();
              }
              this.Ha = [];
              for (var _0x13bfbd = 0; _0x13bfbd < this.Ia.length; _0x13bfbd++) {
                this.Ia[_0x13bfbd].Fa();
              }
              this.Ia = [];
            };
            _0x271ea4.Ca = function () {
              var _0x23e878 = new _0x271ea4.Za(_0x3819e1._a.$a, _0x3819e1._a.$a);
              var _0x28e526 = new _0x271ea4.ab("#ffffff", [_0x3819e1._a.$a], [_0x3819e1._a.$a]);
              return new _0x271ea4([], [], {}, _0x23e878, {}, new _0x271ea4.bb(_0x3819e1._a.$a), {}, _0x28e526, {}, new _0x271ea4.cb("", _0x28e526, _0x23e878), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]));
            };
            _0x271ea4.eb = function (_0x23eda0, _0x516c8f, _0x44594d, _0x546b3e) {
              var _0x16632f = new _0x271ea4.Za(_0x3819e1._a.$a, _0x3819e1._a.$a);
              var _0x45fe50 = new _0x271ea4.ab("#ffffff", [_0x23eda0], [_0x516c8f]);
              return new _0x271ea4([], [], {}, _0x16632f, {}, new _0x271ea4.bb(_0x3819e1._a.$a), {}, _0x45fe50, {}, new _0x271ea4.cb("", _0x45fe50, _0x16632f), {}, new _0x271ea4.db([_0x44594d]), {}, new _0x271ea4.db([_0x546b3e]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]));
            };
            _0x271ea4.fb = function (_0x5dc044, _0x51ab3b, _0x5035bc, _0x5f079f) {
              var _0x21f656 = {};
              _0x36bffa._(_0x5dc044.colorDict, function (_0x4d968a, _0x6ce9a8) {
                _0x21f656[_0x4d968a] = "#" + _0x6ce9a8;
              });
              var _0x4651ee = {};
              for (var _0x11abb7 = 0; _0x11abb7 < _0x5dc044.skinArrayDict.length; _0x11abb7++) {
                var _0x519656 = _0x5dc044.skinArrayDict[_0x11abb7];
                _0x4651ee[_0x519656.id] = new _0x271ea4.ab(_0x21f656[_0x519656.prime], _0x519656.base.map(function (_0xce9b36) {
                  return _0x51ab3b[_0xce9b36];
                }), _0x519656.glow.map(function (_0x22902e, _0x12a228) {
                  return _0x51ab3b[_0x22902e];
                }));
                if (_0x519656.glow[0] == "a_trans") {
                  _0x4651ee[_0x519656.id].vbb = _0x51ab3b.a_black;
                }
              }
              var _0x31f6bc = undefined;
              var _0x5424f5 = _0x5dc044.skinUnknown;
              try {
                _0x31f6bc = new _0x271ea4.ab(_0x21f656[_0x5424f5.prime], _0x5424f5.base.map(function (_0x14ace7) {
                  return _0x51ab3b[_0x14ace7];
                }), _0x5424f5.glow.map(function (_0x4fa3fb) {
                  return _0x51ab3b[_0x4fa3fb];
                }));
              } catch (_0x4b89ae) {}
              var _0x4d30bc = {};
              _0x36bffa._(_0x5dc044.eyesDict, function (_0x589847, _0x466c14) {
                var _0x66cc16 = parseInt(_0x589847);
                _0x4d30bc[_0x66cc16] = new _0x271ea4.db(_0x466c14.base.map(function (_0x341586) {
                  return _0x51ab3b[_0x341586.region];
                }));
              });
              var _0x8660f3 = new _0x271ea4.db(_0x5dc044.eyesUnknown.base.map(function (_0x1ae369) {
                return _0x51ab3b[_0x1ae369.region];
              }));
              var _0x541b8f = {};
              _0x36bffa._(_0x5dc044.mouthDict, function (_0x5cc60d, _0x396c26) {
                var _0x28eab4 = parseInt(_0x5cc60d);
                _0x541b8f[_0x28eab4] = new _0x271ea4.db(_0x396c26.base.map(function (_0x193d73) {
                  return _0x51ab3b[_0x193d73.region];
                }));
              });
              var _0x4deba0 = new _0x271ea4.db(_0x5dc044.mouthUnknown.base.map(function (_0x5dfc9d) {
                return _0x51ab3b[_0x5dfc9d.region];
              }));
              var _0x3baabc = {};
              _0x36bffa._(_0x5dc044.hatDict, function (_0x70ae89, _0x18b48d) {
                var _0xfe894b = parseInt(_0x70ae89);
                _0x3baabc[_0xfe894b] = new _0x271ea4.db(_0x18b48d.base.map(function (_0x55a2d7) {
                  return _0x51ab3b[_0x55a2d7.region];
                }));
              });
              var _0x461080 = new _0x271ea4.db(_0x5dc044.hatUnknown.base.map(function (_0x2c096e) {
                return _0x51ab3b[_0x2c096e.region];
              }));
              var _0x56722c = {};
              _0x36bffa._(_0x5dc044.glassesDict, function (_0x4ee7a7, _0x5b5efe) {
                var _0x55806e = parseInt(_0x4ee7a7);
                _0x56722c[_0x55806e] = new _0x271ea4.db(_0x5b5efe.base.map(function (_0x24c7e7) {
                  return _0x51ab3b[_0x24c7e7.region];
                }));
              });
              var _0x4b6757 = new _0x271ea4.db(_0x5dc044.glassesUnknown.base.map(function (_0x24a004) {
                return _0x51ab3b[_0x24a004.region];
              }));
              var _0x4af7bc = {};
              _0x36bffa._(_0x5dc044.portionDict, function (_0x32bc70, _0x3eaa95) {
                _0x32bc70 = parseInt(_0x32bc70);
                _0x4af7bc[_0x32bc70] = new _0x271ea4.Za(_0x51ab3b[_0x3eaa95.base], _0x51ab3b[_0x3eaa95.glow]);
              });
              var _0x4632e7 = undefined;
              var _0x122133 = _0x5dc044.portionUnknown;
              _0x4632e7 = new _0x271ea4.Za(_0x51ab3b[_0x122133.base], _0x51ab3b[_0x122133.glow]);
              var _0x3de101 = {};
              _0x36bffa._(_0x5dc044.abilityDict, function (_0x25a453, _0x21b666) {
                _0x25a453 = parseInt(_0x25a453);
                _0x3de101[_0x25a453] = new _0x271ea4.bb(_0x51ab3b[_0x21b666.base]);
              });
              var _0x53f705 = undefined;
              var _0x1a106c = _0x5dc044.abilityUnknown;
              _0x53f705 = new _0x271ea4.bb(_0x51ab3b[_0x1a106c.base]);
              var _0x24029a = {};
              _0x36bffa._(_0x5dc044.teamDict, function (_0x5358ce, _0x39bb62) {
                _0x5358ce = parseInt(_0x5358ce);
                _0x24029a[_0x5358ce] = new _0x271ea4.cb(_0x39bb62.title, new _0x271ea4.ab(_0x21f656[_0x39bb62.skin.prime], null, _0x39bb62.skin.glow.map(function (_0x428bb3) {
                  return _0x51ab3b[_0x428bb3];
                })), new _0x271ea4.Za(null, _0x51ab3b[_0x39bb62.portion.glow]));
              });
              var _0x52ccfc = new _0x271ea4.cb({}, _0x31f6bc, _0x4632e7);
              return new _0x271ea4(_0x5035bc, _0x5f079f, _0x4af7bc, _0x4632e7, _0x3de101, _0x53f705, _0x4651ee, _0x31f6bc, _0x24029a, _0x52ccfc, _0x4d30bc, _0x8660f3, _0x541b8f, _0x4deba0, _0x3baabc, _0x461080, _0x56722c, _0x4b6757);
            };
            _0x271ea4.prototype.gb = function (_0x192d7c) {
              var _0x17ed59 = _0x36bffa.aa(Object.keys(this.Na)).slice(0, _0x192d7c);
              var _0x43f126 = _0x36bffa.aa(Object.keys(this.Ra)).slice(0, _0x192d7c);
              var _0x1c1d1a = _0x36bffa.aa(Object.keys(this.Ta)).slice(0, _0x192d7c);
              var _0x47711d = _0x36bffa.aa(Object.keys(this.Va)).slice(0, _0x192d7c);
              var _0x21eb79 = _0x36bffa.aa(Object.keys(this.Xa)).slice(0, _0x192d7c);
              var _0x559cd0 = [];
              for (var _0xc2cee3 = 0; _0xc2cee3 < _0x192d7c; _0xc2cee3++) {
                var _0xc5cf28 = _0x17ed59.length > 0 ? _0x17ed59[_0xc2cee3 % _0x17ed59.length] : 0;
                var _0x46750e = _0x43f126.length > 0 ? _0x43f126[_0xc2cee3 % _0x43f126.length] : 0;
                var _0x4a5307 = _0x1c1d1a.length > 0 ? _0x1c1d1a[_0xc2cee3 % _0x1c1d1a.length] : 0;
                var _0x3a75cb = _0x47711d.length > 0 ? _0x47711d[_0xc2cee3 % _0x47711d.length] : 0;
                var _0x5878c3 = _0x21eb79.length > 0 ? _0x21eb79[_0xc2cee3 % _0x21eb79.length] : 0;
                _0x559cd0.push(new _0x3819e1.hb(_0xc5cf28, _0x46750e, _0x4a5307, _0x3a75cb, _0x5878c3));
              }
              return _0x559cd0;
            };
            _0x271ea4.prototype.ib = function (_0x300538) {
              if (this.Na.hasOwnProperty(_0x300538)) {
                return this.Na[_0x300538];
              } else {
                return this.Oa;
              }
            };
            _0x271ea4.prototype.jb = function (_0x3ffd9b) {
              if (this.Pa.hasOwnProperty(_0x3ffd9b)) {
                return this.Pa[_0x3ffd9b];
              } else {
                return this.Qa;
              }
            };
            _0x271ea4.prototype.kb = function (_0x471464) {
              if (this.Ra.hasOwnProperty(_0x471464)) {
                return this.Ra[_0x471464];
              } else {
                return this.Sa;
              }
            };
            _0x271ea4.prototype.lb = function (_0x273ea1) {
              if (this.Ta.hasOwnProperty(_0x273ea1)) {
                return this.Ta[_0x273ea1];
              } else {
                return this.Ua;
              }
            };
            _0x271ea4.prototype.mb = function (_0x345c0d) {
              if (this.Xa.hasOwnProperty(_0x345c0d)) {
                return this.Xa[_0x345c0d];
              } else {
                return this.Ya;
              }
            };
            _0x271ea4.prototype.nb = function (_0x5aa2d0) {
              if (this.Va.hasOwnProperty(_0x5aa2d0)) {
                return this.Va[_0x5aa2d0];
              } else {
                return this.Wa;
              }
            };
            _0x271ea4.prototype.ob = function (_0x5ece61) {
              if (this.Ja.hasOwnProperty(_0x5ece61)) {
                return this.Ja[_0x5ece61];
              } else {
                return this.Ka;
              }
            };
            _0x271ea4.prototype.pb = function (_0x39bbf7) {
              if (this.La.hasOwnProperty(_0x39bbf7)) {
                return this.La[_0x39bbf7];
              } else {
                return this.Ma;
              }
            };
            _0x271ea4.cb = function () {
              function _0xae6b5c(_0x2f1713, _0x867f86, _0x282935) {
                this.qb = _0x2f1713;
                this.rb = _0x867f86;
                this.sb = _0x282935;
              }
              return _0xae6b5c;
            }();
            _0x271ea4.ab = function () {
              function _0x2c55c5(_0x331062, _0xb69e49, _0x2dd27b) {
                this.tb = _0x331062;
                this.ub = _0xb69e49;
                this.vb = _0x2dd27b;
              }
              return _0x2c55c5;
            }();
            _0x271ea4.db = function () {
              function _0x4cc1c7(_0x4d1093) {
                this.ub = _0x4d1093;
              }
              return _0x4cc1c7;
            }();
            _0x271ea4.Za = function () {
              function _0x41294c(_0x43a1fe, _0xda2870) {
                this.ub = _0x43a1fe;
                this.vb = _0xda2870;
              }
              return _0x41294c;
            }();
            _0x271ea4.bb = function () {
              function _0x52b2be(_0x1e4237) {
                this.ub = _0x1e4237;
              }
              return _0x52b2be;
            }();
            return _0x271ea4;
          }();
          _0x3819e1._a = function () {
            function _0x3f7514() {
              var _0xe4687a = _0x4efbaa.BaseTexture.from("/images/wear-ability.png");
              for (var _0x46b3a0 = 1; _0x46b3a0 < 10; _0x46b3a0++) {
                this["vb" + _0x46b3a0] = new _0x3819e1.la("emoji_" + _0x46b3a0, _0xe4687a, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new _0x3819e1.la("magnet_ability", _0xe4687a, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new _0x3819e1.la("velocity_ability", _0xe4687a, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new _0x3819e1.la("flex_ability", _0xe4687a, 158, 4, 87, 74, 203, 63.5, 128, 128);
              var _0x38fec3 = _0x4efbaa.BaseTexture.from("https://wormup.in/assets/images/zigzagability1.png");
              this.pwrFlex = new _0x3819e1.la("flex_ability", _0x38fec3, 158, 4, 87, 74, 203, 63.5, 128, 128);
              var _0x46b3a0 = _0x4efbaa.BaseTexture.from("/images/def-look.png");
              var _0x5265da = new _0x3819e1.la("def_eyes", _0x46b3a0, 0, 0, 42, 80, 75, 64, 128, 128);
              var _0x2b34d9 = new _0x3819e1.la("def_mouth", _0x46b3a0, 46, 0, 20, 48, 109, 63, 128, 128);
              var _0x33c187 = new _0x3819e1.la("def_skin_glow", _0x46b3a0, 70, 0, 32, 32, 0, 0, 0, 0);
              var _0x30411f = new _0x3819e1.la("def_skin_base", _0x46b3a0, 46, 52, 64, 64, 0, 0, 0, 0);
              var _0x58a4ad = _0x3819e1.Ga.eb(_0x30411f, _0x33c187, _0x5265da, _0x2b34d9);
              _wwc.mySkin = _0x58a4ad;
              this.zb = new _0x3819e1.Ab({}, _0x58a4ad);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var _0x458b6d = window.document.createElement("canvas");
                _0x458b6d.width = 80;
                _0x458b6d.height = 80;
                return {
                  Eb: _0x458b6d,
                  Fb: _0x458b6d.getContext("2d"),
                  oa: new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from(_0x458b6d))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            _0x3f7514.$a = _0x3819e1.la.Ca();
            _0x3f7514.prototype.ha = function () {};
            _0x3f7514.prototype.Ib = function (_0x464c01, _0x55b5cd, _0x564f24) {
              var _0x3890d2 = this;
              var _0x1913e2 = this.zb.Jb();
              if (_0x1913e2 > 0 && Date.now() - this.Bb < 1200000) {
                if (_0x464c01 != null) {
                  _0x464c01();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (_0x464c01 != null) {
                    _0x464c01();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var _0x269b72 = new _0x3819e1.Mb(_0x1913e2);
              _0x269b72.Nb(function (_0x259abc, _0x212313) {
                if (_0x269b72 === _0x3890d2.Gb && _0x564f24 != null) {
                  _0x564f24(_0x259abc, _0x212313);
                }
              });
              _0x269b72.Ob(function (_0x1c45ab) {
                if (_0x269b72 === _0x3890d2.Gb && _0x55b5cd != null) {
                  _0x55b5cd(_0x1c45ab);
                }
              });
              _0x269b72.Pb(function () {
                if (_0x269b72 === _0x3890d2.Gb && _0x55b5cd != null) {
                  _0x55b5cd(new Error());
                }
              });
              _0x269b72.Qb(function () {
                if (_0x269b72 === _0x3890d2.Gb && _0x464c01 != null) {
                  _0x464c01();
                }
              });
              _0x269b72.Rb(function (_0x4384a7) {
                if (_0x269b72 === _0x3890d2.Gb) {
                  _0x3890d2.Cb = Date.now();
                  _0x3890d2.Gb = null;
                  _0x3890d2.Sb();
                  _0x3890d2.zb.Ub().Fa();
                  _0x3890d2.zb = _0x4384a7;
                  if (_0x464c01 != null) {
                    _0x464c01();
                  }
                  _0x3890d2.Tb();
                  return;
                }
                try {
                  _0x4384a7.Ub().Fa();
                } catch (_0xb0595d) {}
              });
              _0x269b72.Vb();
              this.Bb = Date.now();
              this.Gb = _0x269b72;
            };
            _0x3f7514.prototype.Sb = function () {};
            _0x3f7514.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            _0x3f7514.prototype.Xb = function () {
              return this.zb.Yb();
            };
            _0x3f7514.prototype.Zb = function () {
              return this.Db;
            };
            _0x3f7514.prototype.$b = function (_0x549733) {
              this.Hb.push(_0x549733);
            };
            _0x3f7514.prototype.Tb = function () {
              for (var _0x1cd05d = 0; _0x1cd05d < this.Hb.length; _0x1cd05d++) {
                this.Hb[_0x1cd05d]();
              }
            };
            _0x3f7514.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return _0x3f7514;
          }();
          _0x3819e1._b = function () {
            function _0x47e940(_0x12c90d) {
              this.ac = _0x12c90d;
            }
            _0x47e940.prototype.bc = function (_0x1f91ac) {
              return this.ac[_0x1f91ac];
            };
            _0x47e940.cc = function () {
              function _0x130c01() {
                this.dc = [];
              }
              _0x130c01.prototype.ec = function (_0x2a5681, _0x23aaad) {
                for (var _0x44bca4 = 0; _0x44bca4 < this.dc.length; _0x44bca4++) {
                  if (this.dc[_0x44bca4].fc === _0x2a5681) {
                    throw new Error();
                  }
                }
                this.dc.push(new _0x47e940.gc(_0x2a5681, _0x23aaad));
                return this;
              };
              _0x130c01.prototype.hc = function () {
                var _0x10ce15 = 0;
                for (var _0x2904d5 = 0; _0x2904d5 < this.dc.length; _0x2904d5++) {
                  _0x10ce15 += this.dc[_0x2904d5].ic;
                }
                var _0x341b65 = {};
                var _0x4cce46 = 0;
                for (var _0x317c54 = 0; _0x317c54 < this.dc.length; _0x317c54++) {
                  var _0x26e03a = this.dc[_0x317c54];
                  _0x26e03a.ic = _0x26e03a.ic / _0x10ce15;
                  _0x26e03a.jc = _0x4cce46;
                  _0x26e03a.kc = _0x4cce46 + _0x26e03a.ic;
                  _0x4cce46 = _0x26e03a.kc;
                  _0x341b65[_0x26e03a.fc] = _0x26e03a;
                }
                return new _0x47e940(_0x341b65);
              };
              return _0x130c01;
            }();
            _0x47e940.gc = function () {
              function _0x373c0f(_0x280c4b, _0x5e5d4c) {
                this.fc = _0x280c4b;
                this.ic = _0x5e5d4c;
                this.jc = 0;
                this.kc = 0;
              }
              _0x373c0f.prototype.lc = function (_0xf6f304) {
                return this.jc + (this.kc - this.jc) * _0xf6f304;
              };
              return _0x373c0f;
            }();
            return _0x47e940;
          }();
          _0x3819e1.WormSpriteTree = function () {
            function _0xf27b66() {
              this.nc = new _0x4efbaa.Container();
              this.nc.sortableChildren = true;
              this.oc = new _0x39400d();
              this.oc.zIndex = _0xfece1e * ((_0x5f092a + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(_0x5f092a);
              this.qc[0] = this.rc(0, new _0x3819e1.sc(), new _0x3819e1.sc());
              for (var _0xb04b0a = 1; _0xb04b0a < _0x5f092a; _0xb04b0a++) {
                this.qc[_0xb04b0a] = this.rc(_0xb04b0a, new _0x3819e1.sc(), new _0x3819e1.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var _0xfece1e = 0.001;
            var _0x5f092a = 797;
            var _0x51340d = 3.14159;
            var _0x37f8ca = -0.06640625;
            var _0x529157 = 0.84375;
            var _0x33b602 = 0.2578125;
            var _0x6055d6 = -0.03515625;
            var _0x12f431 = -0.0625;
            var _0x83f4fc = 0.5625;
            var _0x29d80b = _0x37f8ca * 3 + _0x529157;
            var _0x2be474 = _0x33b602 - _0x37f8ca * 3;
            var _0x2d0f3b = _0x37f8ca + _0x6055d6;
            var _0x809603 = 0.375;
            var _0x45080f = 0.75;
            var _0x4a7542 = _0x12f431 + _0x12f431;
            var _0x30465f = _0x6055d6 * 3 + _0x33b602;
            var _0x128f45 = _0x529157 - _0x6055d6 * 3;
            var _0x193574 = _0x6055d6 + _0x37f8ca;
            _0xf27b66.wc = _0x5f092a;
            _0xf27b66.prototype.rc = function (_0x130d57, _0x375774, _0x39235b) {
              var _0x47ac4a = new _0x1d143e(_0x375774, _0x39235b);
              _0x375774.xc.zIndex = _0xfece1e * ((_0x5f092a - _0x130d57) * 2 + 1 + 3);
              _0x39235b.xc.zIndex = _0xfece1e * ((_0x5f092a - _0x130d57) * 2 - 2 + 3);
              return _0x47ac4a;
            };
            _0xf27b66.prototype.yc = function (_0x15e927, _0x173d30, _0x367916, _0x4b97b5, _0x4d8929, _0x3d6ba2, _0x28742, _0x5908c0) {
              var _0x226a00 = _0x367916.ub;
              var _0x1d2347 = _0x15e927 === _0x3819e1.Ac.zc ? _0x173d30.rb.vb : _0x367916.vb;
              if (_0x226a00.length > 0 && _0x1d2347.length > 0) {
                for (var _0x3a96df = 0; _0x3a96df < this.qc.length; _0x3a96df++) {
                  this.qc[_0x3a96df].Cc.Bc(_0x226a00[_0x3a96df % _0x226a00.length], _0x3a96df % _0x226a00.length, _0x3a96df);
                  this.qc[_0x3a96df].Dc.Bc(_0x3a96df == 0 && _0x367916.vbb ? _0x367916.vbb : _0x1d2347[_0x3a96df % _0x1d2347.length], _0x3a96df % _0x226a00.length, _0x3a96df);
                  this.qc[_0x3a96df].Cc.Ec(_0x5908c0);
                  this.qc[_0x3a96df].Dc.Ec(_0x5908c0);
                }
              }
              this.oc.yc(_0x4b97b5, _0x4d8929, _0x3d6ba2, _0x28742);
            };
            var _0x39400d = function () {
              var _0x5a8157 = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new _0x4efbaa.Container();
                this.Kc = [];
                this.message = new _0x4efbaa.Container();
                for (var _0x2937d2 = 0; _0x2937d2 < 4; _0x2937d2++) {
                  var _0x4e5b4a = new _0x3819e1.sc();
                  _0x4e5b4a.Bc(_0x4b2cbe().Lc.wb);
                  this.Jc.addChild(_0x4e5b4a.xc);
                  this.Kc.push(_0x4e5b4a);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new _0x3819e1.sc();
                this.Nc.Bc(_0x4b2cbe().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
                this.pwr_flex = new _0x3819e1.sc();
                this.pwr_flex.Bc(_0x4b2cbe().Lc.pwrFlex);
                this.pwr_flex.xc.zIndex = 0.001;
                this.addChild(this.pwr_flex.xc);
                this.disableFlex();
              });
              _0x5a8157.prototype.yc = function (_0x276f5a, _0x91d88f, _0x4808d5, _0x38f8c7) {
                this.Pc(0.002, this.Fc, _0x276f5a.ub);
                this.Pc(0.003, this.Gc, _0x91d88f.ub);
                this.Pc(0.004, this.Ic, _0x38f8c7.ub);
                this.Pc(0.005, this.Hc, _0x4808d5.ub);
              };
              _0x5a8157.prototype.Pc = function (_0x296b72, _0x4851a1, _0xb91241) {
                while (_0xb91241.length > _0x4851a1.length) {
                  var _0x2a316e = new _0x3819e1.sc();
                  _0x4851a1.push(_0x2a316e);
                  this.addChild(_0x2a316e.Qc());
                }
                while (_0xb91241.length < _0x4851a1.length) {
                  _0x4851a1.pop().Rc();
                }
                var _0x450814 = _0x296b72;
                for (var _0x264e84 = 0; _0x264e84 < _0xb91241.length; _0x264e84++) {
                  _0x450814 += 0.0001;
                  var _0x3a1157 = _0x4851a1[_0x264e84];
                  _0x3a1157.Bc(_0xb91241[_0x264e84]);
                  _0x3a1157.xc.zIndex = _0x450814;
                }
              };
              _0x5a8157.prototype.Sc = function (_0x419dc6, _0x3f6719, _0x111255, _0x41d72b) {
                this.visible = true;
                this.position.set(_0x419dc6, _0x3f6719);
                this.rotation = _0x41d72b;
                for (var _0x189443 = 0; _0x189443 < this.Fc.length; _0x189443++) {
                  this.Fc[_0x189443].Tc(_0x111255);
                }
                for (var _0x2c35cd = 0; _0x2c35cd < this.Gc.length; _0x2c35cd++) {
                  this.Gc[_0x2c35cd].Tc(_0x111255);
                }
                for (var _0x2ac827 = 0; _0x2ac827 < this.Hc.length; _0x2ac827++) {
                  this.Hc[_0x2ac827].Tc(_0x111255);
                }
                for (var _0xd7ecec = 0; _0xd7ecec < this.Ic.length; _0xd7ecec++) {
                  this.Ic[_0xd7ecec].Tc(_0x111255);
                }
              };
              _0x5a8157.prototype.Uc = function () {
                this.visible = false;
              };
              _0x5a8157.prototype.VcAc = function (_0x29795c, _0x2e72fe, _0x20d487, _0x32e215, _0x5a57a4) {
                this.message.visible = true;
                this.Mc2.Tc(_0x2e72fe);
              };
              _0x5a8157.prototype.VcUn = function () {
                this.message.visible = false;
              };
              _0x5a8157.prototype.Vc = function (_0x136165, _0x24dac5, _0x25ce46, _0xe8b2e7) {
                this.Jc.visible = true;
                var _0xa88d0 = _0x25ce46 / 1000;
                var _0x2a9e07 = 1 / this.Kc.length;
                for (var _0x4f8bf1 = 0; _0x4f8bf1 < this.Kc.length; _0x4f8bf1++) {
                  var _0x4ee46d = 1 - (_0xa88d0 + _0x2a9e07 * _0x4f8bf1) % 1;
                  this.Kc[_0x4f8bf1].xc.alpha = 1 - _0x4ee46d;
                  this.Kc[_0x4f8bf1].Tc(_0x24dac5 * (0.5 + _0x4ee46d * 4.5));
                }
              };
              _0x5a8157.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              _0x5a8157.prototype.Wc = function (_0x54f90f, _0x5ce083, _0x3baa94, _0x2fc5c3) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x36bffa.Q(this.Nc.xc.alpha, _0x54f90f.Xc ? 0.9 : 0.2, _0x2fc5c3, 0.0025);
                this.Nc.Tc(_0x5ce083);
              };
              _0x5a8157.prototype.activeFlex = function (_0xcf5b3b, _0x24232d, _0x1d6112, _0x26db62) {
                this.pwr_flex.xc.visible = true;
                // Only show zigzag effect without changing color when taking spedes
                this.pwr_flex.xc.alpha = 1; // Keep constant alpha
                this.pwr_flex.Tc(_0x24232d);
              };
              _0x5a8157.prototype.disableFlex = function () {
                this.pwr_flex.xc.visible = false;
              };
              _0x5a8157.prototype.WXX = function (_0x40063a, _0x3c50b6, _0x3b683c, _0x2e7dc3) {
                this.Nc.xc.visible = true;
                // Keep constant alpha for consistency with zigzag behavior
                this.Nc.xc.alpha = 1; // Keep constant alpha
                this.Nc.Tc(_0x3c50b6);
              };
              _0x5a8157.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return _0x5a8157;
            }();
            _0xf27b66.prototype.Yc = function (_0x243286) {
              return this.uc + this.vc * Math.sin(_0x243286 * _0x51340d - this.tc);
            };
            _0xf27b66.prototype.Zc = function (_0xf28f34, _0x2d50e7, _0x31c9b5, _0x4a9b99) {
              var _0x150b3e = _0xf28f34.$c * 2;
              var _0x2a6620 = _0xf28f34._c;
              var _0x28675e = _0xf28f34.ad;
              var _0x1c563d = _0x28675e * 4 - 3;
              var _0x4c7854 = _0x1c563d;
              this.tc = _0x2d50e7 / 400 * Math.PI;
              this.uc = _0x150b3e * 1.5;
              this.vc = _0x150b3e * 0.15 * _0xf28f34.bd;
              var _0xc2d9c2;
              var _0x18a8b3;
              var _0xac0a05;
              var _0x355779;
              var _0x5eea28;
              var _0x37544f;
              var _0x6bddfa;
              var _0x133121;
              _0x18a8b3 = _0x2a6620[0];
              _0x37544f = _0x2a6620[1];
              if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                _0xac0a05 = _0x2a6620[2];
                _0x6bddfa = _0x2a6620[3];
                _0x355779 = _0x2a6620[4];
                _0x133121 = _0x2a6620[5];
                var _0x2c8cd2 = Math.atan2(_0x133121 + _0x37544f * 2 - _0x6bddfa * 3, _0x355779 + _0x18a8b3 * 2 - _0xac0a05 * 3);
                this.oc.Sc(_0x18a8b3, _0x37544f, _0x150b3e, _0x2c8cd2);
                this.qc[0].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(0), _0x2c8cd2);
                this.qc[1].Sc(_0x29d80b * _0x18a8b3 + _0x2be474 * _0xac0a05 + _0x2d0f3b * _0x355779, _0x29d80b * _0x37544f + _0x2be474 * _0x6bddfa + _0x2d0f3b * _0x133121, _0x150b3e, this.Yc(1), _0x1d143e.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(_0x809603 * _0x18a8b3 + _0x45080f * _0xac0a05 + _0x4a7542 * _0x355779, _0x809603 * _0x37544f + _0x45080f * _0x6bddfa + _0x4a7542 * _0x133121, _0x150b3e, this.Yc(2), _0x1d143e.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(_0x30465f * _0x18a8b3 + _0x128f45 * _0xac0a05 + _0x193574 * _0x355779, _0x30465f * _0x37544f + _0x128f45 * _0x6bddfa + _0x193574 * _0x133121, _0x150b3e, this.Yc(3), _0x1d143e.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var _0x5f0518 = 4;
              var _0x4e21c9 = 2;
              var _0x554925 = _0x28675e * 2 - 4;
              while (_0x4e21c9 < _0x554925) {
                _0x18a8b3 = _0x2a6620[_0x4e21c9];
                _0x37544f = _0x2a6620[_0x4e21c9 + 1];
                if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                  _0xc2d9c2 = _0x2a6620[_0x4e21c9 - 2];
                  _0x5eea28 = _0x2a6620[_0x4e21c9 - 1];
                  _0xac0a05 = _0x2a6620[_0x4e21c9 + 2];
                  _0x6bddfa = _0x2a6620[_0x4e21c9 + 3];
                  _0x355779 = _0x2a6620[_0x4e21c9 + 4];
                  _0x133121 = _0x2a6620[_0x4e21c9 + 5];
                  this.qc[_0x5f0518].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x37f8ca * _0xc2d9c2 + _0x529157 * _0x18a8b3 + _0x33b602 * _0xac0a05 + _0x6055d6 * _0x355779, _0x37f8ca * _0x5eea28 + _0x529157 * _0x37544f + _0x33b602 * _0x6bddfa + _0x6055d6 * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x12f431 * _0xc2d9c2 + _0x83f4fc * _0x18a8b3 + _0x83f4fc * _0xac0a05 + _0x12f431 * _0x355779, _0x12f431 * _0x5eea28 + _0x83f4fc * _0x37544f + _0x83f4fc * _0x6bddfa + _0x12f431 * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x6055d6 * _0xc2d9c2 + _0x33b602 * _0x18a8b3 + _0x529157 * _0xac0a05 + _0x37f8ca * _0x355779, _0x6055d6 * _0x5eea28 + _0x33b602 * _0x37544f + _0x529157 * _0x6bddfa + _0x37f8ca * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                } else {
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                }
                _0x4e21c9 += 2;
              }
              _0x18a8b3 = _0x2a6620[_0x28675e * 2 - 4];
              _0x37544f = _0x2a6620[_0x28675e * 2 - 3];
              if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                _0xc2d9c2 = _0x2a6620[_0x28675e * 2 - 6];
                _0x5eea28 = _0x2a6620[_0x28675e * 2 - 5];
                _0xac0a05 = _0x2a6620[_0x28675e * 2 - 2];
                _0x6bddfa = _0x2a6620[_0x28675e * 2 - 1];
                this.qc[_0x1c563d - 5].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(_0x1c563d - 5), _0x1d143e.cd(this.qc[_0x1c563d - 6], this.qc[_0x1c563d - 4]));
                this.qc[_0x1c563d - 4].Sc(_0x193574 * _0xc2d9c2 + _0x128f45 * _0x18a8b3 + _0x30465f * _0xac0a05, _0x193574 * _0x5eea28 + _0x128f45 * _0x37544f + _0x30465f * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 4), _0x1d143e.cd(this.qc[_0x1c563d - 5], this.qc[_0x1c563d - 3]));
                this.qc[_0x1c563d - 3].Sc(_0x4a7542 * _0xc2d9c2 + _0x45080f * _0x18a8b3 + _0x809603 * _0xac0a05, _0x4a7542 * _0x5eea28 + _0x45080f * _0x37544f + _0x809603 * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 3), _0x1d143e.cd(this.qc[_0x1c563d - 4], this.qc[_0x1c563d - 2]));
                this.qc[_0x1c563d - 2].Sc(_0x2d0f3b * _0xc2d9c2 + _0x2be474 * _0x18a8b3 + _0x29d80b * _0xac0a05, _0x2d0f3b * _0x5eea28 + _0x2be474 * _0x37544f + _0x29d80b * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 2), _0x1d143e.cd(this.qc[_0x1c563d - 3], this.qc[_0x1c563d - 1]));
                this.qc[_0x1c563d - 1].Sc(_0xac0a05, _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 1), _0x1d143e.cd(this.qc[_0x1c563d - 2], this.qc[_0x1c563d - 1]));
              } else {
                this.qc[_0x1c563d - 5].Uc();
                this.qc[_0x1c563d - 4].Uc();
                this.qc[_0x1c563d - 3].Uc();
                this.qc[_0x1c563d - 2].Uc();
                this.qc[_0x1c563d - 1].Uc();
              }
              if (this.pc === 0 && _0x4c7854 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && _0x4c7854 === 0) {
                _0x36bffa.U(this.oc);
              }
              while (this.pc < _0x4c7854) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > _0x4c7854) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var _0x525a7f = _0xf28f34.dd[_0x3819e1.fd.ed];
              if (this.qc[0].gd() && _0x525a7f && _0x525a7f.hd) {
                this.oc.Vc(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.Mc();
              }
              var _0x3db726 = _0xf28f34.dd[_0x3819e1.fd.jd];
              if (this.qc[0].gd() && _0x3db726 && _0x3db726.hd) {
                this.oc.Wc(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.Oc();
              }
              var _0x1d7399 = _0xf28f34.dd[_0x3819e1.fd.pd];
              if (this.qc[0].gd() && _0x1d7399 != null && _0x1d7399.hd) {
                this.oc.activeFlex(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.disableFlex();
              }
              movimentaLinha();
            };
            var _0x1d143e = function () {
              function _0x34f6a4(_0x557d48, _0x3c2ec1) {
                this.Cc = _0x557d48;
                this.Cc.kd(false);
                this.Dc = _0x3c2ec1;
                this.Dc.kd(false);
                this.ev = null;
              }
              _0x34f6a4.prototype.Sc = function (_0x5bed80, _0x2c95c4, _0x559eee, _0xc751f9, _0x247ce9) {
                this.Cc.kd(true);
                this.Cc.ld(_0x5bed80, _0x2c95c4);
                this.Cc.Tc(_0x559eee);
                this.Cc.md(_0x247ce9);
                this.Dc.kd(true);
                this.Dc.ld(_0x5bed80, _0x2c95c4);
                this.Dc.Tc(_0xc751f9);
                this.Dc.md(_0x247ce9);
              };
              _0x34f6a4.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              _0x34f6a4.prototype.gd = function () {
                return this.Cc.gd();
              };
              _0x34f6a4.cd = function (_0x3b9196, _0xab5e08) {
                return Math.atan2(_0x3b9196.Cc.xc.position.y - _0xab5e08.Cc.xc.position.y, _0x3b9196.Cc.xc.position.x - _0xab5e08.Cc.xc.position.x);
              };
              return _0x34f6a4;
            }();
            return _0xf27b66;
          }();
          _0x3819e1.fd = function () {
            function _0x4ca474(_0x590b40) {
              this.nd = _0x590b40;
              this.hd = false;
              this.od = 1;
            }
            _0x4ca474.jd = 0;
            _0x4ca474.pd = 1;
            _0x4ca474.ed = 2;
            _0x4ca474.qd = 6;
            _0x4ca474.rd = 3;
            _0x4ca474.sd = 4;
            _0x4ca474.td = 5;
            return _0x4ca474;
          }();
          _0x3819e1.Ab = function (_0x7782bd) {
            var _0x4f0486 = function () {
              function _0x4395c2(_0x3a3aea, _0x42efbb) {
                _0x3391a3(this, _0x4395c2);
                this.ud = _0x3a3aea;
                this.vd = _0x42efbb;
              }
              return _0x3ef9b1(_0x4395c2, [{
                key: "Jb",
                value: function _0x406fc0() {
                  return this.ud.revision;
                }
              }, {
                key: "Yb",
                value: function _0x3ef162() {
                  _0xb65a12.Jb();
                  return this.ud;
                }
              }, {
                key: "Ub",
                value: function _0x4a4753() {
                  return this.vd;
                }
              }]);
            }();
            _0x7782bd = _0x4f0486;
            _0x4ddaaa(_0x4f0486, "wd", new _0x7782bd({}, _0x3819e1.Ga.Ca()));
            return _0x4f0486;
          }();
          _0x3819e1.Mb = function () {
            function _0x413920(_0x196a7f) {
              this.xd = function () {
                ++_0x413920.yd;
                return function (_0x256e5d, _0x4b3aa5) {};
              }();
              this.zd = _0x196a7f;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            _0x413920.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            _0x413920.yd = 100000;
            _0x413920.Od = new _0x3819e1._b.cc().ec(_0x413920.Id.Jd, 1).ec(_0x413920.Id.Kd, 10).ec(_0x413920.Id.Ld, 50).ec(_0x413920.Id.Md, 15).ec(_0x413920.Id.Nd, 5).hc();
            _0x413920.prototype.Rb = function (_0x1fc60d) {
              this.Ad = _0x1fc60d;
            };
            _0x413920.prototype.Qb = function (_0x58858) {
              this.Bd = _0x58858;
            };
            _0x413920.prototype.Ob = function (_0x30fd85) {
              this.Cd = _0x30fd85;
            };
            _0x413920.prototype.Pb = function (_0x4d2d56) {
              this.Dd = _0x4d2d56;
            };
            _0x413920.prototype.Nb = function (_0x44e5c5) {
              this.Ed = _0x44e5c5;
            };
            _0x413920.prototype.Kb = function () {
              return this.Hd;
            };
            _0x413920.prototype.Lb = function () {
              this.Fd = true;
            };
            _0x413920.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            _0x413920.prototype.Qd = function () {
              function _0x1b9d7c(_0x48d77f) {
                var _0x42b4d0 = _0x413920.Id.Jd;
                _0x379340.Rd(_0x42b4d0, _0x413920.Od.bc(_0x42b4d0).lc(_0x48d77f));
              }
              var _0x379340 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: _0x36bffa.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function _0x3e919b(_0x19e00a) {
                    if (_0x19e00a.lengthComputable) {
                      _0x1b9d7c(_0x19e00a.loaded / _0x19e00a.total);
                    }
                  }
                }
              }).fail(function () {
                _0x379340.Sd(new Error());
              }).done(function (_0x466574) {
                if (_0x466574 <= _0x379340.zd) {
                  _0x379340.Td();
                  return;
                }
                _0x379340.Ud();
              });
            };
            _0x413920.prototype.Ud = _0xbb0189(_0x1e8476().mark(function _0x3788c0() {
              var _0x4b9393;
              var _0x377ee4;
              var _0x500c24;
              return _0x1e8476().wrap(function _0x3a2303(_0x251dd6) {
                while (1) {
                  switch (_0x251dd6.prev = _0x251dd6.next) {
                    case 0:
                      _0x4b9393 = function _0x2fbdc2(_0xa81510) {
                        var _0xf2e689 = _0x413920.Id.Kd;
                        _0x377ee4.Rd(_0xf2e689, _0x413920.Od.bc(_0xf2e689).lc(_0xa81510));
                      };
                      _0x377ee4 = this;
                      if (!this.Fd) {
                        _0x251dd6.next = 4;
                        break;
                      }
                      return _0x251dd6.abrupt("return", void this.Pd());
                    case 4:
                      _0x251dd6.next = 6;
                      return fetch(URLSERV_WORMWORLD + "/version");
                    case 6:
                      _0x500c24 = _0x251dd6.sent;
                      _0x251dd6.next = 9;
                      return _0x500c24.json();
                    case 9:
                      _0x500c24 = _0x251dd6.sent;
                      localStorage.setItem("wwc_version", _0x500c24);
                      if (_0x3e0616 != _0x500c24) {
                        $.ajax({
                          type: "GET",
                          url: _0x36bffa.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function _0x27d0b1(_0x373431) {
                              if (_0x373431.lengthComputable) {
                                _0x4b9393(_0x373431.loaded / _0x373431.total);
                              }
                            }
                          }
                        }).fail(function () {
                          _0x377ee4.Sd(new Error());
                        }).done(function () {
                          var _0xf872b7 = _0xbb0189(_0x1e8476().mark(function _0x44e50a(_0x5e867e) {
                            return _0x1e8476().wrap(function _0x5303cd(_0x21c60d) {
                              while (1) {
                                switch (_0x21c60d.prev = _0x21c60d.next) {
                                  case 0:
                                    _0x21c60d.next = 2;
                                    return _0xb65a12.registry(_0x5e867e);
                                  case 2:
                                    _0x5e867e = _0x21c60d.sent;
                                    localStorage.setItem("wwc_config", JSON.stringify(_0x5e867e));
                                    _0x377ee4.Vd(_0x5e867e, _0x413920);
                                  case 5:
                                  case "end":
                                    return _0x21c60d.stop();
                                }
                              }
                            }, _0x44e50a);
                          }));
                          return function (_0x2be579) {
                            return _0xf872b7.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          _0x102812 = JSON.parse(_0x102812);
                          _0x4b9393(1);
                          _0x377ee4.Vd(_0x102812, _0x413920);
                        } catch (_0x407d22) {
                          console.log("ConfigError", _0x407d22);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                        }
                      }
                    case 12:
                    case "end":
                      return _0x251dd6.stop();
                  }
                }
              }, _0x3788c0, this);
            }));
            _0x413920.prototype.Vd = _0xb65a12.Vd || function (_0x189d52) {
              function _0x49932c(_0x5d1e2e) {
                var _0x18b4a9 = _0x413920.Id.Ld;
                _0x34313e.Rd(_0x18b4a9, _0x413920.Od.bc(_0x18b4a9).lc(_0x5d1e2e));
              }
              var _0x34313e = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x36b3ed = [];
              var _0x5f0ac5 = [];
              var _0x17d291 = 0;
              for (var _0x46039c in _0x189d52.textureDict) {
                if (_0x189d52.textureDict.hasOwnProperty(_0x46039c)) {
                  var _0x50f47b = _0x189d52.textureDict[_0x46039c];
                  var _0x155704 = _0x36bffa.a.c + _0x50f47b.relativePath;
                  var _0x48eea5 = _0x50f47b.fileSize;
                  var _0x111bf5 = _0x50f47b.sha256;
                  var _0x101a5a = new _0x413920.Wd(_0x46039c, _0x155704, _0x48eea5, _0x111bf5);
                  _0x36b3ed.push(_0x101a5a);
                  _0x5f0ac5.push(_0x101a5a);
                  _0x17d291 += _0x48eea5;
                }
              }
              var _0xc2c4af;
              var _0x50afd5 = 0;
              var _0xa9b9e5 = function _0x4b6e0f(_0x5d85a4) {
                for (var _0x5a566f = 0; _0x5a566f < _0x5f0ac5.length; _0x5a566f++) {
                  try {
                    window.URL.revokeObjectURL(_0x5f0ac5[_0x5a566f].Xd);
                  } catch (_0x3f247b) {}
                }
                _0x34313e.Sd(_0x5d85a4);
              };
              var _0x1bd77a = function _0x43b38c(_0x394315) {
                var _0xf2313b = Math.floor(_0xc2c4af.Yd * _0x394315);
                _0x49932c((_0x50afd5 + _0xf2313b) / _0x17d291);
              };
              var _0x5ba960 = function _0x205b2e(_0xc38977) {
                var _0x43c649 = new Blob([_0xc38977]);
                _0xc2c4af.Xd = window.URL.createObjectURL(_0x43c649);
                _0x50afd5 += _0xc2c4af.Yd;
                _0x2bf0b1();
              };
              var _0x2bf0b1 = function _0x57aba1() {
                if (_0x1e55f5 < _0x5f0ac5.length) {
                  _0xc2c4af = _0x5f0ac5[_0x1e55f5++];
                  _0x34313e.Zd(_0xc2c4af, _0xa9b9e5, _0x5ba960, _0x1bd77a);
                  return;
                }
                setTimeout(function () {
                  return _0x34313e.$d(_0x189d52, _0x36b3ed);
                }, 0);
              };
              var _0x1e55f5 = 0;
              _0x2bf0b1();
            };
            _0x413920.prototype.Zd = _0xb65a12.Zd || function (_0x11bd7a, _0xe838dd, _0x5c0ca6, _0xd59b0b) {
              $.ajax({
                type: "GET",
                url: _0x11bd7a._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function _0x5d6f97(_0x35a61d) {
                    if (_0x35a61d.lengthComputable) {
                      _0xd59b0b(_0x35a61d.loaded / _0x35a61d.total);
                    }
                  }
                }
              }).fail(function () {
                _0xe838dd(new Error());
              }).done(function (_0x4aaa35) {
                _0x5c0ca6(_0x4aaa35);
              });
            };
            _0x413920.prototype.$d = _0xb65a12.$d || function (_0x2f770d, _0x2398e4) {
              function _0x1634a5(_0x34f8ea) {
                var _0xd853d0 = _0x413920.Id.Md;
                _0x4fd5ec.Rd(_0xd853d0, _0x413920.Od.bc(_0xd853d0).lc(_0x34f8ea));
              }
              var _0x4fd5ec = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x6e365f;
              var _0x244cc9;
              var _0x1e5540 = {};
              var _0x4614b2 = function _0x388f95() {
                for (var _0x4fdf21 = 0; _0x4fdf21 < _0x2398e4.length; _0x4fdf21++) {
                  try {
                    window.URL.revokeObjectURL(_0x2398e4[_0x4fdf21].Xd);
                  } catch (_0x50ab01) {}
                }
                _0x4fd5ec.Sd(new Error());
              };
              var _0x4a0303 = function _0x50784c() {
                _0x1634a5(_0x229f99 / _0x2398e4.length);
                _0x1e5540[_0x6e365f.ae] = new _0x3819e1.be(_0x6e365f.Xd, _0x244cc9);
                _0x5b7f16();
              };
              var _0x5b7f16 = function _0x561e84() {
                if (_0x229f99 < _0x2398e4.length) {
                  _0x6e365f = _0x2398e4[_0x229f99++];
                  _0x244cc9 = PIXI.BaseTexture.from(_0x6e365f.Xd);
                  _0x244cc9.on("error", _0x4614b2);
                  _0x244cc9.on("loaded", _0x4a0303);
                  return;
                }
                setTimeout(function () {
                  return _0x4fd5ec.ce(_0x2f770d, _0x1e5540);
                }, 0);
              };
              var _0x229f99 = 0;
              _0x5b7f16();
            };
            _0x413920.prototype.ce = function (_0x2dbac4, _0x459eb1) {
              function _0x22d8c3(_0x103dbe) {
                var _0x5db57d = _0x413920.Id.Nd;
                _0x10e713.Rd(_0x5db57d, _0x413920.Od.bc(_0x5db57d).lc(_0x103dbe));
              }
              var _0x10e713 = this;
              var _0x4e8b48 = {};
              var _0x168132 = 0;
              var _0x3b89e3 = Object.values(_0x2dbac4.regionDict).length;
              _0x36bffa._(_0x2dbac4.regionDict, function (_0x38b3ba, _0x2a0305) {
                var _0x27cc87 = null;
                try {
                  var _0x4f2851 = null;
                  if (_0x459eb1[_0x2a0305.texture].ev) {
                    _0x4f2851 = _0x459eb1[_0x2a0305.texture].ev;
                  }
                  var _0x39c451 = _0x2a0305.texture + ":" + _0x38b3ba;
                  _0x27cc87 = _0x3819e1.la.Da(_0x39c451, _0x459eb1[_0x2a0305.texture].oa, _0x2a0305, _0x4f2851);
                  _0x4e8b48[_0x38b3ba] = _0x27cc87;
                  if (++_0x168132 % 10 == 0) {
                    _0x22d8c3(_0x168132 / _0x3b89e3);
                  }
                } catch (_0xd3a0bb) {}
              });
              var _0x427205 = Object.values(_0x459eb1).map(function (_0x5d595d) {
                return _0x5d595d.oa;
              });
              var _0x528738 = Object.values(_0x4e8b48);
              var _0x3078c0 = new _0x3819e1.Ab(_0x2dbac4, _0x3819e1.Ga.fb(_0x2dbac4, _0x4e8b48, _0x427205, _0x528738));
              setTimeout(function () {
                return _0x10e713.de(_0x3078c0);
              }, 0);
            };
            _0x413920.Wd = function () {
              function _0x740b57(_0x3bef81, _0x5e5ae4, _0x51b64b, _0x26b986) {
                this.ae = _0x3bef81;
                this._d = _0x5e5ae4;
                this.Yd = _0x51b64b;
                this.ee = _0x26b986;
                this.Xd = "";
              }
              return _0x740b57;
            }();
            _0x413920.prototype.de = function (_0x1b6611) {
              if (this.Hd) {
                _0x1b6611.Ub().Fa();
                return;
              }
              this.Hd = true;
              var _0x489b44 = this;
              setTimeout(function () {
                return _0x489b44.Ad(_0x1b6611);
              }, 0);
            };
            _0x413920.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x2ccf90 = this;
                setTimeout(function () {
                  return _0x2ccf90.Bd();
                }, 0);
              }
            };
            _0x413920.prototype.Sd = function (_0x381953) {
              if (!this.Hd) {
                this.Hd = true;
                var _0xa0cfa8 = this;
                setTimeout(function () {
                  return _0xa0cfa8.Cd(_0x381953);
                }, 0);
              }
            };
            _0x413920.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x32ad53 = this;
                setTimeout(function () {
                  return _0x32ad53.Dd();
                }, 0);
              }
            };
            _0x413920.prototype.Rd = function (_0x21705b, _0x17df27) {
              if (!this.Hd && !this.Fd) {
                var _0x4ffb52 = this;
                return _0x4ffb52.Ed(_0x21705b, _0x17df27);
              }
            };
            return _0x413920;
          }();
          _0x3819e1.fe = function () {
            return {};
          }();
          _0x3819e1.ge = function () {
            function _0x52e436() {
              this.he = _0x3819e1.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            _0x52e436.prototype.ha = function () {};
            _0x52e436.prototype.oe = function (_0x514e79) {
              this.le = _0x514e79;
            };
            _0x52e436.prototype.pe = function (_0x5d07cf) {
              this.he = _0x5d07cf;
              this.qe();
            };
            _0x52e436.prototype.re = function (_0x2ef963) {
              this.ke = _0x2ef963;
              this.qe();
            };
            _0x52e436.prototype.qe = function () {};
            _0x52e436.prototype.se = function (_0x3dc61b, _0x5406dd) {
              if (!_0x4b2cbe().Lc.Wb()) {
                return null;
              }
              var _0x509cf3 = _0x3dc61b[_0x5406dd];
              if (_0x509cf3 == null || _0x509cf3.length === 0) {
                return null;
              } else {
                return _0x509cf3[Math.floor(Math.random() * _0x509cf3.length)].cloneNode();
              }
            };
            _0x52e436.prototype.te = function (_0x483b8a, _0x3dfb7b, _0x3ae504) {
              if (this.le && !(_0x3ae504 <= 0)) {
                var _0xab643b = this.se(_0x483b8a, _0x3dfb7b);
                if (_0xab643b != null) {
                  _0xab643b.volume = Math.min(1, _0x3ae504);
                  _0xab643b.play();
                }
              }
            };
            _0x52e436.prototype.ue = function (_0x45999a, _0x4c5d52) {
              if (this.he.ve) {
                this.te(app.xe.we, _0x45999a, _0x4c5d52);
              }
            };
            _0x52e436.prototype.ye = function (_0x5149f0, _0x436c74) {
              if (this.he.ze) {
                this.te(app.xe.Ae, _0x5149f0, _0x436c74);
              }
            };
            _0x52e436.prototype.Be = function () {};
            _0x52e436.prototype.Ce = function () {};
            _0x52e436.prototype.De = function () {};
            _0x52e436.prototype.Ee = function () {};
            _0x52e436.prototype.Fe = function () {};
            _0x52e436.prototype.Ge = function () {};
            _0x52e436.prototype.He = function (_0x189f75, _0x4e211e, _0x14947a) {};
            _0x52e436.prototype.Ie = function (_0x14aa4f) {};
            _0x52e436.prototype.Je = function (_0x20e9ea) {};
            _0x52e436.prototype.Ke = function (_0x3eacbd) {};
            _0x52e436.prototype.Le = function (_0x5d383d) {};
            _0x52e436.prototype.Me = function (_0x4266a3) {};
            _0x52e436.prototype.Ne = function (_0x1004a3) {};
            _0x52e436.prototype.Oe = function (_0x11ff2c) {};
            _0x52e436.prototype.Pe = function (_0x126241) {};
            _0x52e436.prototype.Qe = function (_0x2d3fe5) {};
            _0x52e436.prototype.Re = function (_0x417a62) {};
            _0x52e436.prototype.Se = function (_0xa632b) {};
            _0x52e436.prototype.Te = function (_0x27f9a7) {};
            _0x52e436.prototype.Ue = function (_0xef0af4) {};
            _0x52e436.prototype.Ve = function (_0x41f925) {};
            _0x52e436.prototype.We = function (_0x3c75bc, _0x3dbee2) {};
            _0x52e436.prototype.Xe = function (_0x29302d) {};
            _0x52e436.prototype.Ye = function (_0x478392, _0x4fe546, _0x3d77d7) {};
            _0x52e436.je = {
              ie: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              _e: {
                Ze: false,
                $e: true,
                ze: true,
                ve: false
              },
              af: {
                Ze: true,
                $e: false,
                ze: false,
                ve: true
              },
              bf: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              cf: {
                Ze: false,
                $e: false,
                ze: false,
                ve: false
              }
            };
            return _0x52e436;
          }();
          _0x3819e1.GameView = function () {
            function _0x3b15d2(_0x50dcb2) {
              var _0x33b90a = _0x4b2cbe();
              this.ef = _0x50dcb2;
              this.Eb = _0x50dcb2.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new _0x4efbaa.Renderer({
                view: _0x50dcb2.get()[0],
                backgroundColor: 0,
                transparent: false,
                antialias: false,
                autoResize: true
              });
              this.mf = new _0x4efbaa.Container();
              this.mf.sortableChildren = true;
              this.nf = new _0x4efbaa.Container();
              this.nf.zIndex = 0;
              this.mf.addChild(this.nf);
              this.uf = new _0x4efbaa.Container();
              this.uf.zIndex = 3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var _0x52b8ef = 0;
            var _0xde2250 = 5;
            var _0x5e8225 = 40;
            var _0x26c5df = [{
              yf: 1,
              zf: 0.15,
              Af: 0
            }, {
              yf: 1,
              zf: 0.125,
              Af: 0
            }, {
              yf: 1,
              zf: 0.1,
              Af: 0
            }, {
              yf: 1,
              zf: 0.075,
              Af: 0
            }, {
              yf: 1,
              zf: 0.05,
              Af: 0
            }, {
              yf: 1,
              zf: 0.025,
              Af: 0
            }, {
              yf: 1,
              zf: 0,
              Af: 0.025
            }, {
              yf: 1,
              zf: 0,
              Af: 0.05
            }, {
              yf: 1,
              zf: 0,
              Af: 0.075
            }, {
              yf: 1,
              zf: 0,
              Af: 0.1
            }, {
              yf: 1,
              zf: 0,
              Af: 0.125
            }, {
              yf: 1,
              zf: 0,
              Af: 0.15
            }];
            _0x3b15d2.prototype.ha = function () {
              var _0x26e1bd = _0x4b2cbe();
              this.lf.backgroundColor = _0x52b8ef;
              this.vf = new Array(_0x26c5df.length);
              for (var _0x3509af = 0; _0x3509af < this.vf.length; _0x3509af++) {
                this.vf[_0x3509af] = new _0x4efbaa.Sprite();
                this.vf[_0x3509af].texture = _0x26e1bd.xe.Bf;
                this.vf[_0x3509af].anchor.set(0.5);
                this.nf.addChild(this.vf[_0x3509af]);
              }
              this.wf = new Array(_0x26e1bd.xe.Cf.length);
              for (var _0x5be816 = 0; _0x5be816 < this.wf.length; _0x5be816++) {
                this.wf[_0x5be816] = new _0x4efbaa.Sprite();
                this.wf[_0x5be816].texture = _0x26e1bd.xe.Cf[_0x5be816];
                this.wf[_0x5be816].anchor.set(0.5);
                this.uf.addChild(this.wf[_0x5be816]);
              }
              this.xf = new Array(this.wf.length);
              for (var _0x14e473 = 0; _0x14e473 < this.xf.length; _0x14e473++) {
                var _0x3f7efe = [0.6, 1, 0.5];
                this.xf[_0x14e473] = {
                  Df: _0x36bffa.V(0, _0x3a8870.F),
                  Ef: _0x36bffa.V(0.09, 0.16) * 0.66,
                  Ff: _0x36bffa.V(0, 1),
                  Gf: _0x36bffa.V(0, 1),
                  Hf: 0,
                  yf: _0x3f7efe[0],
                  zf: _0x3f7efe[1],
                  Af: _0x3f7efe[2]
                };
              }
              this.If();
              this.Jf();
            };
            _0x3b15d2.hd = false;
            _0x3b15d2.Kf = function (_0x3f7afc) {
              _0x3b15d2.hd = _0x3f7afc;
            };
            _0x3b15d2.prototype.Lf = function (_0x21778f) {
              this.hf.Kf(_0x21778f);
            };
            _0x3b15d2.prototype.Jf = function () {
              var _0x79f70f = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x79f70f;
              this.Eb.width = _0x79f70f * this.ff;
              this.Eb.height = _0x79f70f * this.gf;
              var _0x1b996c = Math.max(this.ff, this.gf) * 0.6;
              for (var _0x559987 = 0; _0x559987 < this.vf.length; _0x559987++) {
                this.vf[_0x559987].width = _0x1b996c;
                this.vf[_0x559987].height = _0x1b996c;
              }
            };
            _0x3b15d2.prototype.Nf = function (_0x16ec88, _0x31c2ae) {
              if (_0x3b15d2.hd) {
                var _0x1eada8 = _0x16ec88 / 1000;
                var _0x208264 = _0x31c2ae / 1000;
                var _0x56168e = this.ef.width();
                var _0x126eb9 = this.ef.height();
                for (var _0x109f52 = 0; _0x109f52 < this.vf.length; _0x109f52++) {
                  var _0x44587d = _0x26c5df[_0x109f52 % _0x26c5df.length];
                  var _0x31c5b6 = this.vf[_0x109f52];
                  var _0x54eb24 = _0x109f52 / this.vf.length * _0x3a8870.G;
                  var _0x1df3f2 = _0x1eada8 * 0.5 * 0.12;
                  var _0x14aef9 = Math.cos((_0x1df3f2 + _0x54eb24) * 3) * Math.cos(_0x54eb24) - Math.sin((_0x1df3f2 + _0x54eb24) * 5) * Math.sin(_0x54eb24);
                  var _0x41493c = Math.cos((_0x1df3f2 + _0x54eb24) * 3) * Math.sin(_0x54eb24) + Math.sin((_0x1df3f2 + _0x54eb24) * 5) * Math.cos(_0x54eb24);
                  var _0x2674ed = 0.2 + Math.cos(_0x54eb24 + _0x1eada8 * 0.075) * 0.2;
                  var _0x2e1151 = _0x44587d.Af * 255 << 16 & 16711680 | _0x44587d.zf * 255 << 8 & 65280 | _0x44587d.yf * 255 & 255;
                  _0x31c5b6.tint = _0x2e1151;
                  _0x31c5b6.alpha = _0x2674ed;
                  _0x31c5b6.position.set(_0x56168e * (0.2 + (_0x14aef9 + 1) * 0.5 * 0.6), _0x126eb9 * (0.1 + (_0x41493c + 1) * 0.5 * 0.8));
                }
                var _0xeddb31 = Math.max(_0x56168e, _0x126eb9) * 0.05;
                for (var _0x12b760 = 0; _0x12b760 < this.wf.length; _0x12b760++) {
                  var _0x52cd40 = this.xf[_0x12b760];
                  var _0x213885 = this.wf[_0x12b760];
                  var _0x1c361f = _0x3a8870.F * _0x12b760 / this.wf.length + _0x52cd40.Df;
                  _0x52cd40.Gf += _0x52cd40.Ef * _0x208264;
                  if (_0x52cd40.Gf > 1.1) {
                    _0x52cd40.Df = Math.random() * _0x3a8870.F;
                    _0x52cd40.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    _0x52cd40.Ff = 0.15 + Math.random() * 0.7;
                    _0x52cd40.Gf = -0.1;
                  }
                  var _0x1ab2b1 = _0x52cd40.Ff + Math.sin(Math.sin(_0x1c361f + _0x1eada8 * 0.48) * 6) * 0.03;
                  var _0x22c4f5 = _0x52cd40.Gf;
                  var _0x3b137c = (0.4 + (1 + Math.sin(_0x1c361f + _0x1eada8 * 0.12)) * 0.5 * 1.2) * 0.5;
                  var _0x274b28 = _0x1c361f + _0x52cd40.Ef * 2 * _0x1eada8;
                  var _0x579633 = _0x36bffa.P(Math.sin(Math.PI * _0x22c4f5), 0.1, 1);
                  var _0x576305 = _0x52cd40.zf * 255 << 8 & 65280 | _0x52cd40.Af * 255 << 16 & 16711680 | _0x52cd40.yf * 255 & 255;
                  _0x213885.alpha = _0x579633;
                  _0x213885.tint = _0x576305;
                  _0x213885.position.set(_0x56168e * _0x1ab2b1, _0x126eb9 * _0x22c4f5);
                  _0x213885.rotation = _0x274b28;
                  var _0x4759f9 = _0x213885.texture.width / _0x213885.texture.height;
                  _0x213885.width = _0x3b137c * _0xeddb31;
                  _0x213885.height = _0x3b137c * _0xeddb31 * _0x4759f9;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            _0x3b15d2.prototype.Pf = function () {
              var _0x368b48 = _0x4b2cbe();
              if (_0x368b48.Lc.Wb()) {
                var _0x6f265 = _0x368b48.Lc.Ub().gb(_0xde2250);
                for (var _0x3235d2 = 0; _0x3235d2 < _0xde2250; _0x3235d2++) {
                  this.hf.Qf(_0x3235d2, _0x6f265[_0x3235d2]);
                }
              } else {
                var _0x46c5f1 = _0x36bffa.V(0, 1);
                for (var _0x5a14eb = 0; _0x5a14eb < _0xde2250; _0x5a14eb++) {
                  var _0x5e38be = (_0x46c5f1 + _0x5a14eb / _0xde2250) % 1;
                  var _0x1df0f8 = _0x36bffa.Y(Math.floor(_0x5e38be * 360), 0.85, 0.5);
                  var _0x286227 = _0x1df0f8[0] * 255 & 255 | _0x1df0f8[1] * 255 << 8 & 65280 | _0x1df0f8[2] * 255 << 16 & 16711680;
                  var _0x3970d3 = "000000" + _0x286227.toString(16);
                  _0x3970d3 = "#" + _0x3970d3.substring(_0x3970d3.length - 6, _0x3970d3.length);
                  this.hf.Rf(_0x5a14eb, _0x3970d3);
                }
              }
            };
            _0x3b15d2.prototype.If = function () {
              var _0x56dc9d = Math.min(this.ff, this.gf);
              var _0x539f51 = Date.now();
              for (var _0x2015fa = 0; _0x2015fa < _0xde2250; _0x2015fa++) {
                var _0x57e374 = _0x2015fa / _0xde2250 * _0x3a8870.F;
                var _0x513af6 = _0x1908ce(_0x539f51, 0.12, _0x57e374);
                _0x513af6.qa = _0x513af6.qa * 4;
                _0x513af6.ra = _0x513af6.ra * 4;
                this.hf.Sf(_0x2015fa, (this.ff + _0x513af6.qa * _0x56dc9d) * 0.5, (this.gf + _0x513af6.ra * _0x56dc9d) * 0.5);
              }
            };
            _0x3b15d2.prototype.Of = function () {
              var _0x15e55a = Math.min(this.ff, this.gf);
              var _0x4308f5 = Date.now();
              for (var _0x2f164e = 0; _0x2f164e < _0xde2250; _0x2f164e++) {
                var _0x1d0f5d = _0x2f164e / _0xde2250 * _0x3a8870.F;
                var _0x210dda = _0x1908ce(_0x4308f5, 0.12, _0x1d0f5d);
                this.hf.Tf(_0x2f164e, (this.ff + _0x210dda.qa * _0x15e55a) * 0.5, (this.gf + _0x210dda.ra * _0x15e55a) * 0.5);
              }
              this.hf.Uf();
            };
            var _0x1908ce = function _0x4f3ea0(_0x265fea, _0x95d065, _0x37ddaf) {
              var _0x2719a0 = _0x265fea / 1000;
              return {
                qa: (Math.cos(_0x95d065 * _0x2719a0 + _0x37ddaf) + Math.cos(_0x95d065 * -32 * _0x2719a0 + _0x37ddaf) * 0.4 + Math.cos(_0x95d065 * 7 * _0x2719a0 + _0x37ddaf) * 0.7) * 0.8,
                ra: (Math.sin(_0x95d065 * _0x2719a0 + _0x37ddaf) + Math.sin(_0x95d065 * -32 * _0x2719a0 + _0x37ddaf) * 0.4 + Math.sin(_0x95d065 * 7 * _0x2719a0 + _0x37ddaf) * 0.7) * 0.8
              };
            };
            return _0x3b15d2;
          }();
          _0x3819e1.Vf = function () {
            function _0x3dd405() {}
            _0x3dd405.Wf = "consent_state_2";
            _0x3dd405.Xf = "showPlayerNames";
            _0x3dd405.Yf = "musicEnabled";
            _0x3dd405.Zf = "sfxEnabled";
            _0x3dd405.$f = "account_type";
            _0x3dd405._f = "gameMode";
            _0x3dd405.ag = "nickname";
            _0x3dd405.bg = "skin";
            _0x3dd405.cg = "prerollCount";
            _0x3dd405.dg = "shared";
            _0x3dd405.eg = function (_0x540a5e, _0xe1dc53, _0x1e2ab3) {
              var _0x1a45f8 = new Date();
              _0x1a45f8.setTime(_0x1a45f8.getTime() + _0x1e2ab3 * 86400000);
              var _0x4e35ec = "expires=" + _0x1a45f8.toUTCString();
              document.cookie = _0x540a5e + "=" + _0xe1dc53 + "; " + _0x4e35ec;
            };
            _0x3dd405.fg = function (_0x15ed63) {
              var _0x55cd2d = _0x15ed63 + "=";
              for (var _0x1f4199 = document.cookie.split(";"), _0x194350 = 0; _0x194350 < _0x1f4199.length; _0x194350++) {
                for (var _0x46d6cb = _0x1f4199[_0x194350]; _0x46d6cb.charAt(0) == " ";) {
                  _0x46d6cb = _0x46d6cb.substring(1);
                }
                if (_0x46d6cb.indexOf(_0x55cd2d) == 0) {
                  if (_0x15ed63 == "nickname=") {
                    _0x46d6cb.substring(_0x55cd2d.length, _0x46d6cb.length).substring(0, _0x4ac6e2);
                  }
                  return _0x46d6cb.substring(_0x55cd2d.length, _0x46d6cb.length);
                }
              }
              return "";
            };
            return _0x3dd405;
          }();
          _0x3a8870.gg = function () {
            function _0xa0c0c1(_0x8880e3, _0x3abd3f, _0x67a243) {
              var _0x4fc50b = false;
              for (var _0xa339b2 = _0x67a243.length, _0x5a7d06 = 0, _0x590885 = _0xa339b2 - 1; _0x5a7d06 < _0xa339b2; _0x590885 = _0x5a7d06++) {
                if (_0x67a243[_0x5a7d06][1] > _0x3abd3f != _0x67a243[_0x590885][1] > _0x3abd3f && _0x8880e3 < (_0x67a243[_0x590885][0] - _0x67a243[_0x5a7d06][0]) * (_0x3abd3f - _0x67a243[_0x5a7d06][1]) / (_0x67a243[_0x590885][1] - _0x67a243[_0x5a7d06][1]) + _0x67a243[_0x5a7d06][0]) {
                  _0x4fc50b = !_0x4fc50b;
                }
              }
              return _0x4fc50b;
            }
            var _0x52f426 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function _0x207fd6(_0x2d7cb7, _0x19ef4f) {
                return _0xa0c0c1(_0x19ef4f, _0x2d7cb7, _0x52f426);
              }
            };
          }();
          _0x3819e1.ig = function () {
            function _0x1f89c8(_0x3a9a31) {
              var _0x3313ef = undefined;
              _0x3313ef = _0x3a9a31 > 0 ? "+" + Math.floor(_0x3a9a31) : _0x3a9a31 < 0 ? "-" + Math.floor(_0x3a9a31) : "0";
              var _0x1626a7 = Math.min(1.5, 0.5 + _0x3a9a31 / 600);
              var _0x14bfa1 = undefined;
              if (_0x3a9a31 < 1) {
                _0x14bfa1 = "0xFFFFFF";
              } else if (_0x3a9a31 < 30) {
                var _0x590aa8 = (_0x3a9a31 - 1) / 29;
                _0x14bfa1 = _0x39edec((1 - _0x590aa8) * 1 + _0x590aa8 * 0.96, (1 - _0x590aa8) * 1 + _0x590aa8 * 0.82, (1 - _0x590aa8) * 1 + _0x590aa8 * 0);
              } else if (_0x3a9a31 < 300) {
                var _0x2a203a = (_0x3a9a31 - 30) / 270;
                _0x14bfa1 = _0x39edec((1 - _0x2a203a) * 0.96 + _0x2a203a * 0.93, (1 - _0x2a203a) * 0.82 + _0x2a203a * 0.34, (1 - _0x2a203a) * 0 + _0x2a203a * 0.25);
              } else if (_0x3a9a31 < 700) {
                var _0x448f60 = (_0x3a9a31 - 300) / 400;
                _0x14bfa1 = _0x39edec((1 - _0x448f60) * 0.93 + _0x448f60 * 0.98, (1 - _0x448f60) * 0.34 + _0x448f60 * 0, (1 - _0x448f60) * 0.25 + _0x448f60 * 0.98);
              } else {
                _0x14bfa1 = _0x39edec(0.98, 0, 0.98);
              }
              var _0x7b1df7 = Math.random();
              var _0x4a418b = 1 + Math.random() * 0.5;
              return new _0x423d8d(_0x3313ef, _0x14bfa1, true, 0.5, _0x1626a7, _0x7b1df7, _0x4a418b);
            }
            function _0x5e41bd(_0xac2146, _0x2ebcc0) {
              var _0x3b3c40 = undefined;
              var _0x48d37f = undefined;
              if (_0x2ebcc0) {
                _0x3b3c40 = 1.3;
                _0x48d37f = _0x39edec(0.93, 0.34, 0.25);
              } else {
                _0x3b3c40 = 1.1;
                _0x48d37f = _0x39edec(0.96, 0.82, 0);
              }
              return new _0x423d8d(_0xac2146, _0x48d37f, true, 0.5, _0x3b3c40, 0.5, 0.7);
            }
            function _0x39edec(_0x55a075, _0x3d5db0, _0x2ab82f) {
              return ((_0x55a075 * 255 & 255) << 16) + ((_0x3d5db0 * 255 & 255) << 8) + (_0x2ab82f * 255 & 255);
            }
            var _0x1aaa0c = _0x36bffa.M(_0x4efbaa.Container, function () {
              _0x4efbaa.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            _0x1aaa0c.prototype.lg = function (_0x3336f7) {
              this.kg += _0x3336f7;
              if (this.kg >= 1) {
                var _0x390228 = Math.floor(this.kg);
                this.kg -= _0x390228;
                var _0x1e32ff = _0x1f89c8(_0x390228);
                this.addChild(_0x1e32ff);
                this.jg.push(_0x1e32ff);
              }
            };
            _0x1aaa0c.prototype.mg = function (_0x308703) {
              _wwc.fnSetCounts("count", _0x308703);
              if (_0x308703) {
                if (!(window.bbs.headshot % 10)) {
                  _0x3cd95c.fxdo("shaokahn");
                } else {
                  _0x3cd95c.fxdo("headshot");
                }
                var _0x2ef0a7 = _0x5e41bd(_0x36bffa.H("index.game.floating.headshot"), true);
                this.addChild(_0x2ef0a7);
                this.jg.push(_0x2ef0a7);
              } else {
                var _0x33c597 = _0x5e41bd(_0x36bffa.H("index.game.floating.wellDone"), false);
                this.addChild(_0x33c597);
                this.jg.push(_0x33c597);
              }
            };
            _0x1aaa0c.prototype.Uf = function (_0x48823f, _0x534b49) {
              var _0x462900 = _0x4b2cbe().og.af.ng;
              var _0x33ea9e = _0x462900.lf.width / _0x462900.lf.resolution;
              var _0x4ca507 = _0x462900.lf.height / _0x462900.lf.resolution;
              for (var _0xd1a7f9 = 0; _0xd1a7f9 < this.jg.length;) {
                var _0x270e04 = this.jg[_0xd1a7f9];
                _0x270e04.pg = _0x270e04.pg + _0x534b49 / 2000 * _0x270e04.qg;
                _0x270e04.rg = _0x270e04.rg + _0x534b49 / 2000 * _0x270e04.sg;
                _0x270e04.alpha = Math.sin(Math.PI * _0x270e04.rg) * 0.5;
                _0x270e04.scale.set(_0x270e04.pg);
                _0x270e04.position.x = _0x33ea9e * (0.25 + _0x270e04.tg * 0.5);
                _0x270e04.position.y = _0x270e04.ug ? _0x4ca507 * (1 - (1 + _0x270e04.rg) * 0.5) : _0x4ca507 * (1 - (0 + _0x270e04.rg) * 0.5);
                if (_0x270e04.rg > 1) {
                  _0x36bffa.U(_0x270e04);
                  this.jg.splice(_0xd1a7f9, 1);
                  _0xd1a7f9--;
                }
                _0xd1a7f9++;
              }
            };
            var _0x423d8d = function () {
              return _0x36bffa.M(_0x4efbaa.Text, function (_0x16062c, _0x57d2be, _0x271143, _0x38689d, _0x5d782c, _0x219ec0, _0x3b156f) {
                _0x4efbaa.Text.call(this, _0x16062c, {
                  fill: _0x57d2be,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = _0x271143;
                this.pg = _0x38689d;
                this.qg = _0x5d782c;
                this.tg = _0x219ec0;
                this.rg = 0;
                this.sg = _0x3b156f;
              });
            }();
            return _0x1aaa0c;
          }();
          _0x3819e1.be = function () {
            function _0x3449ae(_0x2b7570, _0x52356f) {
              this.Xd = _0x2b7570;
              this.oa = _0x52356f;
            }
            return _0x3449ae;
          }();
          _0x3819e1.Ac = {
            vg: 0,
            zc: 16
          };
          _0x3819e1.GameParams = function () {
            function _0x4f7efe() {
              this.xg = _0x3819e1.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            _0x4f7efe.Cg = 0;
            _0x4f7efe.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return _0x4f7efe;
          }();
          _0x3819e1.Eg = function () {
            function _0x2d112f(_0x11e4b4) {
              this.ef = _0x11e4b4;
              this.Eb = _0x11e4b4.get()[0];
              this.lf = new _0x4efbaa.Renderer({
                view: _0x11e4b4.get()[0],
                backgroundColor: _0x43036c,
                antialias: false
              });
              this.mf = new _0x4efbaa.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(Math.random() * 360);
              this.Gg = 0;
              this.Hg = 0;
              this.Ig = 15;
              this.Jg = 0.5;
              this.Kg = 0;
              this.Lg = _0xb65a12.Lg(_0x3819e1);
              this.Ng = new _0x4efbaa.Graphics();
              this.Og = new _0x4efbaa.Container();
              this.Pg = new _0x4efbaa.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new _0x4efbaa.Container();
              this.Rg = new _0x4efbaa.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new _0x4efbaa.Container();
              this.Tg = new _0x485485();
              this.Ug = new _0x49fe00();
              this.Vg = new _0x4e357a();
              this.Wg = new _0x3819e1.ig();
              this.Xg = new _0x4efbaa.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.skinLineGraphics = null;
              this.ha();
            }
            var _0x43036c = 0;
            _0x2d112f.prototype.ha = function () {
              this.lf.backgroundColor = _0x43036c;
              this.Lg.sf.zIndex = 1;
              this.mf.addChild(this.Lg.sf);
              this.Ng.zIndex = 20;
              this.mf.addChild(this.Ng);
              this.Og.zIndex = 5000;
              this.mf.addChild(this.Og);
              this.Pg.zIndex = 5100;
              this.mf.addChild(this.Pg);
              this.Qg.zIndex = 10000;
              this.mf.addChild(this.Qg);
              createLine(this.mf, this.Lg.sf);
              this.Xg.texture = _0x4b2cbe().xe.Zg;
              this.Xg.anchor.set(0.5);
              this.Xg.zIndex = 1;
              this.Rg.addChild(this.Xg);
              this.Sg.alpha = 0.6;
              this.Sg.zIndex = 2;
              this.Rg.addChild(this.Sg);
              this.Wg.zIndex = 3;
              this.Rg.addChild(this.Wg);
              this.Tg.alpha = 0.8;
              this.Tg.zIndex = 4;
              this.Rg.addChild(this.Tg);
              this.Ug.zIndex = 5;
              this.Rg.addChild(this.Ug);
              this.Vg.zIndex = 6;
              this.Rg.addChild(this.Vg);
              // إضافة رسم الخطوط تحت السكن
              if (bbs && bbs.showSkinLines && this.skinLineGraphics == null) {
                this.skinLineGraphics = new PIXI.Graphics(); // PIXI Graphics
                this.skinLineGraphics.zIndex = 1000; // فوق كل شيء للاختبار
                this.skinLineGraphics.alpha = 1.0; // تأكد من الشفافية
              }
              this.Jf();
            };
            _0x2d112f.prototype.Jf = function () {
              var _0x23549b = this.ef.width();
              var _0x3888d3 = this.ef.height();
              var _0x1208b5 = window.bbs.display.custom ? window.bbs.display.clock.x * _0x23549b : 0;
              var _0x5cfb69 = window.bbs.display.custom ? window.bbs.display.clock.y * _0x3888d3 : 0;
              var _0x16012c = window.bbs.display.custom ? window.bbs.display.top.x * _0x23549b : _0x23549b - 255;
              var _0x5dba7a = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var _0x1d1764 = window.bbs.display.clock.rc ? _0x220e6f[window.bbs.display.clock.rc] : 0;
              var _0x4220bc = window.bbs.display.top.rt ? _0x220e6f[window.bbs.display.top.rt] : 0;
              var _0x4189d5 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var _0x38bffb = _0x4189d5 * _0x23549b;
              var _0x1867bd = _0x4189d5 * _0x3888d3;
              var _0x24624a = Math.min(Math.min(_0x23549b, _0x3888d3), Math.max(_0x23549b, _0x3888d3) * 0.625);
              this.lf.resize(_0x23549b, _0x3888d3);
              this.lf.resolution = _0x4189d5;
              this.Eb.width = _0x38bffb;
              this.Eb.height = _0x1867bd;
              this.Jg = _0x24624a;
              this.Xg.position.set(_0x23549b / 2, _0x3888d3 / 2);
              this.Xg.width = _0x23549b;
              this.Xg.height = _0x3888d3;
              this.Tg.position.set(60 + _0x1208b5, 60 + _0x5cfb69 + (_0x1d1764 ? this.Tg.height / 4 : 0));
              this.Ug.position.set(110, 10);
              this.Vg.position.set(_0x16012c, _0x5dba7a + (_0x4220bc ? this.Vg.height : 0));
              this.Tg.rotation = _0x1d1764;
              this.Vg.rotation = _0x4220bc;
            };
            _0x2d112f.prototype.Uf = function (_0x2bb9d7, _0x224dea) {
              var _0x43e656 = _0x3c7638;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(_0x2bb9d7.xg === _0x3819e1.Ac.vg ? _0x43e656.xe._g : _0x43e656.xe.ah);
              var _0x1394d1 = this.Ng;
              _0x1394d1.clear();
              _0x1394d1.lineStyle(0.2, 16711680, 0.6);
              _0x1394d1.drawCircle(0, 0, _0x2bb9d7.zg);
              _0x1394d1.endFill();
              this.Vg.bh = _0x224dea;
              this.Sg.visible = _0x224dea;
            };
            _0x2d112f.prototype.Nf = function (_0x494548, _0x4d4f9b) {
              if (this.lf.width <= 5) {
                return;
              }
              var _0x3bc0d2 = _0x3c7638;
              var _0x971ed = _0x3bc0d2.dh.ch;
              var _0x1da001 = this.lf.width / this.lf.resolution;
              var _0x5339f7 = this.lf.height / this.lf.resolution;
              this.Ig = _0xb65a12.$F.Q(this.Ig, _0x3bc0d2.dh.eh, _0x4d4f9b, 0.002);
              var _0x421a31 = this.Jg / (this.Ig * _0x2a0429);
              var _0xe71f = _0x3bc0d2.dh.ch.dd[_0xb65a12.$C.fd.qd];
              var _0x5d04a1 = _0xe71f != null && _0xe71f.hd;
              this.Kg = _0xb65a12.$F.P(this.Kg + _0x4d4f9b / 1000 * ((_0x5d04a1 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + _0x4d4f9b * 0.01) % 360;
              this.Gg = Math.sin(_0x494548 / 1200 * 2 * Math.PI);
              var _0x1a2e1d = _0x971ed.fh();
              this.Yg.x = _0xb65a12.$F.R(this.Yg.x, _0x1a2e1d.x, _0x4d4f9b, 0.5, 33.333);
              this.Yg.y = _0xb65a12.$F.R(this.Yg.y, _0x1a2e1d.y, _0x4d4f9b, 0.5, 33.333);
              var _0x302798 = _0x1da001 / _0x421a31 / 2;
              var _0x55046e = _0x5339f7 / _0x421a31 / 2;
              _0x3bc0d2.dh.gh(this.Yg.x - _0x302798 * 1.3, this.Yg.x + _0x302798 * 1.3, this.Yg.y - _0x55046e * 1.3, this.Yg.y + _0x55046e * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, _0x302798 * 2, _0x55046e * 2);
              }
              var _0x5ae0f9 = _0x3bc0d2.dh.hh.zg;
              this.mf.scale.set(_0x421a31, _0x421a31);
              this.mf.position.set(_0x1da001 / 2 - this.Yg.x * _0x421a31, _0x5339f7 / 2 - this.Yg.y * _0x421a31);
              var _0x10c39b = Math.hypot(_0x1a2e1d.x, _0x1a2e1d.y);
              if (_0x10c39b > _0x5ae0f9 - 10) {
                this.Hg = _0xb65a12.$F.P(1 + (_0x10c39b - _0x5ae0f9) / 10, 0, 1);
                var _0x2f709f = Math.cos(this.Fg * _0xb65a12.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var _0x576a09 = Math.sin(this.Fg * _0xb65a12.$V.F / 360) * (1 - this.Hg);
                var _0x12d340 = (Math.atan2(_0x576a09, _0x2f709f) + _0xb65a12.$V.F) % _0xb65a12.$V.F * 360 / _0xb65a12.$V.F;
                var _0x4c0f4d = this.Hg * (0.5 + this.Gg * 0.5);
                var _0x4d5866 = _0xb65a12.$F.Y(Math.floor(_0x12d340), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(_0x4d5866[0], _0x4d5866[1], _0x4d5866[2], 0.1 + _0x4c0f4d * 0.2);
              } else {
                this.Hg = 0;
                var _0x73a32a = _0xb65a12.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(_0x73a32a[0], _0x73a32a[1], _0x73a32a[2], 0.1);
              }
              for (var _0x33ac79 = 0; _0x33ac79 < this.Sg.children.length; _0x33ac79++) {
                var _0x4e0649 = this.Sg.children[_0x33ac79];
                _0x4e0649.position.set(_0x1da001 / 2 - (this.Yg.x - _0x4e0649.ih.x) * _0x421a31, _0x5339f7 / 2 - (this.Yg.y - _0x4e0649.ih.y) * _0x421a31);
              }
              this.Tg.jh.position.x = _0x1a2e1d.x / _0x5ae0f9 * this.Tg.kh;
              this.Tg.jh.position.y = _0x1a2e1d.y / _0x5ae0f9 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(_0x494548);
              this.Wg.Uf(_0x494548, _0x4d4f9b);
              // رسم الخطوط بين دوائر السكن
              if (this.cj && this.bj) {
                this.drawSkinLines();
              }
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            _0x2d112f.prototype.mh = function (_0x55f249, _0x3e419a) {
              _0x3e419a.nh.Cc.Qc().zIndex = (_0x55f249 + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(_0x3e419a.nh.Dc.Qc());
              this.Pg.addChild(_0x3e419a.nh.Cc.Qc());
            };
            _0x2d112f.prototype.oh = function (_0x23c305, _0x3886ed, _0x4b2238) {
              _0x3886ed.nc.zIndex = _0x4b2cbe().dh.hh.yg ? 0 : 10 + (_0x23c305 + 32768) / 65536 * 5000;
              this.Qg.addChild(_0x3886ed.nc);
              if (_0x23c305 != _0x4b2cbe().dh.hh.yg) {
                this.Sg.addChild(_0x4b2238);
              }
            };

            // إضافة دالة لرسم الخطوط
            _0x2d112f.prototype.drawSkinLines = function() {
              if (!bbs || !bbs.showSkinLines) {
                if (this.skinLineGraphics) {
                  this.skinLineGraphics.visible = false;
                }
                return;
              }
              
              // للاعب الحالي: تطبق بأي نقاط
              const isCurrentPlayer = this.ki && this.ki.Je === ooo.Mh.Qh.fh;
              
              // للاعبين الآخرين: فقط من لديه 400,000 نقطة أو أكثر
              if (!isCurrentPlayer && this.hi < 400000) {
                if (this.skinLineGraphics) {
                  this.skinLineGraphics.visible = false;
                }
                return;
              }
              
              // إنشاء الجرافيكس إذا لم يكن موجوداً
              if (!this.skinLineGraphics) {
                this.skinLineGraphics = new PIXI.Graphics();
                // إضافة للطبقة الخلفية (تحت السكن تماماً)
                if (ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.vh) {
                  ooo.Xg.Kf.Wg.vh.addChild(this.skinLineGraphics);
                }
                this.skinLineGraphics.zIndex = -100;
              }
              
              this.skinLineGraphics.clear();
              this.skinLineGraphics.visible = true;
              
              // رسم خطوط بيضاء رفيعة
              this.skinLineGraphics.lineStyle(0.1, 0xFFFFFF, 1.0);
              
              // رسم خطوط بين كل دائرتين متتاليتين في جسم السكن
              if (this.Kd && this.Jd) {
                for (let i = 1; i < this.Kd; i++) {
                  const x1 = this.Jd[i * 2 - 2];
                  const y1 = this.Jd[i * 2 - 1]; 
                  const x2 = this.Jd[i * 2];
                  const y2 = this.Jd[i * 2 + 1];
                  
                  // حساب الاتجاه العمودي للخط
                  const dx = x2 - x1;
                  const dy = y2 - y1;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  
                  if (length > 0) {
                    // الخط العمودي
                    const perpX = -dy / length;
                    const perpY = dx / length;
                    
                    // عرض أقل - بنفس حجم السكن تقريباً
                    const radius = this.Id * 4;
                    
                    // رسم خط ضيق
                    const lineWidth = radius * 0.4;
                    this.skinLineGraphics.moveTo(
                      (x1 + x2) / 2 + perpX * lineWidth,
                      (y1 + y2) / 2 + perpY * lineWidth
                    );
                    this.skinLineGraphics.lineTo(
                      (x1 + x2) / 2 - perpX * lineWidth,
                      (y1 + y2) / 2 - perpY * lineWidth
                    );
                  }
                }
              }
            };
            var _0x485485 = function () {
              return _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.kh = 40;
                this.qh = new _0x4efbaa.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var _0x54fecd = new _0x4efbaa.Graphics();
                _0x54fecd.beginFill("black", 0.4);
                _0x54fecd.drawCircle(0, 0, this.kh);
                _0x54fecd.endFill();
                _0x54fecd.lineStyle(1.5, 0xFFFFFF);
                _0x54fecd.drawCircle(0, 0, this.kh);
                _0x54fecd.moveTo(0, -this.kh);
                _0x54fecd.lineTo(0, +this.kh);
                _0x54fecd.moveTo(-this.kh, 0);
                _0x54fecd.lineTo(+this.kh, 0);
                _0x54fecd.endFill();
                if (bbs.display.customClock) {
                  _0x54fecd = new _0x4efbaa.Sprite();
                  _0x54fecd.texture = new _0x4efbaa.Texture.from(bbs.display.customClock.file);
                  _0x54fecd.width = this.kh * 2.75;
                  _0x54fecd.height = this.kh * 2.75;
                  _0x54fecd.anchor.set(0.5);
                }
                this.jh = new _0x4efbaa.Graphics();
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.lineStyle(1, 0, 1);
                this.jh.beginFill(0xFF0000, 1);
                this.jh.drawCircle(0, 0, 4.5);
                this.jh.endFill();
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1, "black");
                this.addChild(_0x54fecd);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(w2c2020.conteinerTeam);
              });
            }();
            var _0x49fe00 = function () {
              var _0x3739ff = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.rh = {};
              });
              _0x3739ff.prototype.lh = function (_0x7d341) {
                var _0x132093 = 0.5 + Math.cos(_0x3a8870.F * (_0x7d341 / 1000 / 1.6)) * 0.5;
                for (var _0x265e38 in this.rh) {
                  var _0x46d6be = this.rh[_0x265e38];
                  var _0x231366 = _0x46d6be.sh;
                  _0x46d6be.alpha = 1 - _0x231366 + _0x231366 * _0x132093;
                }
              };
              _0x3739ff.prototype.Uf = function (_0x2b9af6) {
                for (var _0x473b76 in this.rh) {
                  if (_0x2b9af6[_0x473b76] == null || !_0x2b9af6[_0x473b76].hd) {
                    _0x36bffa.U(this.rh[_0x473b76]);
                    delete this.rh[_0x473b76];
                  }
                }
                var _0x505296 = 0;
                for (var _0x22d983 in _0x2b9af6) {
                  var _0x30784b = _0x2b9af6[_0x22d983];
                  if (_0x30784b.hd) {
                    var _0x11f811 = this.rh[_0x22d983];
                    if (!_0x11f811) {
                      var _0x4062a8 = _0x4b2cbe().Lc.Ub().pb(_0x30784b.nd).ub;
                      _0x11f811 = new _0x46585c();
                      _0x11f811.texture = _0x4062a8.Ea();
                      _0x11f811.width = 40;
                      _0x11f811.height = 40;
                      this.rh[_0x22d983] = _0x11f811;
                      this.addChild(_0x11f811);
                    }
                    _0x11f811.sh = _0x30784b.od;
                    _0x11f811.position.x = _0x505296;
                    _0x505296 += 40;
                  }
                }
              };
              var _0x46585c = function () {
                return _0x36bffa.M(_0x4efbaa.Sprite, function () {
                  _0x4efbaa.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return _0x3739ff;
            }();
            var _0x4e357a = function () {
              var _0x16e126 = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var _0x1ba75d = 0; _0x1ba75d < 14; _0x1ba75d++) {
                  this.vh();
                }
              });
              _0x16e126.prototype.Uf = function (_0x12e4af) {
                var _0x5a35c8 = _0x4b2cbe();
                var _0x171b47 = _0x5a35c8.dh.hh.xg === _0x3819e1.Ac.zc;
                var _0x282c7d = 0;
                var _0x898bf8 = 0;
                if (_0x898bf8 >= this.jg.length) {
                  this.vh();
                }
                this.jg[_0x898bf8].wh(1, "white");
                this.jg[_0x898bf8].xh("", _0x36bffa.H("index.game.leader.top10"), "(" + _0x5a35c8.dh.yh + " online)");
                this.jg[_0x898bf8].position.y = _0x282c7d;
                _0x282c7d += this.th;
                _0x898bf8 += 1;
                if (_0x12e4af.zh.length > 0) {
                  _0x282c7d += this.uh;
                }
                for (var _0x2f31dd = 0; _0x2f31dd < _0x12e4af.zh.length; _0x2f31dd++) {
                  var _0xe21d86 = _0x12e4af.zh[_0x2f31dd];
                  var _0x42da7e = _0x5a35c8.Lc.Ub().jb(_0xe21d86.Ah);
                  var _0x285ca2 = "";
                  var _0x20a44a = _0x5a35c8.Lc.Xb().textDict[_0x42da7e.qb];
                  if (_0x20a44a != null) {
                    _0x285ca2 = _0x36bffa.I(_0x20a44a);
                  }
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(0.8, _0x42da7e.rb.tb);
                  this.jg[_0x898bf8].xh("" + (_0x2f31dd + 1), _0x285ca2, "" + Math.floor(_0xe21d86.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                }
                if (_0x12e4af.Ch.length > 0) {
                  _0x282c7d += this.uh;
                }
                for (var _0x10e784 = 0; _0x10e784 < _0x12e4af.Ch.length; _0x10e784++) {
                  var _0x57a4a9 = _0x12e4af.Ch[_0x10e784];
                  var _0x187543 = _0x5a35c8.dh.hh.yg == _0x57a4a9.Dh;
                  var _0x2f41e8;
                  var _0x1c445c;
                  if (_0x187543) {
                    _0x2f41e8 = "white";
                    _0x1c445c = _0x5a35c8.dh.ch.Eh.ma;
                  } else {
                    var _0xb1846f = _0x5a35c8.dh.Fh[_0x57a4a9.Dh];
                    if (!_0x2f41e8) {
                      _0x2f41e8 = "white";
                    }
                    if (_0xb1846f != null) {
                      _0x2f41e8 = _0x171b47 ? _0x5a35c8.Lc.Ub().jb(_0xb1846f.Eh.Gh).rb.tb : _0x5a35c8.Lc.Ub().ib(_0xb1846f.Eh.Hh).tb || _0x2f41e8;
                      _0x1c445c = this.bh && _0x346984 ? _0xb1846f.Eh.ma : "---";
                    } else {
                      _0x2f41e8 = "gray";
                      _0x1c445c = "?";
                    }
                  }
                  if (_0x187543) {
                    _0x282c7d += this.uh;
                  }
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(_0x187543 ? 1 : 0.8, _0x2f41e8);
                  this.jg[_0x898bf8].xh("" + (_0x10e784 + 1), _0x1c445c, "" + Math.floor(_0x57a4a9.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                  if (_0x187543) {
                    _0x282c7d += this.uh;
                  }
                  if (window.bbs.lr && _0x10e784 === 2) {
                    break;
                  }
                }
                if (_0x5a35c8.dh.Ih > (window.bbs.lr ? 3 : _0x12e4af.Ch.length)) {
                  _0x282c7d += this.uh;
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(1, "white");
                  this.jg[_0x898bf8].xh("" + _0x5a35c8.dh.Ih, _0x5a35c8.dh.ch.Eh.ma, "" + Math.floor(_0x5a35c8.dh.ch.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                  _0x282c7d += this.uh;
                }
                while (this.jg.length > _0x898bf8) {
                  _0x36bffa.U(this.jg.pop());
                }
              };
              _0x16e126.prototype.vh = function () {
                var _0x5835ff = new _0x1ddf28();
                _0x5835ff.position.y = 0;
                if (this.jg.length > 0) {
                  _0x5835ff.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(_0x5835ff);
                this.addChild(_0x5835ff);
              };
              var _0x1ddf28 = function () {
                var _0x15f9bb = _0x36bffa.M(_0x4efbaa.Container, function () {
                  _0x4efbaa.Container.call(this);
                  this.Jh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Jh.anchor.x = 1;
                  this.Jh.position.x = 30;
                  this.addChild(this.Jh);
                  this.Kh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Kh.anchor.x = 0;
                  this.Kh.position.x = 35;
                  this.addChild(this.Kh);
                  this.Lh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Lh.anchor.x = 1;
                  this.Lh.position.x = 250;
                  this.addChild(this.Lh);
                });
                _0x15f9bb.prototype.xh = function (_0x4b637c, _0x22911a, _0x3ea317) {
                  this.Jh.text = _0x4b637c;
                  this.Lh.text = _0x3ea317;
                  this.Kh.text = _0x22911a;
                };
                _0x15f9bb.prototype.wh = function (_0x181884, _0x6519f5) {
                  this.Jh.alpha = _0x181884;
                  this.Jh.style.fill = _0x6519f5;
                  this.Kh.alpha = _0x181884;
                  this.Kh.style.fill = _0x6519f5;
                  this.Lh.alpha = _0x181884;
                  this.Lh.style.fill = _0x6519f5;
                };
                return _0x15f9bb;
              }();
              return _0x16e126;
            }();
            return _0x2d112f;
          }();
          _0x3819e1.MessageProcessor = function () {
            function _0xa68027(_0x547053) {
              this.dh = _0x547053;
              this.Nh = [];
              this.Oh = 0;
            }
            _0xa68027.prototype.Ph = function (_0x576301) {
              this.Nh.push(new DataView(_0x576301));
            };
            _0xa68027.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            _0xa68027.prototype.Rh = function () {
              for (var _0x55e2d0 = 0; _0x55e2d0 < 16; _0x55e2d0++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var _0x4774fa = this.Nh.shift();
                try {
                  this.Sh(_0x4774fa);
                } catch (_0x464b1e) {
                  throw _0x464b1e;
                }
              }
            };
            _0xa68027.prototype.Sh = function (_0x41165d) {
              switch (_0x41165d.ba(0) & 255) {
                case 0:
                  this.Th(_0x41165d, 1);
                  return;
                case 1:
                  this.Uh(_0x41165d, 1);
                  return;
                case 2:
                  this.Vh(_0x41165d, 1);
                  return;
                case 3:
                  this.Wh(_0x41165d, 1);
                  return;
                case 4:
                  this.Xh(_0x41165d, 1);
                  return;
                case 5:
                  this.Yh(_0x41165d, 1);
                  return;
              }
            };
            _0xa68027.prototype.Th = function (_0x5607dd, _0x3e5632) {
              this.dh.hh.xg = _0x5607dd.ba(_0x3e5632);
              _0x3e5632 += 1;
              var _0x85c495 = _0x5607dd.ca(_0x3e5632);
              _0x3e5632 += 2;
              this.dh.hh.yg = _0x85c495;
              this.dh.ch.Eh.ae = _0x85c495;
              this.dh.hh.zg = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              this.dh.hh.Ag = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              this.dh.hh.Bg = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              _0x4b2cbe().og.af.ng.Uf(this.dh.hh, _0x4b2cbe().og.$h.Zh());
              return _0x3e5632;
            };
            _0xa68027.prototype.Uh = function (_0x3d4fdc, _0x5b91ba) {
              var _0x290547 = this.Oh++;
              var _0x5e7823 = _0x3d4fdc.ca(_0x5b91ba);
              _0x5b91ba += 2;
              var _0x4cb4ed = undefined;
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0xde0a09 = 0; _0xde0a09 < _0x4cb4ed; _0xde0a09++) {
                _0x5b91ba = this.bi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3fccb1 = 0; _0x3fccb1 < _0x4cb4ed; _0x3fccb1++) {
                _0x5b91ba = this.ci(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3c926e = 0; _0x3c926e < _0x4cb4ed; _0x3c926e++) {
                _0x5b91ba = this.di(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x192ce8 = 0; _0x192ce8 < _0x4cb4ed; _0x192ce8++) {
                _0x5b91ba = this.ei(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3443f1 = 0; _0x3443f1 < _0x4cb4ed; _0x3443f1++) {
                _0x5b91ba = this.fi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x333df9 = 0; _0x333df9 < _0x4cb4ed; _0x333df9++) {
                _0x5b91ba = this.gi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x4a82ca = 0; _0x4a82ca < _0x4cb4ed; _0x4a82ca++) {
                _0x5b91ba = this.hi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x1702cf = 0; _0x1702cf < _0x4cb4ed; _0x1702cf++) {
                _0x5b91ba = this.ii(_0x3d4fdc, _0x5b91ba);
              }
              if (_0x290547 > 0) {
                _0x5b91ba = this.ji(_0x3d4fdc, _0x5b91ba);
              }
              this.dh.ki(_0x290547, _0x5e7823);
              return _0x5b91ba;
            };
            _0xa68027.prototype.ei = function (_0x1dd411, _0x47c448) {
              var _0x352b13 = new _0x3819e1.Worm.li();
              _0x352b13.ae = _0x1dd411.ca(_0x47c448);
              _0x47c448 += 2;
              _0x352b13.Gh = this.dh.hh.xg === _0x3819e1.Ac.zc ? _0x1dd411.ba(_0x47c448++) : _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
              _0x352b13.Hh = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("Hh|lj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.ni = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("ni|mj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.oi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("oi|nj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.pi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("pi|pj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.qi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("qi|oj", _0x47c448);
              _0x47c448 += 2;
              var _0x329187 = _0x1dd411.ba(_0x47c448);
              _0x47c448 += 1;
              var _0xc4596 = "";
              for (var _0x2470e4 = 0; _0x2470e4 < _0x329187; _0x2470e4++) {
                _0xc4596 += String.fromCharCode(_0x1dd411.ca(_0x47c448));
                _0x47c448 += 2;
              }
              _0x352b13.ma = _0xc4596;
              if (this.dh.hh.yg === _0x352b13.ae) {
                var _0x43572a = Object.keys(_0xb65a12.pm);
                _0x43572a.forEach(function (_0x13175c) {
                  _0x352b13[_0x13175c] = window.bbs.PropertyManager[_0xb65a12.pm[_0x13175c].p];
                  _0x1dd411.setInt16(_0xb65a12.pm[_0x13175c].i, _0x352b13[_0x13175c]);
                });
                this.dh.ch.ri(_0x352b13);
                _wwc.startGame();
                _wwcio.connect(_0x352b13);
              } else {
                var _0x469749 = this.dh.Fh[_0x352b13.ae];
                if (_0x469749 != null) {
                  _0x469749.si();
                }
                var _0x8d4146 = new _0x3819e1.Worm(this.dh.hh);
                _0x8d4146.ti(_0x4b2cbe().og.af.ng);
                this.dh.Fh[_0x352b13.ae] = _0x8d4146;
                _0x8d4146.ri(_0x352b13);
              }
              _0xb65a12.ae(_0x1dd411, _0x352b13, this);
              return _0x47c448;
            };
            _0xa68027.prototype.fi = function (_0x45616e, _0x1492cd) {
              var _0x3fa71d = _0x45616e.ca(_0x1492cd);
              _0x1492cd += 2;
              var _0x396678 = _0x45616e.ba(_0x1492cd);
              _0x1492cd++;
              var _0x19d284 = !!(_0x396678 & 1);
              var _0x26307b = !!(_0x396678 & 2);
              var _0x4ff103 = 0;
              if (_0x19d284) {
                _0x4ff103 = _0x45616e.ca(_0x1492cd);
                _0x1492cd += 2;
              }
              var _0x53c279 = this.vi(_0x3fa71d);
              if (_0x53c279 === undefined) {
                return _0x1492cd;
              }
              _0x53c279.wi = false;
              if (!_0x53c279.xi) {
                return _0x1492cd;
              }
              var _0x3ff462 = this.vi(_0x3fa71d);
              if (_0x19d284 && _0x3ff462 !== undefined && _0x3ff462.xi) {
                if (_0x4ff103 === this.dh.hh.yg) {
                  var _0x4e1098 = this.dh.ch.fh();
                  var _0x106a9b = _0x53c279.yi(_0x4e1098.x, _0x4e1098.y);
                  Math.max(0, 1 - _0x106a9b.distance / (this.dh.eh * 0.5));
                  if (_0x106a9b.distance < this.dh.eh * 0.5) {
                    var _0x332499 = _0x4b2cbe().og.af.ng.Wg;
                    _0x332499.mg(_0x26307b);
                    _wwcio.update(_0x396678, _0x26307b);
                  }
                } else if (_0x3fa71d === this.dh.hh.yg) ;else {
                  var _0x568449 = this.dh.ch.fh();
                  var _0x5ad6b5 = _0x53c279.yi(_0x568449.x, _0x568449.y);
                  Math.max(0, 1 - _0x5ad6b5.distance / (this.dh.eh * 0.5));
                }
              } else if (_0x3fa71d === this.dh.hh.yg) ;else {
                var _0x5bb96f = this.dh.ch.fh();
                var _0x1e9eca = _0x53c279.yi(_0x5bb96f.x, _0x5bb96f.y);
                Math.max(0, 1 - _0x1e9eca.distance / (this.dh.eh * 0.5));
              }
              return _0x1492cd;
            };
            _0xa68027.prototype.ii = function (_0x3a725f, _0x5dde17) {
              var _0x124e67 = _0x3a725f.ca(_0x5dde17);
              _0x5dde17 += 2;
              var _0x42c52c = _0x124e67 === this.dh.hh.yg ? null : this.dh.Fh[_0x124e67];
              var _0x4642f6 = _0x3a725f.ba(_0x5dde17);
              _0x5dde17 += 1;
              var _0x236ba9 = !!(_0x4642f6 & 1);
              if (_0x4642f6 & 2) {
                var _0x285d49 = _0x3a725f.ea(_0x5dde17);
                _0x5dde17 += 4;
                if (_0x42c52c) {
                  _0x42c52c.zi(_0x285d49);
                }
              }
              var _0x42e696 = this.Ai(_0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++));
              var _0x1b8c40 = this.Ai(_0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++));
              if (_0x42c52c) {
                _0x42c52c.Bi(_0x42e696, _0x1b8c40, _0x236ba9);
                var _0x4db16f = this.dh.ch.fh();
                var _0x1b608f = _0x42c52c.fh();
                var _0x130a2f = Math.max(0, 1 - Math.hypot(_0x4db16f.x - _0x1b608f.x, _0x4db16f.y - _0x1b608f.y) / (this.dh.eh * 0.5));
                _0x4b2cbe().Ci.Ye(_0x130a2f, _0x124e67, _0x236ba9);
              }
              var _0x4b6897 = this._h(_0x3a725f, _0x5dde17);
              _0x5dde17 += this.ai(_0x4b6897);
              if (_0x42c52c) {
                for (var _0xaff4ff in _0x42c52c.dd) {
                  var _0x39aefb = _0x42c52c.dd[_0xaff4ff];
                  if (_0x39aefb) {
                    _0x39aefb.hd = false;
                  }
                }
              }
              for (var _0x30b382 = 0; _0x30b382 < _0x4b6897; _0x30b382++) {
                var _0x71d8a0 = _0x3a725f.ba(_0x5dde17);
                _0x5dde17++;
                var _0x595308 = _0x3a725f.ba(_0x5dde17);
                _0x5dde17++;
                if (_0x42c52c) {
                  var _0x17c8d5 = _0x42c52c.dd[_0x71d8a0];
                  _0x17c8d5 ||= _0x42c52c.dd[_0x71d8a0] = new _0x3819e1.fd(_0x71d8a0);
                  _0x17c8d5.hd = true;
                  _0x17c8d5.od = Math.min(1, Math.max(0, _0x595308 / 100));
                }
              }
              return _0x5dde17;
            };
            _0xa68027.prototype.ji = function (_0x3473ae, _0x2d0a3a) {
              var _0x3ebeb0 = this.dh.ch;
              var _0x966093 = _0x3473ae.ba(_0x2d0a3a);
              _0x2d0a3a += 1;
              var _0x3c2f05 = !!(_0x966093 & 1);
              var _0x1bfb48 = !!(_0x966093 & 2);
              var _0x3fc631 = !!(_0x966093 & 4);
              if (_0x1bfb48) {
                var _0x58ae19 = _0x3ebeb0.Bh;
                _0x3ebeb0.zi(_0x3473ae.ea(_0x2d0a3a));
                _0x2d0a3a += 4;
                _0x58ae19 = _0x3ebeb0.Bh - _0x58ae19;
                if (_0x58ae19 > 0) {
                  _0x4b2cbe().og.af.ng.Wg.lg(_0x58ae19);
                }
              }
              if (_0x3fc631) {
                this.dh.Di = _0x3473ae.ea(_0x2d0a3a);
                _0x2d0a3a += 4;
              }
              var _0xbccf8f = this.Ai(_0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++));
              var _0x203778 = this.Ai(_0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++));
              _0x3ebeb0.Bi(_0xbccf8f, _0x203778, _0x3c2f05);
              _0x4b2cbe().Ci.Ye(0.5, this.dh.hh.yg, _0x3c2f05);
              var _0x1d1666 = this._h(_0x3473ae, _0x2d0a3a);
              _0x2d0a3a += this.ai(_0x1d1666);
              for (var _0x6cd8c3 in _0x3ebeb0.dd) {
                var _0x2b1572 = _0x3ebeb0.dd[_0x6cd8c3];
                if (_0x2b1572) {
                  _0x2b1572.hd = false;
                }
              }
              for (var _0x339f56 = 0; _0x339f56 < _0x1d1666; _0x339f56++) {
                var _0x2d7ab5 = _0x3473ae.ba(_0x2d0a3a);
                _0x2d0a3a++;
                var _0x1e2572 = _0x3473ae.ba(_0x2d0a3a);
                _0x2d0a3a++;
                var _0x18a3d1 = _0x3ebeb0.dd[_0x2d7ab5];
                if (!_0x18a3d1) {
                  _0x18a3d1 = new _0x3819e1.fd(_0x2d7ab5);
                  _0x3ebeb0.dd[_0x2d7ab5] = _0x18a3d1;
                }
                _0x18a3d1.hd = true;
                _0x18a3d1.od = Math.min(1, Math.max(0, _0x1e2572 / 100));
              }
              _0x4b2cbe().og.af.ng.Ug.Uf(_0x3ebeb0.dd);
            };
            _0xa68027.prototype.gi = function (_0x60fbdc, _0x69110b) {
              var _0x1bce4e = this;
              var _0x19becd = _0x60fbdc.ca(_0x69110b);
              _0x69110b += 2;
              var _0x6c3d69 = this.vi(_0x19becd);
              var _0x2e517d = _0x60fbdc.ea(_0x69110b);
              _0x69110b += 4;
              var _0x1b628e = this._h(_0x60fbdc, _0x69110b);
              _0x69110b += this.ai(_0x1b628e);
              if (_0x6c3d69) {
                _0x6c3d69.zi(_0x2e517d);
                _0x6c3d69.Ei(function () {
                  return _0x1bce4e.Ai(_0x60fbdc.ba(_0x69110b++), _0x60fbdc.ba(_0x69110b++), _0x60fbdc.ba(_0x69110b++));
                }, _0x1b628e);
                _0x6c3d69.kd(true);
                var _0x2e6768 = this.dh.ch.fh();
                var _0x2d179d = _0x6c3d69.fh();
                var _0x5b9642 = Math.max(0, 1 - Math.hypot(_0x2e6768.x - _0x2d179d.x, _0x2e6768.y - _0x2d179d.y) / (this.dh.eh * 0.5));
                _0x4b2cbe().Ci.We(_0x5b9642, _0x19becd);
              } else {
                _0x69110b += _0x1b628e * 6;
              }
              return _0x69110b;
            };
            _0xa68027.prototype.hi = function (_0xbcf698, _0x6fb071) {
              var _0x2f4f05 = _0xbcf698.ca(_0x6fb071);
              _0x6fb071 += 2;
              var _0x180b37 = this.dh.Fh[_0x2f4f05];
              if (_0x180b37 && _0x180b37.wi) {
                _0x180b37.kd(false);
              }
              _0x4b2cbe().Ci.Xe(_0x2f4f05);
              return _0x6fb071;
            };
            _0xa68027.prototype.bi = function (_0x41b69a, _0x5b84a7) {
              var _0x20caaa = new _0x3819e1.Fi.li();
              _0x20caaa.ae = _0x41b69a.da(_0x5b84a7);
              _0x5b84a7 += 4;
              _0x20caaa.Gh = this.dh.hh.xg === _0x3819e1.Ac.zc ? _0x41b69a.ba(_0x5b84a7++) : _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
              _0x20caaa.Gi = this.Ai(_0x41b69a.ba(_0x5b84a7++), _0x41b69a.ba(_0x5b84a7++), _0x41b69a.ba(_0x5b84a7++));
              _0x20caaa.Hh = _0x41b69a.ba(_0x5b84a7++);
              var _0x310259 = this.dh.Hi[_0x20caaa.ae];
              if (_0x310259 != null) {
                _0x310259.si();
              }
              var _0x917d7 = new _0x3819e1.Fi(_0x20caaa, _0x4b2cbe().og.af.ng);
              _0x917d7.Ii(this.Ji(_0x20caaa.ae), this.Ki(_0x20caaa.ae), true);
              this.dh.Hi[_0x20caaa.ae] = _0x917d7;
              return _0x5b84a7;
            };
            _0xa68027.prototype.ci = function (_0x2c3e03, _0x5314cd) {
              var _0x226d4d = _0x2c3e03.da(_0x5314cd);
              _0x5314cd += 4;
              var _0x17924e = this.dh.Hi[_0x226d4d];
              if (_0x17924e) {
                _0x17924e.Li = 0;
                _0x17924e.Mi = _0x17924e.Mi * 1.5;
                _0x17924e.Ni = true;
              }
              return _0x5314cd;
            };
            _0xa68027.prototype.di = function (_0xd434f9, _0x5601f8) {
              var _0x2a0ed6 = _0xd434f9.da(_0x5601f8);
              _0x5601f8 += 4;
              var _0xec3d24 = _0xd434f9.ca(_0x5601f8);
              _0x5601f8 += 2;
              var _0x569dd5 = this.dh.Hi[_0x2a0ed6];
              if (_0x569dd5) {
                _0x569dd5.Li = 0;
                _0x569dd5.Mi = _0x569dd5.Mi * 0.1;
                _0x569dd5.Ni = true;
                var _0x620423 = this.vi(_0xec3d24);
                if (_0x620423 && _0x620423.xi) {
                  this.dh.hh.yg;
                  var _0x32c9be = _0x620423.fh();
                  _0x569dd5.Ii(_0x32c9be.x, _0x32c9be.y, false);
                }
              }
              return _0x5601f8;
            };
            var _0x41b940 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            _0xa68027.prototype.Vh = function (_0x557625) {
              var _0x258218 = _0x4b2cbe().Lc.Zb().Fb;
              var _0x5ab83c = _0x258218.getImageData(0, 0, 80, 80);
              var _0x30fdb7 = _0x41b940[0];
              var _0x30514c = 80 - _0x30fdb7;
              var _0xb89363 = 0;
              for (var _0x2a26ef = 0; _0x2a26ef < 628; _0x2a26ef++) {
                var _0x25d0b3 = _0x557625.ba(1 + _0x2a26ef);
                for (var _0x5594b1 = 0; _0x5594b1 < 8; _0x5594b1++) {
                  var _0xb8b268 = (_0x25d0b3 >> _0x5594b1 & 1) != 0;
                  var _0xf4583e = (_0x30fdb7 + _0xb89363 * 80) * 4;
                  if (_0xb8b268) {
                    _0x5ab83c.data[_0xf4583e] = 255;
                    _0x5ab83c.data[_0xf4583e + 1] = 255;
                    _0x5ab83c.data[_0xf4583e + 2] = 255;
                    _0x5ab83c.data[_0xf4583e + 3] = 255;
                  } else {
                    _0x5ab83c.data[_0xf4583e + 3] = 0;
                  }
                  if (++_0x30fdb7 >= _0x30514c && ++_0xb89363 < 80) {
                    _0x30fdb7 = _0x41b940[_0xb89363];
                    _0x30514c = 80 - _0x30fdb7;
                  }
                }
              }
              _0x258218.putImageData(_0x5ab83c, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var _0x5c2f0e = _0x4b2cbe().og.af.ng.Tg.qh;
              _0x5c2f0e.texture = _0x4b2cbe().Lc.Zb().oa;
              _0x5c2f0e.texture.update();
            };
            _0xa68027.prototype.Xh = function (_0x1603f0, _0x50d962) {
              _0x1603f0.da(_0x50d962);
            };
            _0xa68027.prototype.Yh = function (_0x45294f, _0x409148) {
              this.dh.Oi();
            };
            _0xa68027.prototype.Wh = function (_0x541ef6, _0x493e24) {
              this.dh.yh = _0x541ef6.ca(_0x493e24);
              _0x493e24 += 2;
              this.dh.Ih = _0x541ef6.ca(_0x493e24);
              _0x493e24 += 2;
              var _0x2b09bc = new _0x3819e1.Pi();
              _0x2b09bc.Ch = [];
              for (var _0x3d01a9 = _0x541ef6.ba(_0x493e24++), _0x59d232 = 0; _0x59d232 < _0x3d01a9; _0x59d232++) {
                var _0x25e722 = _0x541ef6.ca(_0x493e24);
                _0x493e24 += 2;
                var _0x400bd6 = _0x541ef6.ea(_0x493e24);
                _0x493e24 += 4;
                _0x2b09bc.Ch.push(_0x3819e1.Pi.Qi(_0x25e722, _0x400bd6));
              }
              _0x2b09bc.zh = [];
              if (this.dh.hh.xg === _0x3819e1.Ac.zc) {
                for (var _0x22500d = _0x541ef6.ba(_0x493e24++), _0x515e81 = 0; _0x515e81 < _0x22500d; _0x515e81++) {
                  var _0x2fa6a7 = _0x541ef6.ba(_0x493e24);
                  _0x493e24 += 1;
                  var _0x529f64 = _0x541ef6.ea(_0x493e24);
                  _0x493e24 += 4;
                  _0x2b09bc.zh.push(_0x3819e1.Pi.Ri(_0x2fa6a7, _0x529f64));
                }
              }
              _0x4b2cbe().og.af.ng.Vg.Uf(_0x2b09bc);
            };
            _0xa68027.prototype.vi = function (_0x2516c7) {
              if (_0x2516c7 === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[_0x2516c7];
              }
            };
            _0xa68027.prototype.Ai = function (_0x4743ed, _0x22baa4, _0x202417) {
              return (((_0x202417 & 255 | _0x22baa4 << 8 & 65280 | _0x4743ed << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            _0xa68027.prototype.Ji = function (_0xe29572) {
              return ((_0xe29572 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0xa68027.prototype.Ki = function (_0x248ce7) {
              return ((_0x248ce7 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0xa68027.prototype._h = function (_0xe31833, _0x320325) {
              var _0x483ddf = _0xe31833.ba(_0x320325);
              if ((_0x483ddf & 128) == 0) {
                return _0x483ddf;
              }
              var _0x5795b1 = _0xe31833.ba(_0x320325 + 1);
              if ((_0x5795b1 & 128) == 0) {
                return _0x5795b1 | _0x483ddf << 7 & 16256;
              }
              var _0x100094 = _0xe31833.ba(_0x320325 + 2);
              if ((_0x100094 & 128) == 0) {
                return _0x100094 | _0x5795b1 << 7 & 16256 | _0x483ddf << 14 & 2080768;
              }
              var _0x3bc8db = _0xe31833.ba(_0x320325 + 3);
              if ((_0x3bc8db & 128) == 0) {
                return _0x3bc8db | _0x100094 << 7 & 16256 | _0x5795b1 << 14 & 2080768 | _0x483ddf << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            _0xa68027.prototype.ai = function (_0x55fb2f) {
              if (_0x55fb2f < 128) {
                return 1;
              } else if (_0x55fb2f < 16384) {
                return 2;
              } else if (_0x55fb2f < 2097152) {
                return 3;
              } else if (_0x55fb2f < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return _0xa68027;
          }();
          _0x3819e1.Si = function () {
            function _0x40b843(_0x49b284) {
              this.Ti = _0x49b284;
            }
            _0x40b843.Ui = function () {
              return new _0x3819e1.Si(null);
            };
            _0x40b843.Vi = function (_0x4444f4) {
              return new _0x3819e1.Si(_0x4444f4);
            };
            _0x40b843.prototype.bc = function () {
              return this.Ti;
            };
            _0x40b843.prototype.Wi = function () {
              return this.Ti != null;
            };
            _0x40b843.prototype.Xi = function (_0x586838) {
              if (this.Ti != null) {
                _0x586838(this.Ti);
              }
            };
            return _0x40b843;
          }();
          _0x3819e1.Fi = function () {
            function _0x45a103(_0x4e3346, _0x4d05c1) {
              this.Eh = _0x4e3346;
              this.Yi = _0x4e3346.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : _0x4e3346.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new _0x3819e1.PortionSpriteTree();
              this.fj.yc(_0x4b2cbe().dh.hh.xg, this.Eh.Gh === _0x3819e1.GameParams.Cg ? null : _0x4b2cbe().Lc.Ub().jb(this.Eh.Gh), _0x4b2cbe().Lc.Ub().ob(this.Eh.Hh));
              _0x4d05c1.mh(_0x4e3346.ae, this.fj);
            }
            _0x45a103.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            _0x45a103.prototype.Ii = function (_0x3294a4, _0xa47928, _0x79998a) {
              this.Zi = _0x3294a4;
              this.$i = _0xa47928;
              if (_0x79998a) {
                this._i = _0x3294a4;
                this.aj = _0xa47928;
              }
            };
            _0x45a103.prototype.hj = function (_0x6dc491, _0x6c01b8) {
              var _0x45ffbb = Math.min(0.5, this.Mi * 1);
              var _0x3b99b5 = Math.min(2.5, this.Mi * 1.5);
              this.bj = _0x36bffa.Q(this.bj, _0x45ffbb, _0x6c01b8, 0.0025);
              this.cj = _0x36bffa.Q(this.cj, _0x3b99b5, _0x6c01b8, 0.0025);
              this.dj = _0x36bffa.Q(this.dj, this.Li, _0x6c01b8, 0.0025);
            };
            _0x45a103.prototype.ij = function (_0xc267bc, _0x35c9fa, _0x127847) {
              this._i = _0x36bffa.Q(this._i, this.Zi, _0x35c9fa, 0.0025);
              this.aj = _0x36bffa.Q(this.aj, this.$i, _0x35c9fa, 0.0025);
              this.fj.Uf(this, _0xc267bc, _0x35c9fa, _0x127847);
            };
            _0x45a103.li = function () {
              function _0x439a2d() {
                this.me = 0;
                this.ae = 0;
                this.Gh = _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return _0x439a2d;
            }();
            return _0x45a103;
          }();
          _0x3819e1.PortionSpriteTree = function () {
            var _0x5725b4 = 500;
            var _0x4118dd = 100;
            function _0x7fd7de() {
              this.nh = new _0x370d92(new _0x3819e1.sc(), new _0x3819e1.sc());
              this.nh.Dc.xc.blendMode = _0x4efbaa.v.z;
              this.nh.Dc.xc.zIndex = _0x4118dd;
              this.nh.Cc.xc.zIndex = _0x5725b4;
            }
            _0x7fd7de.prototype.yc = function (_0xfb4927, _0x417991, _0x3acc13) {
              var _0x353292 = _0x3acc13.ub;
              if (_0x353292) {
                this.nh.Cc.Bc(_0x353292);
              }
              var _0x4f42e5 = _0xfb4927 === _0x3819e1.Ac.zc && _0x417991 ? _0x417991.sb.vb : _0x3acc13.vb;
              if (_0x4f42e5) {
                this.nh.Dc.Bc(_0x4f42e5);
              }
            };
            _0x7fd7de.prototype.Uf = function (_0x477392, _0x207d9d, _0x172534, _0x54c193) {
              if (!_0x54c193(_0x477392._i, _0x477392.aj)) {
                this.nh.Uc();
              } else {
                var _0x2380a0 = _0x2a0429 > 1 ? _0x2a0429 / 5 : 0;
                var _0x10b5de = _0x477392.cj * 1 + Math.cos(_0x477392.ej + _0x207d9d / 200) * 0.3;
                this.nh.Sc(_0x477392._i, _0x477392.aj, _0x477392.Yi ? _0x477392.bj * 2 + _0x2380a0 : _0x477392.bj * 2, _0x477392.Yi ? _0x477392.dj * 1 + _0x2380a0 : _0x477392.dj * 1, _0x477392.Yi ? _0x10b5de * 1.2 + _0x2380a0 : _0x10b5de * 2, _0x477392.Yi ? _0x477392.dj * 0.8 : _0x477392.dj * 0.3);
              }
            };
            var _0x370d92 = function () {
              function _0x5dccae(_0x5c9ef0, _0x14febe) {
                this.Cc = _0x5c9ef0;
                this.Dc = _0x14febe;
              }
              _0x5dccae.prototype.Sc = function (_0xc533f2, _0x5930e2, _0x702244, _0x3be74b, _0x3b29b4, _0x5c0334) {
                this.Cc.kd(true);
                this.Cc.ld(_0xc533f2, _0x5930e2);
                this.Cc.Tc(_0x702244);
                this.Cc.jj(_0x3be74b);
                this.Dc.kd(true);
                this.Dc.ld(_0xc533f2, _0x5930e2);
                this.Dc.Tc(_0x3b29b4);
                this.Dc.jj(_0x5c0334);
              };
              _0x5dccae.prototype.Uc = function () {};
              return _0x5dccae;
            }();
            return _0x7fd7de;
          }();
          _0x3819e1.kj = function () {
            function _0x2f5ea1() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function _0x5063ab(_0x4e16bf, _0x43513f) {
              for (var _0x5b30fb = 0; _0x5b30fb < _0x4e16bf.length; _0x5b30fb++) {
                if (_0x4e16bf[_0x5b30fb].id == _0x43513f) {
                  return _0x5b30fb;
                }
              }
              return -1;
            }
            _0x2f5ea1.prototype.ha = function () {};
            _0x2f5ea1.prototype.rj = function (_0x423d91) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = _0x4e5fcd({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (_0x423d91) {
                case _0x3819e1.tj.sj:
                  return this.lj;
                case _0x3819e1.tj.uj:
                  return this.mj;
                case _0x3819e1.tj.vj:
                  return this.nj;
                case _0x3819e1.tj.wj:
                  return this.oj;
                case _0x3819e1.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            _0x2f5ea1.prototype.yj = function () {
              return new _0x3819e1.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            _0x2f5ea1.prototype.zj = function (_0x4480c8) {
              this.qj.push(_0x4480c8);
              this.Aj();
            };
            _0x2f5ea1.prototype.Bj = function () {
              if (!_0x4b2cbe().Lc.Wb()) {
                return _0x36bffa.W([32, 33, 34, 35]);
              }
              var _0x46b037 = [];
              for (var _0x51d7ba = _0x4b2cbe().Lc.Xb().skinArrayDict, _0x2a43fd = 0; _0x2a43fd < _0x51d7ba.length; _0x2a43fd++) {
                var _0x3da9b5 = _0x51d7ba[_0x2a43fd];
                if (this.Cj(_0x3da9b5.id, _0x3819e1.tj.sj)) {
                  _0x46b037.push(_0x3da9b5);
                }
              }
              if (_0x46b037.length === 0) {
                return 0;
              } else {
                return _0x46b037[parseInt(_0x46b037.length * Math.random())].id;
              }
            };
            _0x2f5ea1.prototype.Dj = function () {
              if (_0x4b2cbe().Lc.Wb()) {
                var _0x1d76e4 = _0x4b2cbe().Lc.Xb().skinArrayDict;
                var _0x54ecec = _0x5063ab(_0x1d76e4, this.lj);
                if (!(_0x54ecec < 0)) {
                  for (var _0x4a6138 = _0x54ecec + 1; _0x4a6138 < _0x1d76e4.length; _0x4a6138++) {
                    if (this.Cj(_0x1d76e4[_0x4a6138].id, _0x3819e1.tj.sj)) {
                      this.lj = _0x1d76e4[_0x4a6138].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x2d08a5 = 0; _0x2d08a5 < _0x54ecec; _0x2d08a5++) {
                    if (this.Cj(_0x1d76e4[_0x2d08a5].id, _0x3819e1.tj.sj)) {
                      this.lj = _0x1d76e4[_0x2d08a5].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x2f5ea1.prototype.Ej = function () {
              var _0x23d784 = _0x4b2cbe();
              if (_0x23d784.Lc.Wb) {
                var _0xc5c657 = _0x23d784.Lc.Xb().skinArrayDict;
                var _0x5b3dbf = _0x5063ab(_0xc5c657, this.lj);
                if (!(_0x5b3dbf < 0)) {
                  for (var _0x953ada = _0x5b3dbf - 1; _0x953ada >= 0; _0x953ada--) {
                    if (this.Cj(_0xc5c657[_0x953ada].id, _0x3819e1.tj.sj)) {
                      this.lj = _0xc5c657[_0x953ada].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x50552d = _0xc5c657.length - 1; _0x50552d > _0x5b3dbf; _0x50552d--) {
                    if (this.Cj(_0xc5c657[_0x50552d].id, _0x3819e1.tj.sj)) {
                      this.lj = _0xc5c657[_0x50552d].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x2f5ea1.prototype.Fj = function (_0x52c26c, _0x27b573) {
              if (!_0x4b2cbe().Lc.Wb() || this.Cj(_0x52c26c, _0x27b573)) {
                switch (_0x27b573) {
                  case _0x3819e1.tj.sj:
                    if (this.lj !== _0x52c26c) {
                      this.lj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.uj:
                    if (this.mj !== _0x52c26c) {
                      this.mj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.vj:
                    if (this.nj !== _0x52c26c) {
                      this.nj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.wj:
                    if (this.oj !== _0x52c26c) {
                      this.oj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.xj:
                    if (this.pj !== _0x52c26c) {
                      this.pj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            _0x2f5ea1.prototype.Cj = function (_0x58894d, _0x9baa93) {
              var _0x1da213 = this.Gj(_0x58894d, _0x9baa93);
              return _0x1da213 != null && (_0x4b2cbe().Ij.Hj() ? _0x1da213.Jj() === 0 && !_0x1da213.Kj() || _0x4b2cbe().Ij.Lj(_0x58894d, _0x9baa93) : _0x1da213.Mj());
            };
            _0x2f5ea1.prototype.Gj = function (_0x256285, _0x16b377) {
              if (!_0x4b2cbe().Lc.Wb()) {
                return null;
              }
              var _0x2a34c7 = _0x4b2cbe().Lc.Xb();
              if (_0x16b377 === _0x3819e1.tj.sj) {
                var _0x27d68c = _0x5063ab(_0x2a34c7.skinArrayDict, _0x256285);
                if (_0x27d68c < 0) {
                  return null;
                } else {
                  return _0x3819e1.Oj.Nj(_0x2a34c7.skinArrayDict[_0x27d68c]);
                }
              }
              var _0x50b576 = null;
              switch (_0x16b377) {
                case _0x3819e1.tj.uj:
                  _0x50b576 = _0x2a34c7.eyesDict[_0x256285];
                  break;
                case _0x3819e1.tj.vj:
                  _0x50b576 = _0x2a34c7.mouthDict[_0x256285];
                  break;
                case _0x3819e1.tj.wj:
                  _0x50b576 = _0x2a34c7.hatDict[_0x256285];
                  break;
                case _0x3819e1.tj.xj:
                  _0x50b576 = _0x2a34c7.glassesDict[_0x256285];
              }
              if (_0x50b576 != null) {
                return _0x3819e1.Oj.Pj(_0x50b576);
              } else {
                return null;
              }
            };
            _0x2f5ea1.prototype.Aj = function () {
              for (var _0x25d880 = 0; _0x25d880 < this.qj.length; _0x25d880++) {
                this.qj[_0x25d880]();
              }
            };
            return _0x2f5ea1;
          }();
          _0x3819e1.tj = function () {
            function _0x285544() {}
            _0x285544.sj = "SKIN";
            _0x285544.uj = "EYES";
            _0x285544.vj = "MOUTH";
            _0x285544.xj = "GLASSES";
            _0x285544.wj = "HAT";
            return _0x285544;
          }();
          _0x3819e1.Qj = function () {
            function _0x3acf2d() {
              this.Bf = new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = _0xb65a12.bgg();
              this.ah = new _0x4efbaa.Texture(function () {
                var _0x95f41c = _0x4efbaa.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                _0x95f41c.wrapMode = _0x4efbaa.C.D;
                return _0x95f41c;
              }());
              this.Zg = new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var _0x300861 = window.document.createElement("canvas");
                _0x300861.width = 80;
                _0x300861.height = 80;
                return {
                  Eb: _0x300861,
                  Fb: _0x300861.getContext("2d"),
                  oa: new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from(_0x300861))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            _0x3acf2d.prototype.ha = function (_0x3efb9d) {
              function _0xe5b55() {
                if (--_0x475338 == 0) {
                  _0x3efb9d();
                }
              }
              var _0x475338 = 4;
              this.Ae = {};
              _0xe5b55();
              this.we = {};
              _0xe5b55();
              this.Rj = [];
              _0xe5b55();
              this.Sj = null;
              _0xe5b55();
            };
            return _0x3acf2d;
          }();
          _0x3819e1.Tj = function () {
            function _0x18eaae() {
              this.Uj = null;
              this.af = new _0x3819e1.Vj();
              this._e = new _0x3819e1.Wj();
              this.Xj = new _0x3819e1.Yj();
              this.Zj = new _0x3819e1.$j();
              this._j = new _0x3819e1.ak();
              this.bk = new _0x3819e1.ck();
              this.dk = new _0x3819e1.ek();
              this.fk = new _0x3819e1.gk();
              this.$h = new _0x3819e1.hk();
              this.ik = new _0x3819e1.jk();
              this.kk = new _0x3819e1.lk();
              this.mk = new _0x3819e1.nk();
              this.ok = new _0x3819e1.pk();
              this.qk = new _0x3819e1.rk();
              this.ie = new _0x3819e1.sk();
              this.tk = new _0x3819e1.uk();
              this.vk = new _0x3819e1.wk();
              this.xk = new _0x3819e1.yk();
              this.zk = [];
            }
            function _0x4e79f9(_0x14e832, _0x437930) {
              if (_0x437930 !== 0) {
                var _0x1e97bc = _0x14e832[_0x437930];
                _0x36bffa.T(_0x14e832, 0, 1, _0x437930);
                _0x14e832[0] = _0x1e97bc;
              }
            }
            function _0x162106(_0x323116, _0xa1719) {
              if (_0xa1719 !== _0x323116.length + 1) {
                var _0x5c07da = _0x323116[_0xa1719];
                _0x36bffa.T(_0x323116, _0xa1719 + 1, _0xa1719, _0x323116.length - _0xa1719 - 1);
                _0x323116[_0x323116.length - 1] = _0x5c07da;
              }
            }
            function _0x507d19(_0x3cec0b, _0x20f27d) {
              for (var _0x73117c = 0; _0x73117c < _0x3cec0b.length; _0x73117c++) {
                if (_0x3cec0b[_0x73117c] === _0x20f27d) {
                  return _0x73117c;
                }
              }
              return -1;
            }
            _0x18eaae.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var _0xef6878 = 0; _0xef6878 < this.zk.length; _0xef6878++) {
                this.zk[_0xef6878].ha();
              }
            };
            _0x18eaae.prototype.lh = function (_0x56a293, _0x27431a) {
              for (var _0x4b2b7c = this.zk.length - 1; _0x4b2b7c >= 0; _0x4b2b7c--) {
                this.zk[_0x4b2b7c].Nf(_0x56a293, _0x27431a);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(_0x56a293, _0x27431a);
              }
            };
            _0x18eaae.prototype.Jf = function () {
              for (var _0x49b1f6 = this.zk.length - 1; _0x49b1f6 >= 0; _0x49b1f6--) {
                this.zk[_0x49b1f6].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            _0x18eaae.prototype.Ak = function (_0x32ba39) {
              var _0x453ab0 = _0x507d19(this.zk, _0x32ba39);
              if (!(_0x453ab0 < 0)) {
                this.zk[0].Bk();
                _0x4e79f9(this.zk, _0x453ab0);
                this.Ck();
              }
            };
            _0x18eaae.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                _0x162106(this.zk, 0);
              } while (this.zk[0].nd !== _0x3819e1.Fk.Ek);
              this.Ck();
            };
            _0x18eaae.prototype.Ck = function () {
              var _0x17ad11 = this.zk[0];
              _0x17ad11.Gk();
              _0x17ad11.Hk();
              this.Ik();
            };
            _0x18eaae.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === _0x3819e1.Fk.Ek && this.qk.Kk();
            };
            _0x18eaae.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            _0x18eaae.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return _0x18eaae;
          }();
          _0x3819e1.Pi = function () {
            function _0x330f12() {
              this.Ch = [];
              this.zh = [];
            }
            _0x330f12.Qi = function (_0x111f0b, _0x27d743) {
              return {
                Dh: _0x111f0b,
                Bh: _0x27d743
              };
            };
            _0x330f12.Ri = function (_0x4b3cc4, _0x7545eb) {
              return {
                Ah: _0x4b3cc4,
                Bh: _0x7545eb
              };
            };
            return _0x330f12;
          }();
          _0x3819e1.Mk = function () {
            function _0xc8518f() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = _0x194e13;
              this.Rk = {};
            }
            var _0x194e13 = "guest";
            _0xc8518f.Sk = new (function () {
              function _0xaad09b() {}
              _0xaad09b.Tk = function () {
                function _0x3c9acb(_0x4df706) {
                  this.Uk = _0x4df706;
                }
                return _0x3c9acb;
              }();
              _0xaad09b.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              _0xaad09b.prototype.Wk = function (_0x5226f7, _0x2e6493, _0x396c2e) {
                var _0x5b40dd = "https://graph.facebook.com/me?access_token=" + _0x5226f7;
                $.get(_0x5b40dd).fail(function () {
                  _0x2e6493();
                }).done(function () {
                  _0x396c2e();
                });
              };
              _0xaad09b.prototype.Xk = function (_0x3c2af0, _0x1fc047) {
                if (!this.Vk()) {
                  _0x3c2af0();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (_0x42c770) {
                    if (_0x42c770.status !== "connected") {
                      _0x3c2af0();
                      return;
                    }
                    var _0x1fd32e = _0x42c770.authResponse.accessToken;
                    _0x1fc047(new _0xaad09b.Tk(_0x1fd32e));
                  });
                }, function (_0x574887) {
                  _0x1fc047(_0x574887);
                });
              };
              _0xaad09b.prototype.Yk = function (_0x4a2684, _0x12b1c5) {
                var _0x1ea723 = this;
                if (!this.Vk()) {
                  _0x4a2684();
                  return;
                }
                FB.getLoginStatus(function (_0x205c5a) {
                  if (_0x205c5a.status !== "connected") {
                    _0x4a2684();
                    return;
                  }
                  var _0x11bf79 = _0x205c5a.authResponse.accessToken;
                  _0x1ea723.Wk(_0x11bf79, function () {
                    _0x4a2684();
                  }, function () {
                    _0x12b1c5(new _0xaad09b.Tk(_0x11bf79));
                  });
                });
              };
              _0xaad09b.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return _0xaad09b;
            }())();
            _0xc8518f.$k = new (function () {
              function _0x5809b3() {}
              _0x5809b3._k = function () {
                function _0x2ebc85(_0x2e84a2, _0x1e2ec9) {
                  this.Uk = _0x2e84a2;
                  this.al = _0x1e2ec9;
                }
                return _0x2ebc85;
              }();
              _0x5809b3.prototype.Vk = function () {
                return typeof _0x3fa18c !== "undefined";
              };
              _0x5809b3.prototype.Xk = function (_0x3f0500, _0x7a4188) {
                if (typeof _0x3fa18c === "undefined") {
                  _0x3f0500();
                  return;
                }
                if (_0x3fa18c === undefined) {
                  _0x3f0500();
                  return;
                }
                _0x3fa18c.then(function () {
                  if (_0x3fa18c.isSignedIn.get()) {
                    var _0x586fbd = _0x3fa18c.currentUser.get();
                    var _0x575efd = _0x586fbd.getAuthResponse().id_token;
                    var _0x145128 = new Date().getTime() + _0x586fbd.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x145128) {
                      _0x7a4188(new _0x5809b3._k(_0x575efd, _0x145128));
                      return;
                    }
                  }
                  _0x3fa18c.signIn().then(function (_0x319708) {
                    if (typeof _0x319708.error !== "undefined") {
                      _0x3f0500();
                      return;
                    }
                    if (!_0x319708.isSignedIn()) {
                      _0x3f0500();
                      return;
                    }
                    var _0x11f1a0 = _0x319708.getAuthResponse().id_token;
                    var _0x397133 = new Date().getTime() + _0x319708.getAuthResponse().expires_in * 1000;
                    _0x7a4188(new _0x5809b3._k(_0x11f1a0, _0x397133));
                  });
                });
              };
              _0x5809b3.prototype.Yk = function (_0xa49019, _0xcae42f) {
                if (_0x3fa18c === undefined) {
                  _0xa49019();
                  return;
                }
                _0x3fa18c.then(function () {
                  if (_0x3fa18c.isSignedIn.get()) {
                    var _0x4d7378 = _0x3fa18c.currentUser.get();
                    var _0x3cb1b3 = _0x4d7378.getAuthResponse().id_token;
                    var _0x5193dd = new Date().getTime() + _0x4d7378.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x5193dd) {
                      _0xcae42f(new _0x5809b3._k(_0x3cb1b3, _0x5193dd));
                      return;
                    }
                  }
                  _0xa49019();
                });
              };
              _0x5809b3.prototype.Zk = function () {
                if (_0x3fa18c !== undefined) {
                  _0x3fa18c.signOut();
                }
              };
              return _0x5809b3;
            }())();
            _0xc8518f.prototype.ha = function () {
              this.bl();
            };
            _0xc8518f.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, _0x4ac6e2);
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            _0xc8518f.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            _0xc8518f.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            _0xc8518f.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            _0xc8518f.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            _0xc8518f.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            _0xc8518f.prototype.yl = function (_0x4267a7) {
              this.Nk.push(_0x4267a7);
              _0x4267a7();
            };
            _0xc8518f.prototype.zl = function (_0x15e462) {
              this.Ok.push(_0x15e462);
              _0x15e462();
            };
            _0xc8518f.prototype.Lj = function (_0x2fb2d7, _0x1c92a7) {
              var _0x48d186 = this.Rk.propertyList;
              if (_0x48d186 == null) {
                return false;
              }
              var _0x1601b6 = _0x2fb2d7.toString();
              for (var _0x2fe38d = 0; _0x2fe38d < _0x48d186.length; _0x2fe38d++) {
                var _0xfb9951 = _0x48d186[_0x2fe38d];
                if (_0xfb9951.id === _0x1601b6 && _0xfb9951.type === _0x1c92a7) {
                  return true;
                }
              }
              return false;
            };
            _0xc8518f.prototype.Hj = function () {
              return this.Pk;
            };
            _0xc8518f.prototype.Al = function () {
              return this.Qk;
            };
            _0xc8518f.prototype.Bl = function (_0x3d4c1d) {
              var _0x1ff883 = this;
              var _0x2d6c54 = this.cl();
              var _0x5698bb = this.il();
              var _0x5e1c19 = this.jl();
              this.Cl(function () {
                if (_0x3d4c1d != null) {
                  _0x3d4c1d();
                }
              }, function (_0x1da3ba) {
                _0x5d5bc0(_0x1da3ba.user_data);
                _0x1ff883.Rk = _0x1da3ba.user_data;
                _0x1ff883.Dl();
                _0x1ff883.Rk.isConsentGiven = true;
                var _0x22ce34 = _0x1ff883.cl();
                var _0x3fe952 = _0x1ff883.il();
                var _0x7652e0 = _0x1ff883.jl();
                if (_0x2d6c54 === _0x22ce34) {
                  if (_0x7652e0 > 1 && _0x7652e0 !== _0x5e1c19) {
                    _0x4b2cbe().og.qk.El(new _0x3819e1.Fl(currLevel));
                  }
                  var _0x57eeec = _0x3fe952 - _0x5698bb;
                  if (_0x57eeec >= 20) {
                    _0x4b2cbe().og.qk.El(new _0x3819e1.Gl(_0x57eeec));
                  }
                }
                if (_0x3d4c1d != null) {
                  _0x3d4c1d();
                }
              });
            };
            _0xc8518f.prototype.Cl = function (_0xf0a81f, _0x30d270) {
              var _0x16c510 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              bbs.wuid = this.Qk;
              _0x36bffa.Z(_0x16c510, _0xf0a81f, function (_0x1c2c7d) {
                if (_0x1c2c7d.code !== 1200) {
                  _0xf0a81f();
                } else {
                  _0x30d270(_0x1c2c7d);
                }
              });
            };
            _0xc8518f.prototype.Hl = function (_0x3851bb, _0x49745d, _0x6b7234, _0x4096ef) {
              var _0x57afa1 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x3851bb + "&type=" + _0x49745d;
              _0x36bffa.Z(_0x57afa1, function () {
                _0x6b7234();
              }, function (_0x10b609) {
                if (_0x10b609.code !== 1200) {
                  _0x6b7234();
                } else {
                  _0x4096ef(_0x10b609);
                }
              });
            };
            _0xc8518f.prototype.Il = function (_0x349e02, _0x43ec05) {
              var _0x2f82b1 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              _0x36bffa.Z(_0x2f82b1, _0x349e02, function (_0x1b261f) {
                if (_0x1b261f.code !== 1200) {
                  _0x349e02();
                } else {
                  _0x43ec05(_0x1b261f);
                }
              });
            };
            _0xc8518f.prototype.Jl = function (_0x3e1de1) {
              var _0x4e6e75 = this;
              if (this.Pk) {
                this.Kl();
              }
              _0xc8518f.Sk.Xk(function () {
                _0x3e1de1();
              }, function (_0x33b6a6) {
                _0x4e6e75.Ll("fb", _0x33b6a6.Uk, _0x3e1de1);
              });
            };
            _0xc8518f.prototype.Ml = function (_0x34c700) {
              var _0x4a433a = this;
              if (this.Pk) {
                this.Kl();
              }
              _0xc8518f.$k.Xk(function () {
                _0x34c700();
              }, function (_0x1be488) {
                _0x4a433a.Ll("gg", _0x1be488.Uk, _0x34c700);
              });
            };
            _0xc8518f.prototype.Ll = function (_0x51dbdc, _0x2226ec, _0x5c2ec5, _0x90a5d1) {
              _0x90a5d1 = _0x90a5d1 || 0;
              var _0x23ed87 = $("#please-wait-view");
              if (_0x90a5d1 < 1) {
                _0x23ed87.append(" AUTO CONNECTION <i id=\"auto_connection_text\">" + _0x90a5d1 + "<i>...");
              }
              var _0x3e9c0c = this;
              var _0x58c390 = _0x51dbdc + "_" + _0x2226ec;
              var _0x225e91 = "https://gateway.wormate.io/pub/wuid/" + _0x58c390 + "/login";
              bbs.wuid = _0x58c390;
              _0x90a5d1++;
              _0x23ed87.fadeIn(500);
              $("#auto_connection_text").html(_0x90a5d1);
              fetch(_0x225e91, {
                mode: "cors"
              }).then(function (_0x2bc7dd) {
                if (_0x2bc7dd.ok) {
                  return _0x2bc7dd.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (_0x1b5e29) {
                if (_0x1b5e29.code !== 1200) {
                  _0x3e9c0c.Ll(_0x51dbdc, _0x2226ec, _0x5c2ec5, _0x90a5d1);
                  return;
                }
                if (_0x1b5e29.user_data) {
                  _0x23ed87.html("...");
                  _0x23ed87.fadeOut(500);
                  _0x3e9c0c.Ol(_0x51dbdc, _0x2226ec, _0x1b5e29.user_data);
                  if (_0x5c2ec5 != null) {
                    _0x5c2ec5();
                  }
                }
              }).catch(function (_0xa2c9e3) {
                _0x3e9c0c.Nl();
                _0x23ed87.html("...");
                _0x23ed87.fadeOut(500);
              });
            };
            _0xc8518f.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (_0x549aec) {}
              this.Rl();
            };
            _0xc8518f.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (_0x268877) {});
              }
            };
            _0xc8518f.prototype.Nl = function () {
              _0x4b2cbe().og.Ak(_0x4b2cbe().og.tk);
            };
            _0xc8518f.prototype.Ol = function (_0x5939ce, _0x2c2782, _0x49e7e1) {
              var _0x1662aa = this;
              var _0x4c2314 = this.Pk ? this.Rk.userId : "guest";
              _0x43a937(_0x49e7e1, function (_0x40356e) {
                _0x5d5bc0(_0x40356e);
                _0x1662aa.Pk = true;
                _0x1662aa.Qk = _0x5939ce + "_" + _0x2c2782;
                _0x1662aa.Rk = _0x40356e;
                bbs.wuid = _0x1662aa.Qk;
                _0x3819e1.Vf.eg(_0x3819e1.Vf.$f, _0x5939ce, 60);
                if (_0x4c2314 !== _0x1662aa.Rk.userId) {
                  _0x1662aa.Tl();
                } else {
                  _0x1662aa.Dl();
                }
                window.bbs.loading = false;
              });
            };
            _0xc8518f.prototype.Rl = function () {
              var _0x105585 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = _0x194e13;
              this.Rk = {};
              _0x3819e1.Vf.eg(_0x3819e1.Vf.$f, "", 60);
              if (_0x105585 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            _0xc8518f.prototype.bl = function () {
              var _0x353255 = _0x3819e1.Vf.fg(_0x3819e1.Vf.$f);
              var _0x4855d6 = this;
              if (_0x353255 === "fb") {
                var _0x20a69e = 1;
                (function _0x27f0d5() {
                  if (!_0xc8518f.Sk.Vk() && _0x20a69e++ < 5) {
                    setTimeout(_0x27f0d5, 1000);
                    return;
                  }
                  _0xc8518f.Sk.Yk(function () {}, function (_0x4d6be6) {
                    _0x4855d6.Ll("fb", _0x4d6be6.Uk);
                  });
                })();
              } else if (_0x353255 === "gg") {
                var _0x169117 = 1;
                (function _0x1ed979() {
                  if (!_0xc8518f.$k.Vk() && _0x169117++ < 5) {
                    setTimeout(_0x1ed979, 1000);
                    return;
                  }
                  _0xc8518f.$k.Yk(function () {}, function (_0x3f60e8) {
                    _0x4855d6.Ll("gg", _0x3f60e8.Uk);
                  });
                })();
              }
            };
            _0xc8518f.prototype.Tl = function () {
              for (var _0x4af2a1 = 0; _0x4af2a1 < this.Nk.length; _0x4af2a1++) {
                this.Nk[_0x4af2a1]();
              }
              this.Dl();
            };
            _0xc8518f.prototype.Dl = function () {
              for (var _0x3e354f = 0; _0x3e354f < this.Ok.length; _0x3e354f++) {
                this.Ok[_0x3e354f]();
              }
            };
            _0xc8518f.prototype.Pl = function () {
              _0xc8518f.Sk.Zk();
            };
            _0xc8518f.prototype.Ql = function () {
              _0xc8518f.$k.Zk();
            };
            return _0xc8518f;
          }();
          _0x3819e1.if = function () {
            function _0x3f36a6(_0x167dd4, _0x30e02c, _0x233693) {
              this.ef = _0x233693;
              this.hd = false;
              this.nc = new _0x4efbaa.Container();
              this.nc.visible = false;
              this.Ul = new Array(_0x167dd4);
              for (var _0x1fc6a1 = 0; _0x1fc6a1 < this.Ul.length; _0x1fc6a1++) {
                var _0x39d224 = new _0x3819e1.Vl(new Float32Array(_0x30e02c * 3));
                _0x39d224.Wl(_0x30e02c);
                this.Ul[_0x1fc6a1] = _0x39d224;
                this.nc.addChild(_0x39d224.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            _0x3f36a6.prototype.tf = function () {
              return this.nc;
            };
            _0x3f36a6.prototype.Kf = function (_0x31b7e7) {
              this.hd = _0x31b7e7;
              this.nc.visible = _0x31b7e7;
            };
            _0x3f36a6.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var _0x3edb = this.gf / 30;
              for (var _0x2b8e45 = 0; _0x2b8e45 < this.Ul.length; _0x2b8e45++) {
                this.Ul[_0x2b8e45].Xl(_0x3edb);
              }
            };
            _0x3f36a6.prototype.Uf = function () {
              if (this.hd) {
                for (var _0xf1cc4f = 0; _0xf1cc4f < this.Ul.length; _0xf1cc4f++) {
                  this.Ul[_0xf1cc4f].Uf(this.lf);
                }
              }
            };
            _0x3f36a6.prototype.Yl = function () {
              return this.ff;
            };
            _0x3f36a6.prototype.Zl = function () {
              return this.gf;
            };
            _0x3f36a6.prototype.Qf = function (_0x3d8646, _0x102cc5) {
              this.Ul[_0x3d8646].$l(_0x102cc5);
            };
            _0x3f36a6.prototype.Rf = function (_0x4a92f5, _0x20a4ac) {
              this.Ul[_0x4a92f5]._l(_0x20a4ac);
            };
            _0x3f36a6.prototype.Sf = function (_0x18a32a, _0x247627, _0x27f37d) {
              var _0x41ee43 = this.Ul[_0x18a32a];
              for (var _0x2299d4 = _0x41ee43.am(), _0x2b90fe = _0x41ee43.bm, _0x95a348 = 0; _0x95a348 < _0x2299d4; _0x95a348++) {
                _0x2b90fe[_0x95a348 * 3] = _0x247627;
                _0x2b90fe[_0x95a348 * 3 + 1] = _0x27f37d;
                _0x2b90fe[_0x95a348 * 3 + 2] = 0;
              }
            };
            _0x3f36a6.prototype.Tf = function (_0x617c60, _0x511cca, _0x5585e7) {
              var _0x2d3690 = this.Ul[_0x617c60];
              var _0x183ecc = _0x2d3690.am();
              var _0x461c54 = _0x2d3690.bm;
              var _0x543013 = _0x2d3690.cm();
              var _0x21bcbe = _0x461c54[0];
              var _0x3f9e88 = undefined;
              var _0xdc906e = _0x461c54[1];
              var _0x8a4b32 = undefined;
              var _0x35ffa2 = _0x511cca - _0x21bcbe;
              var _0x222e2d = _0x5585e7 - _0xdc906e;
              var _0x1b9dc9 = Math.hypot(_0x35ffa2, _0x222e2d);
              if (_0x1b9dc9 > 0) {
                _0x461c54[0] = _0x511cca;
                _0x461c54[1] = _0x5585e7;
                _0x461c54[2] = Math.atan2(_0x222e2d, _0x35ffa2);
                var _0xcd0d0b = _0x543013 * 0.25 / (_0x543013 * 0.25 + _0x1b9dc9);
                var _0x16f518 = 1 - _0xcd0d0b * 2;
                for (var _0x372832 = 1, _0x53a7fe = _0x183ecc; _0x372832 < _0x53a7fe; _0x372832++) {
                  _0x3f9e88 = _0x461c54[_0x372832 * 3];
                  _0x461c54[_0x372832 * 3] = _0x461c54[_0x372832 * 3 - 3] * _0x16f518 + (_0x3f9e88 + _0x21bcbe) * _0xcd0d0b;
                  _0x21bcbe = _0x3f9e88;
                  _0x8a4b32 = _0x461c54[_0x372832 * 3 + 1];
                  _0x461c54[_0x372832 * 3 + 1] = _0x461c54[_0x372832 * 3 - 2] * _0x16f518 + (_0x8a4b32 + _0xdc906e) * _0xcd0d0b;
                  _0xdc906e = _0x8a4b32;
                  _0x461c54[_0x372832 * 3 + 2] = Math.atan2(_0x461c54[_0x372832 * 3 - 2] - _0x461c54[_0x372832 * 3 + 1], _0x461c54[_0x372832 * 3 - 3] - _0x461c54[_0x372832 * 3]);
                }
              }
            };
            return _0x3f36a6;
          }();
          _0x3819e1.dm = function () {
            function _0x1a4bb3(_0x4532cd) {
              var _0x1a280c = this;
              this.ef = _0x4532cd;
              this.Eb = _0x4532cd.get()[0];
              this.lf = new _0x4efbaa.Renderer({
                view: _0x4532cd.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new _0x3819e1.Vl(new Float32Array(_0x7a0bbd * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
              this.Jf();
              _0x4b2cbe().Lc.$b(function () {
                _0x1a280c.em.lm();
              });
            }
            var _0x7a0bbd = Math.min(100, _0x3819e1.WormSpriteTree.wc);
            var _0x2d130e = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            _0x1a4bb3.prototype.Kf = function (_0x273c51) {
              this.hd = _0x273c51;
            };
            _0x1a4bb3.prototype.Jf = function () {
              var _0x1eccfa = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x1eccfa;
              this.Eb.width = _0x1eccfa * this.ff;
              this.Eb.height = _0x1eccfa * this.gf;
              var _0x55a517 = this.gf / 4;
              this.em.Xl(_0x55a517);
              var _0x52c1dc = _0x36bffa.P(Math.floor(this.ff / _0x55a517) * 2 - 5, 1, _0x7a0bbd);
              this.em.Wl(_0x52c1dc);
            };
            _0x1a4bb3.prototype.Nf = function () {
              if (this.hd) {
                var _0x24f1cf = Date.now();
                var _0x364bb1 = _0x24f1cf / 200;
                var _0x185f84 = Math.sin(_0x364bb1);
                this.em.om(this.pm(this.fm, _0x185f84), this.qm(this.fm, _0x185f84));
                this.em.rm(this.sm(this.hm, _0x185f84), this.sm(this.im, _0x185f84), this.sm(this.jm, _0x185f84), this.sm(this.km, _0x185f84));
                var _0x28b663 = this.em.cm();
                for (var _0x30a9eb = this.em.am(), _0x49d61d = this.em.bm, _0x3c43b3 = this.ff - (this.ff - _0x28b663 * 0.5 * (_0x30a9eb - 1)) * 0.5, _0x28541a = this.gf * 0.5, _0xc50291 = 0, _0x8da5d2 = 0, _0x1a1d56 = -1; _0x1a1d56 < _0x30a9eb; _0x1a1d56++) {
                  var _0x34f69a = _0x1a1d56;
                  var _0x109154 = Math.cos(_0x34f69a * 1 / 12 * Math.PI - _0x364bb1) * (1 - Math.pow(16, _0x34f69a * -1 / 12));
                  if (_0x1a1d56 >= 0) {
                    _0x49d61d[_0x1a1d56 * 3] = _0x3c43b3 + _0x28b663 * -0.5 * _0x34f69a;
                    _0x49d61d[_0x1a1d56 * 3 + 1] = _0x28541a + _0x28b663 * 0.5 * _0x109154;
                    _0x49d61d[_0x1a1d56 * 3 + 2] = Math.atan2(_0x8da5d2 - _0x109154, _0x34f69a - _0xc50291);
                  }
                  _0xc50291 = _0x34f69a;
                  _0x8da5d2 = _0x109154;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            _0x1a4bb3.prototype.$l = function (_0x2319f3) {
              this.em.$l(_0x2319f3);
            };
            _0x1a4bb3.prototype.um = function (_0x5003fb) {
              this.fm = _0x5003fb ? _0x2d130e.nm : _0x2d130e.mm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.vm = function (_0x4b3a3f) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x4b3a3f ? _0x2d130e.nm : _0x2d130e.mm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.wm = function (_0x867e50) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x867e50 ? _0x2d130e.nm : _0x2d130e.mm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.xm = function (_0x357eef) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x357eef ? _0x2d130e.nm : _0x2d130e.mm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.ym = function (_0x227513) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x227513 ? _0x2d130e.nm : _0x2d130e.mm;
            };
            _0x1a4bb3.prototype.pm = function (_0x4e5dd7, _0x21bd72) {
              switch (_0x4e5dd7) {
                case _0x2d130e.mm:
                  return 0.9 + _0x21bd72 * 0.1;
                case _0x2d130e.nm:
                  return 0.4 + _0x21bd72 * 0.3;
              }
              return 1;
            };
            _0x1a4bb3.prototype.qm = function (_0x7a8424, _0x59965b) {
              switch (_0x7a8424) {
                case _0x2d130e.mm:
                  return 0.6 + _0x59965b * 0.5;
                case _0x2d130e.nm:
                  return 0.3 + _0x59965b * 0.3;
              }
              return 1;
            };
            _0x1a4bb3.prototype.sm = function (_0x5049d0, _0x63802b) {
              switch (_0x5049d0) {
                case _0x2d130e.mm:
                  return 0.9 + _0x63802b * 0.1;
                case _0x2d130e.nm:
                  return 0.6 + _0x63802b * 0.4;
              }
              return 1;
            };
            return _0x1a4bb3;
          }();
          _0x3819e1.Oj = function () {
            function _0x51b22a(_0x1b41e0, _0x30fae9, _0x5f0176, _0x1db7b4, _0xe358a4) {
              this.zm = _0x1b41e0;
              this.Am = _0x30fae9;
              this.Bm = _0x5f0176;
              this.Cm = _0x1db7b4;
              this.Dm = _0xe358a4;
            }
            _0x51b22a.Nj = function (_0x41e1ef) {
              return new _0x51b22a(_0x41e1ef.price, _0x41e1ef.guest, _0x41e1ef.nonbuyable, _0x41e1ef.nonbuyableCause, _0x41e1ef.description || _0x41e1ef.refer?.texture || "SKIN NATIVE " + _0x41e1ef.id);
            };
            _0x51b22a.Pj = function (_0x4c8ad2) {
              return new _0x51b22a(_0x4c8ad2.price, _0x4c8ad2.guest, _0x4c8ad2.nonbuyable, _0x4c8ad2.nonbuyableCause, _0x4c8ad2.description);
            };
            _0x51b22a.prototype.Jj = function () {
              return this.zm;
            };
            _0x51b22a.prototype.Mj = function () {
              return this.Am;
            };
            _0x51b22a.prototype.Kj = function () {
              return this.Bm;
            };
            _0x51b22a.prototype.Em = function () {
              return this.Cm;
            };
            _0x51b22a.prototype.Fm = function () {
              return this.Dm;
            };
            return _0x51b22a;
          }();
          _0x3819e1.qf = function () {
            function _0x3048ef(_0x597d58) {
              this.Gm = {};
              this.Gm[_0x385270] = _0x597d58;
              var _0x17746d = _0x4efbaa.Shader.from(_0x5f0075, _0x218781, this.Gm);
              this.sf = new _0x4efbaa.Mesh(_0xa3e6a6, _0x17746d);
              this.sf.blendMode = _0x4efbaa.v.B;
            }
            var _0x43f68c = "a1_" + _0x36bffa.X();
            var _0x2c5d46 = "a2_" + _0x36bffa.X();
            var _0x385270 = "u3_" + _0x36bffa.X();
            var _0x1960b4 = "u4_" + _0x36bffa.X();
            var _0x36c042 = "v1_" + _0x36bffa.X();
            var _0xa3e6a6 = new _0x4efbaa.Geometry().addAttribute(_0x43f68c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x2c5d46, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var _0x5f0075 = "precision mediump float;attribute vec2 " + _0x43f68c + ";attribute vec2 " + _0x2c5d46 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0x1960b4 + ";varying vec2 " + _0x36c042 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x43f68c + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x1960b4 + ";vec2 uv=" + _0x2c5d46 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x36c042 + "=uv;}";
            var _0x218781 = "precision highp float;varying vec2 " + _0x36c042 + ";uniform sampler2D " + _0x385270 + ";void main(){gl_FragColor=texture2D(" + _0x385270 + "," + _0x36c042 + ");}";
            _0x3048ef.prototype.Mf = function (_0x3589d0, _0x32c886) {
              this.sf.scale.x = _0x3589d0;
              this.sf.scale.y = _0x32c886;
              this.Gm[_0x1960b4] = [_0x3589d0, _0x32c886, 1 / _0x3589d0 + 1, 1 / _0x32c886 + 1];
            };
            return _0x3048ef;
          }();
          _0x3819e1.WMGBS1 = function () {
            function _0x3c3a3f(_0x8e9fb3) {
              var _0x23622b = bbs.bgGameWidth || 1;
              var _0x17c721 = bbs.bgGameHeight || 1;
              var _0x10f001 = 1100;
              var _0x553768 = _0x23622b > 512 ? _0x23622b >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[_0x10c6a5] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0x4b7c97] = _0x4efbaa.Texture.WHITE;
              this.Gm[_0xb0195b] = [0, 0];
              this.Gm[_0x481596] = [0, 0];
              this.sf = new PIXI.TilingSprite(_0x8e9fb3 || _0x3c7638.xe._g, _0x553768 == 1 ? _0x10f001 : 120000, _0x553768 == 1 ? _0x10f001 : 120000);
              this.sf.scale.x = _0x553768;
              this.sf.scale.y = _0x553768;
              this.sf.position.x = -(_0x553768 == 1 ? _0x23622b / 2 : 625);
              this.sf.position.y = -(_0x553768 == 1 ? _0x17c721 / 2 : 625);
              console.log("WMGBS1", _0x23622b, _0x17c721);
            }
            var _0x10c6a5 = "u3_";
            var _0x4b7c97 = "u4_";
            var _0xb0195b = "u5_";
            var _0x481596 = "u6_";
            _0x3c3a3f.prototype.Ec = function (_0x41d15c, _0x5d66b5, _0x30745c, _0x37594c) {
              var _0x333acf = this.Gm[_0x10c6a5];
              _0x333acf[0] = _0x41d15c;
              _0x333acf[1] = _0x5d66b5;
              _0x333acf[2] = _0x30745c;
              _0x333acf[3] = _0x37594c;
            };
            _0x3c3a3f.prototype.$g = function (_0x4842b4) {
              this.Gm[_0x4b7c97] = _0x4842b4;
            };
            _0x3c3a3f.prototype.Uf = function (_0x32ba07, _0x3de19d, _0x51d48c, _0xd23380) {};
            return _0x3c3a3f;
          }();
          _0x3819e1.WMGBS2 = function () {
            console.log("WMGBS2");
            function _0x1ccd66() {
              this.Gm = {};
              this.Gm[_0x468132] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0x24db59] = _0x4efbaa.Texture.WHITE;
              this.Gm[_0x7aba59] = [0, 0];
              this.Gm[_0x247e20] = [0, 0];
              var _0x4291ae = _0x4efbaa.Shader.from(_0x5e94e3, _0x1eca04, this.Gm);
              this.sf = new _0x4efbaa.Mesh(_0x38144b, _0x4291ae);
            }
            var _0x23e980 = "a1_" + _0x36bffa.X();
            var _0x2ca798 = "a2_" + _0x36bffa.X();
            var _0x43f9ed = "translationMatrix";
            var _0x3583e1 = "projectionMatrix";
            var _0x468132 = "u3_" + _0x36bffa.X();
            var _0x24db59 = "u4_" + _0x36bffa.X();
            var _0x7aba59 = "u5_" + _0x36bffa.X();
            var _0x247e20 = "u6_" + _0x36bffa.X();
            var _0x3c37ea = "v1_" + _0x36bffa.X();
            var _0x38144b = new _0x4efbaa.Geometry().addAttribute(_0x23e980, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x2ca798, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var _0x5e94e3 = "precision mediump float;attribute vec2 " + _0x23e980 + ";attribute vec2 " + _0x2ca798 + ";uniform mat3 " + _0x43f9ed + ";uniform mat3 " + _0x3583e1 + ";varying vec2 " + _0x3c37ea + ";void main(){" + _0x3c37ea + "=" + _0x2ca798 + ";gl_Position=vec4((" + _0x3583e1 + "*" + _0x43f9ed + "*vec3(" + _0x23e980 + ",1.0)).xy,0.0,1.0);}";
            var _0x1eca04 = "precision highp float;varying vec2 " + _0x3c37ea + ";uniform vec4 " + _0x468132 + ";uniform sampler2D " + _0x24db59 + ";uniform vec2 " + _0x7aba59 + ";uniform vec2 " + _0x247e20 + ";void main(){vec2 coord=" + _0x3c37ea + "*" + _0x7aba59 + "+" + _0x247e20 + ";vec4 v_color_mix=" + _0x468132 + ";gl_FragColor=texture2D(" + _0x24db59 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            _0x1ccd66.prototype.Ec = function (_0x112b68, _0x4c807b, _0x242f38, _0x3b43a0) {
              var _0x4c8fdd = this.Gm[_0x468132];
              _0x4c8fdd[0] = _0x112b68;
              _0x4c8fdd[1] = _0x4c807b;
              _0x4c8fdd[2] = _0x242f38;
              _0x4c8fdd[3] = _0x3b43a0;
            };
            _0x1ccd66.prototype.$g = function (_0x29e478) {
              this.Gm[_0x24db59] = _0x29e478;
            };
            _0x1ccd66.prototype.Uf = function (_0x4bedbd, _0x5343b7, _0x229c41, _0x2ecb1b) {
              this.sf.position.x = _0x4bedbd;
              this.sf.position.y = _0x5343b7;
              this.sf.scale.x = _0x229c41;
              this.sf.scale.y = _0x2ecb1b;
              var _0x131454 = this.Gm[_0x7aba59];
              _0x131454[0] = _0x229c41 * 0.2520615384615385;
              _0x131454[1] = _0x2ecb1b * 0.4357063736263738;
              var _0x24bfeb = this.Gm[_0x247e20];
              _0x24bfeb[0] = _0x4bedbd * 0.2520615384615385;
              _0x24bfeb[1] = _0x5343b7 * 0.4357063736263738;
            };
            return _0x1ccd66;
          }();
          _0x3819e1.sc = function () {
            function _0x637c7e() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            _0x637c7e.prototype.Bc = function (_0x54cdb5, _0x9368f3, _0x1c782a) {
              if (_0x54cdb5) {
                this.xc.texture = _0x54cdb5.Ea();
                this.xc.anchor.set(_0x54cdb5.ya, _0x54cdb5.za);
                this.Hm = _0x54cdb5.Aa;
                this.Im = _0x54cdb5.Ba;
              } else {}
            };
            _0x637c7e.prototype.Ec = function (_0xe89718) {
              this.xc.tint = parseInt(_0xe89718.substring(1), 16);
            };
            _0x637c7e.prototype.Tc = function (_0x14859f) {
              try {
                this.xc.width = _0x14859f * this.Hm;
                this.xc.height = _0x14859f * this.Im;
              } catch (_0x2952d7) {}
            };
            _0x637c7e.prototype.md = function (_0x30b81f) {
              this.xc.rotation = _0x30b81f;
            };
            _0x637c7e.prototype.ld = function (_0x4c50f9, _0x1864ce) {
              this.xc.position.set(_0x4c50f9, _0x1864ce);
            };
            _0x637c7e.prototype.kd = function (_0x5b2a3e) {
              this.xc.visible = _0x5b2a3e;
            };
            _0x637c7e.prototype.gd = function () {
              return this.xc.visible;
            };
            _0x637c7e.prototype.jj = function (_0x4a5e57) {
              this.xc.alpha = _0x4a5e57;
            };
            _0x637c7e.prototype.Qc = function () {
              return this.xc;
            };
            _0x637c7e.prototype.Rc = function () {
              _0x36bffa.U(this.xc);
            };
            return _0x637c7e;
          }();
          _0x3819e1.Worm = function () {
            function _0x564f14(_0x228bca) {
              this.hh = _0x228bca;
              this.Eh = new _0x3819e1.Worm.li();
              this.xi = false;
              this.wi = true;
              this.Xc = false;
              this.$c = 0;
              this.Jm = 0;
              this.dj = 1;
              this.bd = 0;
              this.Bh = 0;
              this.dd = {};
              this.ad = 0;
              this.Km = new Float32Array(_0x296569 * 2);
              this.Lm = new Float32Array(_0x296569 * 2);
              this._c = new Float32Array(_0x296569 * 2);
              this.Mm = null;
              this.Nm = null;
              this.Om = null;
              this.Pm();
            }
            var _0x296569 = 200;
            _0x564f14.prototype.si = function () {
              if (this.Nm != null) {
                _0x36bffa.U(this.Nm.nc);
              }
              if (this.Om != null) {
                _0x36bffa.U(this.Om);
              }
            };
            _0x564f14.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            _0x564f14.prototype.ri = function (_0x44c84f) {
              this.Eh = _0x44c84f;
              this.Qm(this.xi);
            };
            _0x564f14.prototype.kd = function (_0x5689d9) {
              var _0xaf8902 = this.xi;
              this.xi = _0x5689d9;
              this.Qm(_0xaf8902);
            };
            _0x564f14.prototype.zi = function (_0x11b2fd) {
              this.Bh = _0x11b2fd * 50;
              var _0x596da3 = _0x11b2fd;
              if (_0x11b2fd > this.hh.Ag) {
                _0x596da3 = Math.atan((_0x11b2fd - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var _0x3875c2 = Math.sqrt(Math.pow(_0x596da3 * 5, 0.707106781186548) * 4 + 25);
              var _0x1c54d4 = Math.min(_0x296569, Math.max(3, (_0x3875c2 - 5) * 5 + 1));
              var _0x98ccbe = this.ad;
              this.$c = (5 + _0x3875c2 * 0.9) * 0.025;
              this.ad = Math.floor(_0x1c54d4);
              this.Jm = _0x1c54d4 - this.ad;
              if (_0x98ccbe > 0 && _0x98ccbe < this.ad) {
                var _0x30fc0a = this.Km[_0x98ccbe * 2 - 2];
                var _0xe9200b = this.Km[_0x98ccbe * 2 - 1];
                var _0x49c94f = this.Lm[_0x98ccbe * 2 - 2];
                var _0x3c5587 = this.Lm[_0x98ccbe * 2 - 1];
                var _0x430bd0 = this._c[_0x98ccbe * 2 - 2];
                var _0x37dd33 = this._c[_0x98ccbe * 2 - 1];
                for (var _0x52563f = _0x98ccbe; _0x52563f < this.ad; _0x52563f++) {
                  this.Km[_0x52563f * 2] = _0x30fc0a;
                  this.Km[_0x52563f * 2 + 1] = _0xe9200b;
                  this.Lm[_0x52563f * 2] = _0x49c94f;
                  this.Lm[_0x52563f * 2 + 1] = _0x3c5587;
                  this._c[_0x52563f * 2] = _0x430bd0;
                  this._c[_0x52563f * 2 + 1] = _0x37dd33;
                }
              }
            };
            _0x564f14.prototype.Ei = function (_0x306a99, _0x32603b) {
              this.ad = _0x32603b;
              for (var _0x1ff208 = 0; _0x1ff208 < this.ad; _0x1ff208++) {
                this.Km[_0x1ff208 * 2] = this.Lm[_0x1ff208 * 2] = this._c[_0x1ff208 * 2] = _0x306a99();
                this.Km[_0x1ff208 * 2 + 1] = this.Lm[_0x1ff208 * 2 + 1] = this._c[_0x1ff208 * 2 + 1] = _0x306a99();
              }
            };
            _0x564f14.prototype.Bi = function (_0x6179e0, _0x36f25b, _0x5a2a81) {
              this.Xc = _0x5a2a81;
              for (var _0x29d93a = 0; _0x29d93a < this.ad; _0x29d93a++) {
                this.Km[_0x29d93a * 2] = this.Lm[_0x29d93a * 2];
                this.Km[_0x29d93a * 2 + 1] = this.Lm[_0x29d93a * 2 + 1];
              }
              var _0x390643 = _0x6179e0 - this.Lm[0];
              var _0x88f69e = _0x36f25b - this.Lm[1];
              this.Rm(_0x390643, _0x88f69e, this.ad, this.Lm);
            };
            _0x564f14.prototype.Rm = function (_0x1f1473, _0xbc166e, _0xffe83d, _0x547a2b) {
              var _0xae32bc = Math.hypot(_0x1f1473, _0xbc166e);
              if (!(_0xae32bc <= 0)) {
                var _0x3b38b8 = _0x547a2b[0];
                var _0x4d718a = undefined;
                _0x547a2b[0] += _0x1f1473;
                var _0x33d285 = _0x547a2b[1];
                var _0x3e53e1 = undefined;
                _0x547a2b[1] += _0xbc166e;
                var _0x358fd9 = this.$c / (this.$c + _0xae32bc);
                var _0x246d2c = 1 - _0x358fd9 * 2;
                for (var _0x37b310 = 1, _0x2cd09d = _0xffe83d - 1; _0x37b310 < _0x2cd09d; _0x37b310++) {
                  _0x4d718a = _0x547a2b[_0x37b310 * 2];
                  _0x547a2b[_0x37b310 * 2] = _0x547a2b[_0x37b310 * 2 - 2] * _0x246d2c + (_0x4d718a + _0x3b38b8) * _0x358fd9;
                  _0x3b38b8 = _0x4d718a;
                  _0x3e53e1 = _0x547a2b[_0x37b310 * 2 + 1];
                  _0x547a2b[_0x37b310 * 2 + 1] = _0x547a2b[_0x37b310 * 2 - 1] * _0x246d2c + (_0x3e53e1 + _0x33d285) * _0x358fd9;
                  _0x33d285 = _0x3e53e1;
                }
                _0x358fd9 = this.Jm * this.$c / (this.Jm * this.$c + _0xae32bc);
                _0x246d2c = 1 - _0x358fd9 * 2;
                _0x547a2b[_0xffe83d * 2 - 2] = _0x547a2b[_0xffe83d * 2 - 4] * _0x246d2c + (_0x547a2b[_0xffe83d * 2 - 2] + _0x3b38b8) * _0x358fd9;
                _0x547a2b[_0xffe83d * 2 - 1] = _0x547a2b[_0xffe83d * 2 - 3] * _0x246d2c + (_0x547a2b[_0xffe83d * 2 - 1] + _0x33d285) * _0x358fd9;
              }
            };
            _0x564f14.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            _0x564f14.prototype.yi = function (_0x3dd1a5, _0x59c05e) {
              var _0x6c7014 = 1000000;
              var _0x2991f1 = _0x3dd1a5;
              var _0x2cf77d = _0x59c05e;
              for (var _0x33282f = 0; _0x33282f < this.ad; _0x33282f++) {
                var _0x4ee589 = this._c[_0x33282f * 2];
                var _0x3818eb = this._c[_0x33282f * 2 + 1];
                var _0x2cf62e = Math.hypot(_0x3dd1a5 - _0x4ee589, _0x59c05e - _0x3818eb);
                if (_0x2cf62e < _0x6c7014) {
                  _0x6c7014 = _0x2cf62e;
                  _0x2991f1 = _0x4ee589;
                  _0x2cf77d = _0x3818eb;
                }
              }
              return {
                x: _0x2991f1,
                y: _0x2cf77d,
                distance: _0x6c7014
              };
            };
            _0x564f14.prototype.ti = function (_0xd2e14b) {
              this.Mm = _0xd2e14b;
            };
            _0x564f14.prototype.hj = function (_0x2b86db, _0x542c37) {
              this.dj = _0x36bffa.Q(this.dj, this.wi ? 1 : 0, _0x542c37, 1 / 800);
              this.bd = _0x36bffa.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 0, _0x542c37, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            _0x564f14.prototype.ij = function (_0x3ab060, _0x37fa9d, _0x3f6ca1, _0x14e6ac) {
              if (this.xi && this.wi) {
                var _0x82536d = Math.pow(0.11112, _0x37fa9d / 95);
                for (var _0x4f9008 = 0; _0x4f9008 < this.ad; _0x4f9008++) {
                  this._c[_0x4f9008 * 2] = _0x36bffa.S(_0x36bffa.S(this.Km[_0x4f9008 * 2], this.Lm[_0x4f9008 * 2], _0x3f6ca1), this._c[_0x4f9008 * 2], _0x82536d);
                  this._c[_0x4f9008 * 2 + 1] = _0x36bffa.S(_0x36bffa.S(this.Km[_0x4f9008 * 2 + 1], this.Lm[_0x4f9008 * 2 + 1], _0x3f6ca1), this._c[_0x4f9008 * 2 + 1], _0x82536d);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, _0x3ab060, _0x37fa9d, _0x14e6ac);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            _0x564f14.prototype.Qm = function (_0x34dcc4) {
              if (this.xi) {
                if (!_0x34dcc4) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  _0x36bffa.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  _0x36bffa.U(this.Om);
                }
              }
            };
            _0x564f14.prototype.Sm = function () {
              var _0x23defe = _0x4b2cbe();
              this.Nm = this.Nm || new _0x3819e1.WormSpriteTree();
              _0x36bffa.U(this.Nm.nc);
              this.Nm.yc(_0x23defe.dh.hh.xg, _0x23defe.Lc.Ub().jb(this.Eh.Gh), _0x23defe.Lc.Ub().ib(this.Eh.Hh), _0x23defe.Lc.Ub().kb(this.Eh.ni), _0x23defe.Lc.Ub().lb(this.Eh.oi), _0x23defe.Lc.Ub().mb(this.Eh.pi), _0x23defe.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new _0x3819e1.Tm("");
              _0x36bffa.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
              this.Om.style.fill = bbs.enemyNameColor || _0x23defe.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.style.fontWeight = "bold";
              this.Om.text = _0x346984 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            _0x564f14.li = function () {
              function _0x156893() {
                this.ae = 0;
                this.Gh = _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return _0x156893;
            }();
            return _0x564f14;
          }();
          _0x3819e1.Tm = function () {
            return _0x36bffa.M(_0x4efbaa.Text, function (_0x3fc5bc, _0x2a1d89, _0x1630b6) {
              _0x4efbaa.Text.call(this, _0x3fc5bc, _0x2a1d89, _0x1630b6);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          _0x3819e1.hb = function () {
            function _0x43bd5f(_0x580a41, _0x55c5ac, _0x143fa9, _0xc9733e, _0x4de8db) {
              this.lj = _0x580a41;
              this.mj = _0x55c5ac;
              this.nj = _0x143fa9;
              this.oj = _0xc9733e;
              this.pj = _0x4de8db;
            }
            _0x43bd5f.prototype.Um = function (_0x2950fe) {
              return new _0x43bd5f(_0x2950fe, this.mj, this.nj, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Vm = function (_0xfdaaef) {
              return new _0x43bd5f(this.lj, _0xfdaaef, this.nj, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Wm = function (_0x1fb962) {
              return new _0x43bd5f(this.lj, this.mj, _0x1fb962, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Xm = function (_0x3d89e9) {
              return new _0x43bd5f(this.lj, this.mj, this.nj, _0x3d89e9, this.pj);
            };
            _0x43bd5f.prototype.Ym = function (_0x343a56) {
              return new _0x43bd5f(this.lj, this.mj, this.nj, this.oj, _0x343a56);
            };
            return _0x43bd5f;
          }();
          _0x3819e1.Vl = function () {
            function _0x47ec08(_0x18c52f) {
              this.Zm = new _0x3819e1.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = _0x18c52f;
              this.pc = 0;
              this.Gi = 1;
              this.an = 1;
              this.bn = 1;
              this.cn = 1;
              this.dn = 1;
              this.gn = 1;
              this.hn = 1;
              this._l("#ffffff");
            }
            var _0x4f372e = new _0x3819e1.hb(0, 0, 0, 0, 0);
            _0x47ec08.prototype.tf = function () {
              return this.Zm.nc;
            };
            _0x47ec08.prototype.Wl = function (_0x21bfd7) {
              this.pc = _0x21bfd7;
              if (this.Zm.pc !== _0x21bfd7) {
                for (var _0x319399 = _0x21bfd7; _0x319399 < this.Zm.qc.length; _0x319399++) {
                  this.Zm.qc[_0x319399].Uc();
                }
                while (this.Zm.pc > _0x21bfd7) {
                  this.Zm.pc -= 1;
                  var _0x14430e = this.Zm.qc[this.Zm.pc];
                  _0x14430e.Dc.Rc();
                  _0x14430e.Cc.Rc();
                }
                while (this.Zm.pc < _0x21bfd7) {
                  var _0x4ed58 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(_0x4ed58.Cc.Qc());
                  this.Zm.nc.addChild(_0x4ed58.Dc.Qc());
                  _0x4ed58.Cc.jj(this.an);
                  _0x4ed58.Dc.jj(this.bn);
                }
                for (var _0x2ebb96 = 0; _0x2ebb96 < this.Zm.oc.Fc.length; _0x2ebb96++) {
                  this.Zm.oc.Fc[_0x2ebb96].jj(this.cn);
                }
                for (var _0x191856 = 0; _0x191856 < this.Zm.oc.Gc.length; _0x191856++) {
                  this.Zm.oc.Gc[_0x191856].jj(this.dn);
                }
                for (var _0x2e93f3 = 0; _0x2e93f3 < this.Zm.oc.Ic.length; _0x2e93f3++) {
                  this.Zm.oc.Ic[_0x2e93f3].jj(this.gn);
                }
                for (var _0x2b8cc0 = 0; _0x2b8cc0 < this.Zm.oc.Hc.length; _0x2b8cc0++) {
                  this.Zm.oc.Hc[_0x2b8cc0].jj(this.hn);
                }
              }
            };
            _0x47ec08.prototype.am = function () {
              return this.pc;
            };
            _0x47ec08.prototype.$l = function (_0x56f24e) {
              this.$m = _0x56f24e;
              this._m = "#ffffff";
              this.lm();
            };
            _0x47ec08.prototype._l = function (_0x44bfb1) {
              this.$m = _0x4f372e;
              this._m = _0x44bfb1;
              this.lm();
            };
            _0x47ec08.prototype.lm = function () {
              var _0xcaff9d = _0x4b2cbe();
              this.Zm.yc(_0x3819e1.Ac.vg, null, _0xcaff9d.Lc.Ub().ib(this.$m.lj), _0xcaff9d.Lc.Ub().kb(this.$m.mj), _0xcaff9d.Lc.Ub().lb(this.$m.nj), _0xcaff9d.Lc.Ub().mb(this.$m.pj), _0xcaff9d.Lc.Ub().nb(this.$m.oj), this._m);
            };
            _0x47ec08.prototype.Xl = function (_0x58701b) {
              this.Gi = _0x58701b;
            };
            _0x47ec08.prototype.cm = function () {
              return this.Gi;
            };
            _0x47ec08.prototype.om = function (_0x134bc1, _0x1e41f2) {
              this.an = _0x134bc1;
              this.bn = _0x1e41f2;
              for (var _0x27fe3f = 0; _0x27fe3f < this.pc; _0x27fe3f++) {
                var _0x478d68 = this.Zm.qc[_0x27fe3f];
                _0x478d68.Cc.jj(this.an);
                _0x478d68.Dc.jj(this.bn);
              }
            };
            _0x47ec08.prototype.rm = function (_0x45ddac, _0xaea486, _0x2a4bd6, _0x4ab728) {
              this.cn = _0x45ddac;
              this.dn = _0xaea486;
              this.gn = _0x2a4bd6;
              this.hn = _0x4ab728;
              for (var _0x1ef163 = 0; _0x1ef163 < this.Zm.oc.Fc.length; _0x1ef163++) {
                this.Zm.oc.Fc[_0x1ef163].jj(this.cn);
              }
              for (var _0x28a35b = 0; _0x28a35b < this.Zm.oc.Gc.length; _0x28a35b++) {
                this.Zm.oc.Gc[_0x28a35b].jj(this.dn);
              }
              for (var _0x107716 = 0; _0x107716 < this.Zm.oc.Ic.length; _0x107716++) {
                this.Zm.oc.Ic[_0x107716].jj(this.gn);
              }
              for (var _0x47006d = 0; _0x47006d < this.Zm.oc.Hc.length; _0x47006d++) {
                this.Zm.oc.Hc[_0x47006d].jj(this.hn);
              }
            };
            _0x47ec08.prototype.Uf = function () {
              var _0x15a366 = this.Gi * 2;
              var _0xcde63e = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var _0xac1f2b = this.bm[0];
                var _0x453430 = this.bm[1];
                var _0x13af5c = this.bm[2];
                this.Zm.qc[0].Sc(_0xac1f2b, _0x453430, _0x15a366, _0xcde63e, _0x13af5c);
                this.Zm.oc.Sc(_0xac1f2b, _0x453430, _0x15a366, _0x13af5c);
              }
              for (var _0x173972 = 1; _0x173972 < this.pc; _0x173972++) {
                var _0x279c49 = this.bm[_0x173972 * 3];
                var _0x460e58 = this.bm[_0x173972 * 3 + 1];
                var _0x36ba73 = this.bm[_0x173972 * 3 + 2];
                this.Zm.qc[_0x173972].Sc(_0x279c49, _0x460e58, _0x15a366, _0xcde63e, _0x36ba73);
              }
            };
            _0x47ec08.prototype.tm = function (_0x10b31e) {
              _0x10b31e.render(this.Zm.nc);
            };
            return _0x47ec08;
          }();
          _0x3819e1.kf = function () {
            function _0x1fa2b7(_0x31fd3e) {
              this.nd = _0x31fd3e;
            }
            _0x1fa2b7.bgcanvas = $("#background-canvas");
            _0x1fa2b7.socialButtons = $("#social-buttons");
            _0x1fa2b7.socialButtons.html("");
            _0x1fa2b7.jn = $("#game-view");
            _0x1fa2b7.gameCanvas = $("#game-canvas");
            _0x1fa2b7.ln = $("#results-view");
            _0x1fa2b7.mn = $("#stretch-box");
            _0x1fa2b7.nn = $("#main-menu-view");
            _0x1fa2b7.pn = $("#popup-view");
            _0x1fa2b7.qn = $("#loading-view");
            _0x1fa2b7.rn = $("#restricted-view");
            _0x1fa2b7.sn = $("#toaster-view");
            _0x1fa2b7.tn = $("#error-gateway-connection-view");
            _0x1fa2b7.un_error = $("#error-game-connection-view");
            _0x1fa2b7.vn = $("#markup-wrap");
            _0x1fa2b7.prototype.ha = function () {};
            _0x1fa2b7.prototype.Gk = function () {};
            _0x1fa2b7.prototype.Hk = function () {};
            _0x1fa2b7.prototype.Bk = function () {};
            _0x1fa2b7.prototype.Jf = function () {};
            _0x1fa2b7.prototype.Nf = function (_0x1b5565, _0x36e22d) {};
            return _0x1fa2b7;
          }();
          _0x3819e1.Vj = function () {
            function _0x25628a(_0x4e9163, _0x3cb9f4, _0x337f03, _0x31bda8, _0x5bda89, _0x10f0ca) {
              var _0x16a8e3 = "OK";
              var _0x432b56 = $(_0x16a8e3);
              _0x432b56.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: _0x3cb9f4,
                    name: _0x337f03,
                    caption: _0x31bda8,
                    description: _0x5bda89,
                    picture: _0x10f0ca
                  }, function () {});
                }
              });
              return _0x432b56;
            }
            var _0x24abeb = $("#final-caption");
            var _0x24faf4 = $("#final-continue");
            var _0x6945c7 = $("#congrats-bg");
            var _0x2141c3 = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var _0x814b1c = $("#final-share-fb");
            var _0x4644fd = $("#final-message");
            var _0x3ebdd6 = $("#final-score");
            var _0x1444e6 = $("#final-place");
            var _0x33bd05 = $("#final-board");
            var _0x1686ef = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              var _0x1fd8e3 = this;
              var _0x2ade91 = _0x4b2cbe();
              _0x814b1c.toggle(_0x3dbc31.xn);
              _0x24abeb.text(_0x36bffa.H("index.game.result.title"));
              _0x24faf4.text(_0x36bffa.H("index.game.result.continue"));
              _0x24faf4.click(function () {
                _0x2ade91.Ci.Be();
                _0x2ade91.zn.yn.ka();
                _0x2ade91.Ci.pe(_0x3819e1.ge.je._e);
                _0x2ade91.og.Ak(_0x2ade91.og._e);
              });
              
              // Add respawn button
              var _0x4327d6 = _0x24faf4;
              _0x4327d6.after("<div id='final-replay'>Respawn</div>");
              
              $("#final-replay").click(function () {
                respawnFn();
              });
              
              $("#final-replay").css({
                "position": "absolute",
                "top": "10px",
                "left": "15px",
                "right": "15px",
                "background": "#f7941d",
                "color": "#ffffff",
                "line-height": "50px",
                "border-radius": "5px",
                "text-align": "center",
                "cursor": "pointer",
                "border": "none",
                "font-size": "24px",
                "z-index": "9999",
                "pointer-events": "auto"
              });
              
              // تأثير hover خفيف جداً
              $("#final-replay").hover(
                function() {
                  $(this).css({
                    "background": "#fa9d32"
                  });
                },
                function() {
                  $(this).css({
                    "background": "#f7941d"
                  });
                }
              );
              $("html").keydown(function (_0x5c4aec) {
                if (_0x5c4aec.keyCode === 32) {
                  _0x1fd8e3.An = true;
                }
              }).keyup(function (_0x2d2f01) {
                if (_0x2d2f01.keyCode === 32) {
                  _0x1fd8e3.An = false;
                }
              });
              this.ng = new _0x3819e1.Eg(_0x3819e1.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            _0x1686ef.prototype.ha = function () {};
            _0x1686ef.prototype.Gk = function () {
              if (this.Cn === 0) {
                _0x3819e1.kf.jn.stop();
                _0x3819e1.kf.jn.fadeIn(500);
                // Remove confetti when game starts
                var bgLayer = document.getElementById("animated-confetti-layer");
                if (bgLayer) {
                  bgLayer.remove();
                }
                _0x3819e1.kf.ln.stop();
                _0x3819e1.kf.ln.fadeOut(1);
                _0x3819e1.kf.nn.stop();
                _0x3819e1.kf.nn.fadeOut(50);
                _0x3819e1.kf.pn.stop();
                _0x3819e1.kf.pn.fadeOut(50);
                _0x3819e1.kf.sn.stop();
                _0x3819e1.kf.sn.fadeOut(50);
                _0x3819e1.kf.qn.stop();
                _0x3819e1.kf.qn.fadeOut(50);
                _0x3819e1.kf.rn.stop();
                _0x3819e1.kf.rn.fadeOut(50);
                _0x3819e1.kf.tn.stop();
                _0x3819e1.kf.tn.fadeOut(50);
                _0x3819e1.kf.un_error.stop();
                _0x3819e1.kf.un_error.fadeOut(50);
                _0x3819e1.kf.mn.stop();
                _0x3819e1.kf.mn.fadeOut(1);
                _0x3819e1.kf.bgcanvas.stop();
                _0x3819e1.kf.bgcanvas.fadeOut(50);
                _0x3819e1.GameView.Kf(false);
                _0x3819e1.kf.socialButtons.stop();
                _0x3819e1.kf.socialButtons.fadeOut(50);
                _0x3819e1.kf.vn.stop();
                _0x3819e1.kf.vn.fadeOut(50);
              } else {
                _0x3819e1.kf.jn.stop();
                _0x3819e1.kf.jn.fadeIn(500);
                // Remove confetti when game starts
                var bgLayer = document.getElementById("animated-confetti-layer");
                if (bgLayer) {
                  bgLayer.remove();
                }
                _0x3819e1.kf.ln.stop();
                _0x3819e1.kf.ln.fadeIn(500);
                _0x3819e1.kf.nn.stop();
                _0x3819e1.kf.nn.fadeOut(50);
                _0x3819e1.kf.pn.stop();
                _0x3819e1.kf.pn.fadeOut(50);
                _0x3819e1.kf.sn.stop();
                _0x3819e1.kf.sn.fadeOut(50);
                _0x3819e1.kf.qn.stop();
                _0x3819e1.kf.qn.fadeOut(50);
                _0x3819e1.kf.rn.stop();
                _0x3819e1.kf.rn.fadeOut(50);
                _0x3819e1.kf.tn.stop();
                _0x3819e1.kf.tn.fadeOut(50);
                _0x3819e1.kf.un_error.stop();
                _0x3819e1.kf.un_error.fadeOut(50);
                _0x3819e1.kf.mn.stop();
                _0x3819e1.kf.mn.fadeOut(1);
                _0x3819e1.kf.bgcanvas.stop();
                _0x3819e1.kf.bgcanvas.fadeOut(50);
                _0x3819e1.GameView.Kf(false);
                _0x3819e1.kf.socialButtons.stop();
                _0x3819e1.kf.socialButtons.fadeOut(50);
                _0x3819e1.kf.vn.stop();
                _0x3819e1.kf.vn.fadeOut(50);
              }
            };
            _0x1686ef.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            _0x1686ef.prototype.En = function () {
              _0x6945c7.hide();
              setTimeout(function () {
                _0x6945c7.fadeIn(500);
              }, 3000);
              _0x2141c3.hide();
              setTimeout(function () {
                _0x2141c3.fadeIn(500);
              }, 500);
              this.Cn = 1;
              return this;
            };
            _0x1686ef.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                _0x4b2cbe().Ci.Fe();
              }
            };
            _0x1686ef.prototype.Jf = function () {
              this.ng.Jf();
            };
            _0x1686ef.prototype.Nf = function (_0x296c55, _0x143ee7) {
              this.ng.Nf(_0x296c55, _0x143ee7);
            };
            _0x1686ef.prototype.Fn = function (_0x25cd8b, _0x3eac6b, _0x3042b4) {
              var _0x2c7d33 = undefined;
              var _0x2f5a1c = undefined;
              var _0x5b30e9 = undefined;
              if (_0x3eac6b >= 1 && _0x3eac6b <= 10) {
                _0x2c7d33 = _0x36bffa.H("index.game.result.place.i" + _0x3eac6b);
                _0x2f5a1c = _0x36bffa.H("index.game.result.placeInBoard");
                _0x5b30e9 = _0x36bffa.H("index.game.social.shareResult.messGood").replace("{0}", _0x3042b4).replace("{1}", _0x25cd8b).replace("{2}", _0x2c7d33);
              } else {
                _0x2c7d33 = "";
                _0x2f5a1c = _0x36bffa.H("index.game.result.tryHit");
                _0x5b30e9 = _0x36bffa.H("index.game.social.shareResult.messNorm").replace("{0}", _0x3042b4).replace("{1}", _0x25cd8b);
              }
              _0x4644fd.html(_0x36bffa.H("index.game.result.your"));
              _0x3ebdd6.html(_0x25cd8b);
              _0x1444e6.html(_0x2c7d33);
              _0x33bd05.html(_0x2f5a1c);
              if (_0x3dbc31.xn) {
                var _0x683c09 = _0x36bffa.H("index.game.result.share");
                _0x36bffa.H("index.game.social.shareResult.caption");
                _0x814b1c.empty().append(_0x25628a(_0x683c09, "https://wormate.io", "wormate.io", _0x5b30e9, _0x5b30e9, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            _0x1686ef.prototype.Gn = function () {
              return this.Bn;
            };
            _0x1686ef.prototype.Hn = function () {
              return this.An;
            };
            return _0x1686ef;
          }();
          _0x3819e1.sk = function () {
            var _0x40a56a = $("#loading-progress-cont");
            var _0x21552d = $("#loading-progress-bar");
            var _0x5b02d5 = $("#loading-progress-text");
            var _0x2202c1 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            _0x2202c1.prototype.ha = function () {};
            _0x2202c1.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeIn(500);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            _0x2202c1.prototype.Hk = function () {
              _0x4b2cbe().Ci.pe(_0x3819e1.ge.je.ie);
            };
            _0x2202c1.prototype.Bk = function () {};
            _0x2202c1.prototype.Kn = function () {
              this.Ln("", 0);
              _0x40a56a.stop();
              _0x40a56a.fadeIn(100);
            };
            _0x2202c1.prototype.Mn = function () {
              _0x40a56a.stop();
              _0x40a56a.fadeOut(100);
            };
            _0x2202c1.prototype.Ln = function (_0x394033, _0x65a71f) {
              if (this.Jn !== _0x394033) {
                this.Jn = _0x394033;
              }
              var _0x264d31 = _0x36bffa.P(Math.floor(_0x65a71f * 100), 0, 100);
              if (this.In !== _0x264d31) {
                _0x21552d.css({
                  width: _0x264d31 + "%"
                });
                _0x5b02d5.html(_0x264d31 + " %");
              }
            };
            return _0x2202c1;
          }();
          _0x3819e1.Wj = function () {
            var _0x4e05f3 = $("#mm-line-top");
            $("#mm-line-center");
            $("#mm-line-bottom");
            var _0x56665e = $("#mm-bottom-buttons");
            var _0x426090 = $("#mm-menu-cont");
            var _0x55955d = $("#mm-loading");
            var _0x4b3fb2 = $("#mm-loading-progress-bar");
            var _0x180a23 = $("#mm-loading-progress-text");
            var _0x4163c3 = $("#mm-skin-canv");
            var _0x2fe9a4 = $("#mm-skin-prev");
            var _0x3506ce = $("#mm-skin-next");
            var _0x33a632 = $("#mm-skin-over");
            var _0xf97a74 = $("#mm-skin-over-button-list");
            var _0x5bfca3 = $("#mm-params-nickname");
            var _0x4afc21 = $("#mm-params-game-mode");
            var _0x31bb6e = $("#mm-action-play");
            var _0x4893fa = $("#mm-action-guest");
            var _0x1af9e3 = $("#mm-action-login");
            var _0x5b4813 = $("#mm-player-info");
            var _0xa9a86d = $("#mm-store");
            var _0x10eff4 = $("#mm-leaders");
            var _0x51fd40 = $("#mm-settings");
            var _0x136abd = $("#mm-coins-box");
            var _0xd4a303 = $("#mm-player-avatar");
            var _0x393697 = $("#mm-player-username");
            var _0x5c73cb = $("#mm-coins-val");
            var _0x2fe627 = $("#mm-player-exp-bar");
            var _0x3c91f5 = $("#mm-player-exp-val");
            var _0xb7c177 = $("#mm-player-level");
            var _0x242a10 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.Ek);
              var _0x5f5d8d = _0x4b2cbe();
              this.In = -1;
              this.Jn = "";
              this.Nn = new _0x3819e1.dm(_0x4163c3);
              _0x4afc21.click(function () {
                _0x5f5d8d.Ci.Be();
              });
              _0x4163c3.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.ik);
                }
              });
              _0x2fe9a4.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.On.Ej();
              });
              _0x3506ce.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.On.Dj();
              });
              _0x5bfca3.keypress(function (_0x50db13) {
                if (_0x50db13.keyCode == 13) {
                  _0x5f5d8d.Pn(true);
                }
              });
              _0x31bb6e.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.Pn(true);
      $("<input type=\"button\" value=\"RESPAWN\" onclick=\"respawnFn()\" style=\"margin-top:5px;width:100%;background-color:#f7941d;color:#fff;border:0;height:35px;\">").insertAfter(_0x5bfca3);

              });
              _0x4893fa.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.Pn(true);
              });
              _0x1af9e3.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.og.Ak(_0x5f5d8d.og.fk);
              });
              _0x51fd40.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.og.Ak(_0x5f5d8d.og.$h);
              });
              _0x5b4813.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.dk);
                }
              });
              _0x10eff4.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.bk);
                }
              });
              _0xa9a86d.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
     