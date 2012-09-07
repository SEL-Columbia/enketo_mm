describe "common: a hello world test", ->
  it "can add one plus one", ->
    expect(1 + 1).toBe(2)
    expect(1 + 3).not.toBe(5)

  it "can fail", ->
    expect(1 + 1).toBe(10)