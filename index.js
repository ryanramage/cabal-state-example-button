const machine = {
  id: 'button',
  initial: 'off',
  context: {
    count: 0
  },
  states: {
    off: {
      on: {
        ON: {
          target: 'on',
          actions: ['incTriggerCount']
        }
      }
    },
    on: {
      on: {
        OFF: {
          target: 'off',
        }
      }
    }
  }
}

const actions = {}

const assignments = {
  incTriggerCount: {
    count: (context, event) => context.count + 1
  }
}

module.exports = { machine, actions, assignments }
